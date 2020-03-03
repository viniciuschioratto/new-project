import React from 'react';
import Router from "./router";
import NavBar from "./pages/navbar"
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Router></Router>
      </div>
    </>
  );
}

export default App;
