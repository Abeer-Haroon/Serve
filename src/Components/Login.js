import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

class Login extends Component {
  state = {
    name: "",
    email: ""
  }
  updateVal = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
  
    return <div>
        <RegistrationForm/>
        <form>
          <br></br>
      <input type="email" name="email" placeholder = "email" onChange={this.updateVal} />
      <input type="password" name="password"  placeholder = "password" onChange={this.updateVal} />
      
    </form>
     <input type="submit" value="Login" className="btn_1 add_top_20" id="submit-contact" />
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br><br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br><br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

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
  </div>

  }
}
function NonEmpty(props){
  return props.value && <div>{props.message}: {props.value}</div>
}
export default Login;




