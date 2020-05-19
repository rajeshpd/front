import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import Showfundriser from "./ShowFundriser";
import Showdonors from "./Showdonors";
import Addfundriser from "./addfundriser";
import Category from "./Category";
import addUser from "./AddUser";
import Showreview from "./showreview"
function App() {
  return (
    <Router>
      <div className="">
        <MainNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/admin/Home"} component={MainHome} />
          {/* <Route exact path={"/main/add"} component={Register} /> */}
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/admin/Showfundriser"} component={Showfundriser} />
          <Route path={"/admin/Showdonors"} component={Showdonors} />
          <Route path={"/admin/category"} component={Category} />
          <Route path={"/admin/addfundriser"} component={Addfundriser} />
          <Route path={"/admin/addUser"} component={addUser} />
          <Route path={"/admin/showreview"} component={Showreview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
