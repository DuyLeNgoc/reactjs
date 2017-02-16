import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Create from "containers/create";
import Detail from "containers/detail";
import Home from "containers/home";
import App from "containers/app";
// import reducer from 'redux/reducer';
import {taskListReducer} from "redux/home";

const app = document.getElementById('root');
let store = createStore(taskListReducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="task/create" name="create" component={Create} />
        <Route path="task/detail/:taskID" name="detail" component={Detail} />
      </Route>
    </Router>
  </Provider>
), app)
