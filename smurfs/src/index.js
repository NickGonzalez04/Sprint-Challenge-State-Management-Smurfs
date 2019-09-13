import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import reducer 

export const store = createStore({/* add reducer here */},applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById("root"));
