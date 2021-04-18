import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./Components/Login/Login";
import NotFound from "./Components/Shared/NotFound/NotFound";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute";
import Home from "./Components/Home/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs/AboutUs";
import Contact from "./Components/AboutUs/Contact/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Reviews from "./Components/Dashboard/Reviews/Reviews";
import AddMember from "./Components/Dashboard/AddMember/AddMember";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
import ManageWeb from "./Components/Dashboard/ManageWeb/ManageWeb";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/Dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addMember">
            <AddMember></AddMember>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/manageWeb">
            <ManageWeb></ManageWeb>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Reviews></Reviews>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
