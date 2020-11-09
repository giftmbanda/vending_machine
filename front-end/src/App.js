import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"; // Import here your file style
import MyTable from "./components/MyTable";
import MyNavbar from "./components/MyNavbar";


const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={MyTable} />
      </Switch>
    </Router>
  );
};

export default App;
