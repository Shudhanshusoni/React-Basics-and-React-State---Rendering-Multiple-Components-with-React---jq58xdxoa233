import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const project=[
    {
      id:1,
      name:'project-name'
    },
    {
      id:2,
      name:'project-description'
    }
  ]
  return (
    <div id="main">
      { project.map((cur) => (
          <div>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h2 data-ns-test="project-description"> {project.name}</h2>
          </div>
        ))} 
    </div>
  )
}

export default App;
