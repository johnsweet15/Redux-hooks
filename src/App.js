import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <header className="App-header"></header>
      </div>
    </Router>
  );
}

export default App;
