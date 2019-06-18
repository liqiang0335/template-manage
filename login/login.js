import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import "ynw/style/reset.css";
import "./style/common.scss";
import "../common/style/icomoon/style.css";

import Login from "./container/Login";
import Register from "./container/Register";
import Forget from "./container/Forget";
import Foreign from "./container/Foreign";

function App() {
  return (
    <HashRouter>
      <div className="app flex grow">
        <div className="box flex column">
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/foreign" component={Foreign} />
        </div>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
