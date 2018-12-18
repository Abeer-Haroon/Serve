import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class RegistrationForm extends Component {
  register = () => {
    fetch('http://158.175.140.123:30091/listItems', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        DOB: this.state.DOB,
        Gender: this.state.Gender,
        EID: this.state.EID,
        PassportNo: this.state.PassportNo,
        PreferredLocation: this.state.PreferredLocation,
        Phone: this.state.Phone,
        Email: this.state.Email,
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
      <form method="post" action="assets/contact.php" id="contactform" />
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <input type="text" name="FirstName" placeholder="First Name" onChange={this.onChange} />
          </div>


          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="LastName" placeholder="Last Name" onChange={this.onChange} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="DOB" placeholder="Date of Birth" onChange={this.onChange} />
            </div>
          </div>




          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Gender" placeholder="Gender" onChange={this.onChange} />
            </div>

          </div>
        </div>


        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="EID" placeholder="Emirates ID No." onChange={this.onChange} />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="PassportNo" placeholder="Passport Number" onChange={this.onChange} />
            </div>



          </div>

        </div>


        <div className="row">


          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Preferred Location" placeholder="Preferred Medical Location" onChange={this.onChange} />
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" onChange={this.onChange} />
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <input type="text" name="Phone" placeholder="Phone No." onChange={this.onChange} />
            </div>

          </div>



        </div>





        <input type="submit" value="APPLY" className="btn_1 add_top_20" id="submit-contact" onClick={this.register} />
     
      </div>
    </form>

  }
}
export default RegistrationForm
