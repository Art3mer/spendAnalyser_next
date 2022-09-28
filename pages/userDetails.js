import axios from "axios";
import { useState } from "react";
import React from "react";

function userDetails() {
  const [value, setValue] = useState(null);
  axios.get("/api/newget").then((res) => {
    console.log(res.data);
    setValue(res.data);
  });
  return (
    <div>
      <div>
        {value && value.data
          ? value.data.map((item, i) => {
              return (
                <div>
                  <div>Food : {item.Food}</div>
                  <div>Amount :{item.Amount}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default userDetails;
