import "ynw/style/reset.css";
import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm/LoginForm";
// import axios from "axios";

const App = () => {
  return (
    <LoginForm
      submiter={async params => {
        console.log("App -> params", params);
        // post data to server
        return { token: "Hello" };
      }}
      onOk={res => {
        console.log("App -> res", res);
        // save toke
        // goto main page
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
