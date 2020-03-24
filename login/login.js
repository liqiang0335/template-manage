/* eslint-disable no-console */
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
        console.log("App -> params", params);
        return axios.post("url", params).then(res => {
          console.log(res);
          // post data to server
          // save toke
          // goto main page
        });
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
