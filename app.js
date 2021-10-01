import './App.css';
import home from './components/home';
import about from './components/about';
import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
      
        <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/contact">Contact</Link>{" "}
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/about" component={about} />
            <Route path="/contact" render={() => <h1>Contact address</h1>} />
            <Route render={() => <h1>Pgae not found</h1>} />
          </Switch>
        </div>
        </BrowserRouter>
     
  );
}

export default App;
