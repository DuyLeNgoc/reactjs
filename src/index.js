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
      <Route path="/task/create" name="create" component={Create}></Route>
      <Route path="task/detail" name="detail" component={Detail}></Route>
    </Route>
  </Router>
), app)

var TASKS = [
  {name: 'Football', description: '7:30PM Thursday weekly at 367 Hoang Hoa Tham, Tan Binh, TP HCM'},
  {name: 'ReactJS Traning', description: 'Do excercise 2 before 3:00PM on 13/02/2017'},
  {name: 'ReactJS Traning', description: 'Participating ReactJS training from 4:30PM on 13/02/2017'}
];
 
// ReactDOM.render(
//   <Home tasks={TASKS} />,
//   document.getElementById('container')
// );
