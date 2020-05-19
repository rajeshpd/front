import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

<section id="about">
                

          <div class="bg-light">
            <div class="container py-5">
              <div class="row h-100 align-items-center py-5">
                <div class="col-lg-6">
                  <h4 class="display-4">What Is Crowdfunding? Start. Share. Collect. Change.</h4>
                  <p class="lead text-muted mb-0">Thousands fight for their lives from fatal diseases and unforeseen medical emergencies every day. Families are often left drained of all their savings due to insufficient insurance coverage and are forced to take loans at high interest rates. Many also have to risk delaying or stopping treatment due to lack of funds.</p>
                  <p class="lead text-muted"> <a href="https://bootstrapious.com/snippets" class="text-muted"> 
                             </a>
                  </p>
                </div>
                <div class="col-lg-6 d-none d-lg-block"><img src="images/aboutus.jpg" alt="" class="img-fluid"></img></div>
              </div>
            </div>
          </div>
          
          <div class="bg-white py-5">
            <div class="container py-5">
              <div class="row align-items-center mb-5">
                <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                  <h2 class="font-weight-light">How Crowdfunding Works </h2>
                  {/* <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Step 1: Create your fundraiser instantly</a> */}
                </div>
                
                <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="/images/aboutus1.png" alt="" class="img-fluid mb-4 mb-lg-0"></img></div>
              
              </div>
              
              <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Step 1: Create your fundraiser instantly</a><img src="/images/about1.png"></img>
              <div class="row align-items-center">
                
              <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Step 2: Share your fundraiser online</a><img src="/images/about2.png"></img>
                <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0"></img></div>
                
                <div class="col-lg-6"><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Step 3: Receive donations from around the world</a><br></br><img src="/images/about3.png"></img>
                
                {/* <i class="fa fa-leaf fa-2x mb-3 text-primary"></i> */}
                
                  {/* <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2> */}
                  
                </div>
              </div><br></br>
            </div><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Step 4: Transfer funds to the hospital directly</a><img src="/images/about4.png"></img>
          </div>
          
          
          
          
          
          </section>

      </Fragment>
    );
  }
}

export default AdminHome;
