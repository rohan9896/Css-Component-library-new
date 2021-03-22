import React from "react";
import "./App.css";
import "./Components/Buttons";
import Header from "./Components/Header";
import ComponentsList from "./Components/ComponentsList"
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocsHeader from "./Components/DocsHeader";
import DocsContent from "./Components/DocsContent";


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact>
            <DocsHeader />
            <DocsContent />
          </Route>
          <Route path="/componentslist">
            <ComponentsList />
            <h1>TO BE CONTINUED............</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
