import React from "react";
import "./App.css";
import GithubClone from "./features/GithubClone/GithubClone";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import GithubHomepageClone from "./features/GithubHomepageClone./GithubHomepageClone";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path='/' element={<GithubClone />}></Route>
          <Route path="/GithubHomepageClone" element={<GithubHomepageClone/>}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
