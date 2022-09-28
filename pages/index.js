import { Button, Form, Input } from "antd";
import React from "react";
// import Head from 'next/head'
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Card, Layout, Col, Row } from "antd";
// import "./index.css";
import { DingdingOutlined, ZhihuOutlined } from "@ant-design/icons";
// import "./App.css";
import axios from "axios";


const { Header, Content, Footer } = Layout;
const App = () => {
  let person = {};
  let spend = {};

  // const [lists, setLists] = useState([]);
  const [item, setItem] = useState([]);
  const [arr, setArr] = useState({});
  const [flag, setFlag] = useState(false);
  const [average, setAverage] = useState(0);

  const onFinish = async (values) => {
    axios.post("/api/profile", values).then(
      (res)=>{
      console.log(localStorage.setItem("underId",res.data.data._id))
    }
    );
    setFlag(false);
    person = localStorage.getItem("person");
    let personArr = {};
    localStorage.setItem("personDetails", JSON.stringify(person));
    personArr.person = values;
    await setItem(personArr);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish1 = (values) => {
    values.id = localStorage.getItem("underId")
    axios.post("/api/spendAnalyser", values).then(console.log("AAA"));
    // console.log("OnFinish1 Values: " + JSON.stringify(item));
    item.spend = values;
    setItem(item);
    setFlag(true);
    let list = arr;
    console.log("listlistlist " + JSON.stringify(list));
    if (list[item.person.Name]) {
      console.log("EXIST" + JSON.stringify(list));
      item.total =
        parseInt(list[item.person.Name].total) + parseInt(item.spend.Amount);
      console.log("total " + item.total);
      item.count = parseInt(list[item.person.Name].count) + 1;
      console.log("count " + item.count);
      item.average = parseInt(item.total) / parseInt(item.count);
      console.log("average " + item.average);
      list[item.person.Name] = item;
    } else {
      item.count = 1;
      item.total = item.spend.Amount;
      console.log("NOT EXIST" + JSON.stringify(item));
      list[item.person.Name] = item;
    }
    setArr(list);
  };
  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    localStorage.setItem("Spend", JSON.stringify(spend));
  });

  return (
    <Layout>
      <Header
        style={{
          className: "container",
          backgroundColor: "gold",
          fontFamily: "serif",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        <ZhihuOutlined />
        Spend Analyser
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "15 15px",
          marginTop: 0,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            textAlign: "center",
            padding: 50,
            minHeight: 600,
            backgroundColor: "grey",
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12}>
                <Card title="Add person" bordered={true}>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Name"
                      name="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Age"
                      name="Age"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Age!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Add Amount" bordered={true}>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish1}
                    onFinishFailed={onFinishFailed1}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Food :"
                      name="Food"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Food!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Amount"
                      name="Amount"
                      rules={[
                        {
                          required: true,
                          message: "Type the Correct Amount!",
                          pattern: new RegExp(/^[0-9]+$/),
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
            </Row>
          </div>
          <Card
            title="Spend Analyser"
            bordered={true}
            style={{
              textAlign: "Left",
            }}
          >
            {flag
              ? Object.keys(arr).map((item, i) => {
                  console.log("UPDATE " + JSON.stringify(arr[item]));
                  return (
                    <div key={i}>
                      <p>Name :<a target="_blank" href="/userDetails"> {arr[item].person.Name}</a></p>
                      <p>Food : {arr[item].spend.Food}</p>
                      <p>average :{arr[item].average}</p>
                    </div>
                  );
                })
              : null}

            <div></div>
          </Card>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "left",
          fontSize: "10px",
          fontFamily: "serif",
        }}
      >
        <DingdingOutlined />
        TAsk!
        <p>@all rights reserved</p>
      </Footer>
    </Layout>
  );
};
export default App;
