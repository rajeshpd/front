import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
       import DonorHome from "./DonorHome";
      // import fRegistration from "./Registration";
      import DonorNavbar from "./DonorNavbar";
      import Category from "./Category";
      import QuickModel from "./QuickModel";
      import axios from "axios";
      import Fundriser from "./Fundriser"
export default class DonorFunction extends Component {
  state = {
    users: [],
    fundrisers: [],
    category: [],
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
  getfundrisers = async () => {
    const config = {
      headers: {
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
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      
      
      
          <Router>
            <div className="">
              <DonorNavbar />
              {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
      
              <Switch>
              <Route
              exact
              path={"/donor/Home"}
              render={(props) => (
                <DonorHome
                  {...props}
                  user={this.state.user}
                  getfundrisers={this.getfundrisers}
                  // getCategory={this.getCategory}
                  fundrisers={this.state.fundrisers}
                  // category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/user/Home"} component={CompanyHome} /> */}
            <Route
              exact
              path={"/donor/Category"}
              render={(props) => (
                <Category
                  user={this.state.user}
                  getfundrisers={this.getfundrisers}
                  getCategory={this.getCategory}
                  fundrisers={this.state.fundrisers}
                  category={this.state.category}
                />
              )}
            />
                      <Route path={"/donor/Fundriser"} component={Fundriser} />
                <Route path={"/donor/ShowItems"} component={QuickModel} />
              </Switch>
            </div>
          </Router>
        );
      }
}

