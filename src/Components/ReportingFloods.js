import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class ReportingFloods extends Component {
 
  register = () => {
    fetch('http://158.175.140.123:30091/listItems', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({

        Area: this.state.Area,
        NearestLandmark: this.state.NearestLandmark,
        UrgencyLevel: this.state.UrgencyLevel,
        Name: this.state.Name,
        Phone: this.state.Phone,
        Description: this.state.Description,
       
       
      })
    }).then((response) => {
      response.json().then((jsonResponse) => {
        console.log(jsonResponse)
      })
    })
  }

  retrieve = () => {
    fetch('http://localhost:7000/listItems')
      .then((response) => {
        response.json().then((jsonResponse) => {
          console.log(jsonResponse)
        })
      })
  }


  onChange = (input) => {
    this.setState({
      [input.target.name]: input.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    return true;
  }
  render() {
    if (this.props.loggedInStatus) {
      return <Redirect to={'/dashboard'} />
    }
    
    return <form onSubmit={this.onSubmit}>
    <div className=" col-lg-8 col-md-8 ml-auto">
    <div className="box_general">
        <h3>Report Flooding in your Area</h3>
        <p>
           
            
        </p>
        </div>
        </div>
      <form method="post" action="assets/contact.php" id="contactform" />
      <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="row">
          


          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Area" placeholder="Area" onChange={this.onChange} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="NearestLandmark" placeholder="Nearest Landmark" onChange={this.onChange} />
            </div>

        </div>

        <div className="row">
         



          
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="UrgencyLevel" placeholder="Level of Urgency" onChange={this.onChange} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Description" placeholder="Description" onChange={this.onChange} />
            </div>
          </div>

        </div>


       


        <div className="row">


         

          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Name" placeholder="Name" onChange={this.onChange} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Phone" placeholder="Phone No." onChange={this.onChange} />
            </div>

          </div>
        </div>


     





        <input type="submit" value="Report" className="btn_1 add_top_20" id="submit-contact" onClick={this.register} />
     
      </div>




      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
   
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="container margin_60_35">
    <div className="row">
      <div className="col-lg-3 col-md-12">
        <p>
          <a href="index.html" title="Serve">
            <img src="img/file-5.png" data-retina="true" alt="" width="163" height="36" className="img-fluid"/>
          </a>
        </p>
      </div>
      <div className="col-lg-3 col-md-4">
        <h5>About</h5>
        <ul className="links">
          <li><a href="#0">About us</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="#0">FAQ</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="register.html">Register</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-4">
        <h5>Useful links</h5>
        <ul className="links">
          <li><a href="#0">Police</a></li>
          <li><a href="#0">Ambulance</a></li>
          <li><a href="#0">Civil Defence</a></li>
          <li><a href="#0">Electricity</a></li>
          <li><a href="#0">Water Emergencies</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-4">
        <h5>Contact with Us</h5>
        <ul className="contacts">
          <li><a href="tel://8004910899"><i className="icon_mobile"></i> UAE 800 SERVE</a></li>
          <li><a href="mailto:info@alejni.com"><i className="icon_mail_alt"></i> info@serve.com</a></li>
        </ul>
        <div className="follow_us">
          <h5>Follow us</h5>
          <ul>
            <li><a href="https://twitter.com/Abudhabi_tamm"><i className="social_facebook"></i></a></li>
            <li><a href="https://twitter.com/Abudhabi_tamm"><i className="social_twitter"></i></a></li>
            <li><a href="https://twitter.com/Abudhabi_tamm"><i className="social_linkedin"></i></a></li>
            <li><a href="https://twitter.com/Abudhabi_tamm"><i className="social_instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
   
    <hr/>
    <div className="row">
      <div className="col-md-8">
        <ul id="additional_links">
          <li><a href="#0">Terms and conditions</a></li>
          <li><a href="#0">Privacy</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <div id="copy">© 2018 Serve</div>
      </div>
    </div>
  </div>
    </form>

  }
}
export default ReportingFloods
