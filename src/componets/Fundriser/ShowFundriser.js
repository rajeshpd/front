import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";
export default class ShowDonors extends Component {
  state = {
    fundriser: [],
  };
  componentDidMount = () => {
    this.getfundriser();
    console.log(this.props.location.state.user);
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
        ` http://localhost:5000/api/v1/fundriser/${this.props.location.state.user}`,
        config
      );
      this.setState({
        fundriser: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  onDeleteUser = async (user, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/fundriser/${user}`,
        config
      );

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div>
          {console.log()}
      <section>
        <div id="portfolio">
          <div class="container showtop  login-second ">
            <div class="page-title text-center">
              <h1 class="text-dark">List of your Fundrised</h1>

              <hr class="pg-titl-bdr-btm" />
            </div>
            <div class="row">
              <div class="col-lg-12 ">{/* categotize */}</div>
            </div>

            <div class="row" id="" style={{ opacity: 1 }}>
              {/*  */}
              <div class="container pt-4">
                <div class=" tabletrans "> 
                  <div class="well">
                    <div class="row mb-5">
                      <div class="col-md-6">
                        <div class="pull-right">
                          <a
                            href="/fundriser/addFundriser"
                            class="btn btn-info btn-sm p-2"
                          >
                            Add fundriser
                          </a>
                        </div>
                      </div>

                      <div class="pull-left">
                        <a href="/fundriser/FundriserHome" class="btn btn-info btn-sm p-2">
                          Back to Home
                        </a>
                      </div>
                    </div>
                    <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>
                          {" "}
                          <label class="text-dark">name </label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">phone</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">email</label>
                        </th>

                        <th>
                          {" "}
                          <label className="d-flex justify-content-center text-dark">
                            Actions
                          </label>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                          {this.state.fundriser.map((fundriser) => (
                            <tr key={fundriser._id}>
                              {/* <td className="tbld">
                                <img
                                  src={`${fundriser.photo}`}
                                  alt=""
                                  width="150px"
                                  height="100px"
                                ></img>
                              </td> */}
                              <td className="tbld">{fundriser.name}</td>
                              <td className="tbld">{fundriser.phone}</td>
                              <td className="tbld">{fundriser.email}</td>

                              <td className="d-flex justify-content-center tbld">
                                <div className="btn-group ">
                                  <a
                                    href=""
                                    className="btn btn-danger btn-md mr-5"
                                    value={fundriser._id}
                                    onClick={(e) =>
                                      this.onDeleteUser(fundriser._id, e)
                                    }
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </a>

                                  {/* <a href="" className="btn btn-info btn-md">
                                    <i className="fa fa-edit"></i>
                                  </a> */}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
