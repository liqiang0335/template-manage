import "ynw/style/reset.css";
import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm/LoginForm";
import axios from "axios";

const App = () => {
  return (
    <LoginForm
      nameKey="account"
      submiter={async params => {
        return axios.post("url", params).then(res => {
          console.log(res);
        });
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
