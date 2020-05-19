import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";
export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      name: "",
      category: "",
      phone: "",
      email: "",
      address: "",
      hospitalname:"",
      doctorname:"",
      doctorcontact:"",
      aadhar:"",
      bankaccountnumber:"",
      goalamount:"",
       file: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount() {
    this.props.getCategory();
  }
  // Input on change
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ category: e.target.value });
  }
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/fundriser/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const fundriser = {
        name: this.state.name,
        category: this.state.category,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        hospitalname: this.state.hospitalname,
        doctorname: this.state.doctorname,
        doctorcontact: this.state.doctorcontact,
        aadhar: this.state.aadhar,
        bankaccountnumber: this.state.bankaccountnumber,
        goalamount: this.state.goalamount,
        photo: res.data.data,
      };
      const body = JSON.stringify(fundriser);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/fundriser`,
        body,
        config1
      );
      console.log(result.data.data);
      alert(`fundrise Added`);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  render() {
    return (
      <div className="container itmtop">
         {console.log(this.state)}
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
                  <div class="card-heading m-4">
                    <h2 class="title text-dark">Add Information</h2>
                  </div>
                  <div class="card-body">
                    <form onSubmit={this.onSubmit}  encType="multipart/form-data">
                      <div class="form-row frow">
                        <div class="name">name:</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Select Category:</div>
                        {/* <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Category
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.props.category.map((category) => (
                              <Dropdown.Item key={category._id}>
                                {category.catname}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown> */}
                        <select
                          id="dropdown "
                          className="btn bg-success"
                          onChange={this.handleDropdownChange}
                        >
                          <option value="no cat">category</option>
                          {this.props.category.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.catname}
                            </option>
                          ))}
                          {/* <option value="N/A">N/A</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option> */}
                        </select>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Phone:</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                            className="input--style-6"
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Email</div>
                        <div class="value">
                          <div class="input-group">
                          <input
                            className="input--style-6"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="address"
                              value={this.state.address}
                            onChange={this.onChange}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Hospital name:</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="hospitalname"
                              value={this.state.hospitalname}
                            onChange={this.onChange}
                        
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Doctor name:</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="doctorname"
                              value={this.state.doctorname}
                            onChange={this.onChange}
                        
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Doctor Contact</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="doctorcontact"
                              value={this.state.doctorcontact}
                            onChange={this.onChange}
                        
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Upload Images:</div>
                        <div className="value">
                          <div className="input-group js-input-file">
                            <input
                              className="input-file"
                              type="file"
                              name="file"
                              id="file"
                              onChange={this.onChangeHandler}
                            />
                            <label className="label-file" htmlFor="file">
                              Choose file
                            </label>
                            {/* <span value={this.state.file}>No file chosen</span> */}
                          </div>
                          <div className="label--desc">
                            Upoload product Image. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                    
                  
                      <div class="form-row frow">
                        <div class="name">aadhar number</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="aadhar"
                              value={this.state.aadhar}
                              onChange={this.onChange}
                          
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                        <div class="name">Bank Details</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="bankaccountnumber"
                              value={this.state.bankaccountnumber}
                              onChange={this.onChange}
                          
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                        <div class="name">Goal amount</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="goalamount"
                              value={this.state.goalamount}
                              onChange={this.onChange}
                          
                            />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                    <button class="btn btn--radius-2 btn-gray" type="submit">
                      ADD
                    </button>
                  </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
