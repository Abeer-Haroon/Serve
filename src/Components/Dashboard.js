import React from 'react';

const Dashboard = (props) => {
    return <div>
        <main1 className ="header_sticky">
  <div className ="container">
      <div className ="row">
          <div className ="col-lg-3 col-6">
              <div id="logo_home">
                  <h1><a href="index.html" title="Findoctor">Alejni</a></h1>
              </div>
          </div>
          <nav className ="col-lg-9 col-6">
              <a className ="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
              <ul id="top_access">
                  <li><a href="login.html"><i className ="pe-7s-user"></i></a></li>
                  <li><a href="register-doctor.html"><i className ="pe-7s-add-user"></i></a></li>
              </ul>
              <div className ="main-menu">
                  <ul>
                      
                      <li className ="submenu">
                          <a href="/login" className ="show-submenu">Login<i className ="icon-down-open-mini"></i></a>
                          
                      </li>
                      <li className ="submenu">
                          <a href="/register" className ="show-submenu">Register<i className ="icon-down-open-mini"></i></a>
                         
                      </li>
                      <li><a href="#0">بالعربي</a></li>
                  </ul>
              </div>
              
          </nav>
      </div>
  </div>
 
</main1>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>   
<h2 align="center">Welcome to your dashboard, BEBSI! </h2>
    </div>

}

export default Dashboard