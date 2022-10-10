import React from "react";
import "./App.css";
import SlackPublicRoutes from "routes/router";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "redux/store-reducers";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SlackPublicRoutes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;