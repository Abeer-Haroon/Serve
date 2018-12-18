import React from 'react';
const MarriageForm = (props) => {
    return <div>
    <div className=" col-lg-8 col-md-8 ml-auto">
    <div className="box_general">
        <h3>Apply for Marriage Contract</h3>
        <p>
            Your details are secure with us
        </p>
        </div>
        </div>
            <div id="message-contact"></div>
            <form method="post" action="assets/contact.php" id="contactform" />
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="First Name" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="Last Name" />
                        </div>
                    </div>
                    
                </div>
                
                <div className="row">
                <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="Date of Birth" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="number" className="form-control" id="name_contact" name="name_contact" placeholder="Gender" />
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" id="email_contact" name="email_contact" className="form-control" placeholder="Emirates ID No." />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" id="phone_contact" name="phone_contact" className="form-control" placeholder="Passport No." />
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="email" id="email_contact" name="email_contact" className="form-control" placeholder="Emirate" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" id="phone_contact" name="phone_contact" className="form-control" placeholder="Preferred Location" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="email" id="email_contact" name="email_contact" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" id="phone_contact" name="phone_contact" className="form-control" placeholder="Phone No." />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="Partner First Name" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name_contact" name="name_contact" placeholder="Partner Last Name" />
                        </div>
                    </div>
                    
                </div>


              
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" id="email_contact" name="email_contact" className="form-control" placeholder="Partner Emirates ID No." />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" id="phone_contact" name="phone_contact" className="form-control" placeholder="Partner Passport No." />
                        </div>
                    </div>
                </div>
                
                 
                <input type="submit" value="APPLY" className="btn_1 add_top_20" id="submit-contact" />
   </div>             
                
}
export default MarriageForm