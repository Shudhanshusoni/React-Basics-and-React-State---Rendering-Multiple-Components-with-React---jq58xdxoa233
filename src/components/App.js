import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const project=[
    {
      id:1,
      name:'project-name'
      discription:'project-description'
    }
  ]
  return (
    <div id="main">
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h2 data-ns-test="project-description"> {project.dscription}</h2>
     
    </div>
  )
}

export default App;
