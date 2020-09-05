import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import Layout from "./Layout";
import Top from "./Top";
import Main from "./Main";
import App_list from './App_list';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router basename="{process.env.PUBLIC_URL}">
    <Layout>
        <Route exact path="/" component={Top}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/list" component={App_list}></Route>
    </Layout>
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
