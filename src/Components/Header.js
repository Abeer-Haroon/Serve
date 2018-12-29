import React from 'react';

const Header = (props) => {
  
  return  <div className ="header_sticky">
  <div className ="container">
      <div className ="row">
          <div className ="col-lg-3 col-6">
              <div id="logo_home">
                  <h1><a href="#" title="Serve">Serve</a></h1>
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
                          <a href="/login" className ="show-submenu">Login<i ></i></a>
                          
                      </li>
                      <li className ="submenu">
                          <a href="/registerr" className ="show-submenu">Register<i ></i></a>
                         
                      </li>
                     
                      <li><a href="#0">بالعربي</a></li>
                  </ul>
              </div>
              
          </nav>
      </div>
  </div>
 
</div>

}

export default Header;