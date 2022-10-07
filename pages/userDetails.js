import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function userDetails() {
  const [value, setValue] = useState(null);
  const [item, setItem] = useState(null);
  let c;
  useEffect(() => {
    c = localStorage.getItem("underId");
    axios.get(`http://localhost:3000/api/newget?id=${c}`).then((res) => {
      // console.log(res.data);
      setValue(res.data);
      setItem(res.data);
    });
  }, []);
  return (
    <div>
      {item && item.data ? (
        <div>
          <div>Food : {item.data.Food}</div>
          <div>Amount :{item.data.Amount}</div>
        </div>
      ) : (
        "null"
      )}
    </div>
  );
}

export default userDetails;
