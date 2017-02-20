import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from "react-redux";

import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; 
injectTapEventPlugin();

import Create from "containers/create";
import Detail from "containers/detail";
import Home from "containers/home";
import App from "containers/app";
import reducer from 'redux/reducer';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="task/create" name="create" component={Create} />
          <Route path="task/detail/:taskID" name="detail" component={Detail} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'))
