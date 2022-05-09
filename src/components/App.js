import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <div>
      <h1 data-ns-test="project-name">project name</h1>
      </div>
      <div>
      <h2 data-ns-test="project-description"> project description</h2>
      </div>
    </div>
  )
}


export default App;
