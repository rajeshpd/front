import React, { Fragment } from "react";
import Login from "./componets/Login";
import fRegistration from "./componets/Fundriser/Registration";
import "./componets/CSS/Home.css";

import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import AdminFunction from "./componets/MainAdmin/AdminFunction";
import AdminNavbar from "./componets/Fundriser/FundriserNavbar";

import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";
import DonorFunction from "./componets/Donor/DonorFunction";
// import DonorNavbar from "./componets/Donor/DonorNavbar";
import FundriserFunctions from "./componets/Fundriser/FundriserFunctions";

import DonorNavbar from "./componets/Donor/DonorNavbar";
// import UserHome from "./componets/UserAdmin/UserHome";

import PrivateRoute from "./componets/utils/PrivateRoute";

class App extends React.Component {
  //  state = {

  //    user: {}
  //  };
  //  LoginUser = async text => {
  //    const res = await axios.post(
  //    ` http://localhost:5000/api/auth/`
  //    );
  //    console.log(res.data.items);
  //    this.setState({
  //      users: res.data.items
  //    });
  //  };
  // state = {
  //   alert: null,
  // };
  // setAlert = (msg, type) => {
  //   this.setState({ alert: { msg, type } });
  //   setTimeout(() => this.setState({ alert: null }), 5000);
  // };
  render() {
    return (
      <Router>
        <div className="">
          {/* <Alert alert={this.state.alert} />
          <Navbar /> */}
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
          <Switch>
            <Route exact path={"/Login/:type"} component={Login} />
          </Switch>
          <AdminNavbar />
          <DonorNavbar/>
          {/* <MainNavbar /> */}
          
          <Switch>
            <PrivateRoute role="fundriser" path={"/fundriser/"} component={FundriserFunctions} />
            <PrivateRoute role="donor" path={"/donor/"} component={DonorFunction} />
            <PrivateRoute role="admin"  path={"/admin/"} component={AdminFunction} />
            {/* <Route exact path={"/admin"} component={UserHome} />

            <Route exact path={"/admin"} component={UserHome} /> */}


            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
