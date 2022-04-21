import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollTop from "./Components/Scroll/ScrollToTop";
//redux
import { Provider } from "react-redux";
import store from "./Redux/store";

import "react-notifications-component/dist/theme.css";
import ReactNotifications from "react-notifications-component";

//
import GlobalStyle from "./Components/GlobalStyling";

import "animate.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <ScrollTop />
      <ReactNotifications />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
