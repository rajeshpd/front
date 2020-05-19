import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FundriserHome from "./FundriserHome";
// import fRegistration from "./Registration";
import FundriserNavbar from "./FundriserNavbar";
import AddFundriser from "./addFundriser";
import showFundriser from "./ShowFundriser";
import Prof from "./Prof";
import ProfileEdit from "./ProfileEdit";
import orders from "./orders";
import axios from "axios";

export default class FundriserFunctions extends React.Component {
  state = {
    category: [],
    fundriser:[],
  };
  getCategory = async () => {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  getfundriser = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/fundriser`,
        config
      );
      this.setState({
        fundrisers: res.data.data,
      });
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  
  render() {
    return (
    <Router>
      <div className="">
        <FundriserNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/fundriser/FundriserHome"} component={FundriserHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          
          <Route
              exact
              path={"/fundriser/addFundriser"}
              render={(props) => (
                <AddFundriser
                  {...props}
                  
                  getCategory={this.getCategory}
                  category={this.state.category}
                />
              )}
            />
            <Route
              path={"/fundriser/showFundriser"}
              getfundriser={this.getfundrisers}
              fundriser={this.state.fundriser}
              component={showFundriser}
            />
         
          <Route path={"/fundriser/Profile"} component={Prof} />
          <Route path={"/fundriser/ProfileEdit"} component={ProfileEdit} />
          <Route path={"/fundriser/orders"} component={orders} />
        </Switch>
      </div>
    </Router>
  );
}
}

