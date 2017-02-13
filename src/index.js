import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Create from "./create";
import Detail from "./detail";
import Home from "./home";
import App from "./app"

const app = document.getElementById('root');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="task/create" name="create" component={Create}></Route>
      <Route path="task/detail(/:task_id)" name="detail" component={Detail}></Route>
    </Route>
  </Router>
), app)
