import React from 'react';

const Another = (props) => {
  
  return  <div>
  <div className ="hero_home version_1">
      <div className ="content">
          <h3>Request a service through Serve</h3>
          <p>
              Find government services across the UAE to help you with your needs
          </p>
          <form method="post" action="list">
              <div id="custom-search-input">
                  <div className ="input-group">
                      <input type="text" className =" search-query" placeholder="Search by Service or Location of Choice...."/>
                      <input href = "/list" type="submit" className ="btn_search" value="Search"/>
                     
                     
                          
                     
                  </div>
                  <ul>
                  </ul>
              </div>
          </form>
      </div>
  </div>

<div className ="container margin_120_95">
      <div className ="main_title">
          <h2>Discover the <strong>online</strong> services!</h2>
             </div>
      <div className ="row add_bottom_30">
          <div className ="col-lg-4">
              <div className ="box_feat" id="icon_1">
                  <span></span>
                  <h3>Search</h3>
                  <p>Service by location</p>
              </div>
          </div>
          <div className ="col-lg-4">
              <div className ="box_feat" id="icon_2">
                  <span></span>
                  <h3>Training</h3>
                  <p>Training and Volunteering Programmes for Emergency Cases. </p>
              </div>
          </div>
          <div className ="col-lg-4">
              <div className ="box_feat" id="icon_3">
                  <h3>Request</h3>
                  <p>Request Online for service approvals.</p>
              </div>
          </div>
      </div>
     
      <p className ="text-center"><a href="list.html" className ="btn_1 medium">Find Service</a></p>

  </div>		


  <div className ="bg_color_1">
  <div className ="container margin_120_95">
      <div className ="main_title">
          <h2>Find by Location</h2>
          <p>Near, Far, Wherever you are!</p>
      </div>
      <div className ="row">
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://d1epq84pwgteub.cloudfront.net/files/0/sites/3/2016/10/dubai.jpg" width="150" height="150" alt=""/>
                  <h3>Dubai</h3>
                  <ul className ="clearfix">
                      <li><strong>30</strong>Services</li>
                      <li><strong>20</strong>Centres</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://www.planetware.com/photos-large/UAE/united-arab-emirates-abu-dhabi-where-to-stay-luxury-abu-dhabi-skyline.jpg" width="150" height="150" alt=""/>
                  <h3>Abu Dhabi</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Services</li>
                      <li><strong>60</strong>Centres</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://images.gulfnews.com/polopoly-images/2016/11/24/1.1934883_1606234170.jpg" width="150" height="150" alt=""/>
                  <h3>Ajman</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Services</li>
                      <li><strong>60</strong>Centres</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://www.commitbiz.com/sites/default/files/blog-images/6-reasons-to-set-up-a-company-in-umm-al-quwain-free-zone.jpg" width="150" height="150" alt=""/>
                  <h3>Umm ul Quwain </h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Services</li>
                      <li><strong>60</strong>Centres</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://pix10.agoda.net/hotelImages/104152/-1/8d2fa2249e2dfeed7f41492d8aa430cc.jpg?s=1024x768" width="150" height="150" alt=""/>
                  <h3>Fujairah</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Services</li>
                      <li><strong>60</strong>Centres</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://www.bayut.com/mybayut/wp-content/uploads/rak-cover-march-2018.jpg" width="150" height="150" alt=""/>
                  <h3>Ras Al Khaimah</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Services</li>
                      <li><strong>60</strong>Centres</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Jabal_hafeet_shahin.jpg" width="150" height="150" alt=""/>
                  <h3>Al Ain</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Services</li>
                      <li><strong>60</strong>Centres</li>
                  </ul>
              </a>
          </div>
          
      </div>
     
  </div> 
  </div>
          <div className ="container margin_120_95">
      <div className ="main_title">
          <h2>Find by Service</h2>
          <p>Serve opens the doors to ease</p>
      </div>
      <div className ="row">
          <div className ="col-lg-3 col-md-6">
              <a href="http://localhost:3000/register" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://image.flaticon.com/icons/svg/88/88591.svg" width="60" height="60" alt=""/>
                  <h3>Visa and Emirates ID</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Doctors</li>
                      <li><strong>60</strong>Clinics</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="http://localhost:3000/marriage" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://static.thenounproject.com/png/197036-200.png" width="60" height="60" alt=""/>
                  <h3>Family and Community</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Doctors</li>
                      <li><strong>60</strong>Clinics</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://cdn.onlinewebfonts.com/svg/img_163905.png" width="60" height="60" alt=""/>
                  <h3>Housing and Property</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Doctors</li>
                      <li><strong>60</strong>Clinics</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://static.thenounproject.com/png/1337907-200.png" width="60" height="60" alt=""/>
                  <h3>Benefits for Emiratis </h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Doctors</li>
                      <li><strong>60</strong>Clinics</li>
                  </ul>
              </a>
          </div>
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://static.thenounproject.com/png/2092788-200.png" width="60" height="60" alt=""/>
                  <h3>Starting and Managing Businesses</h3>
                  <ul className ="clearfix">
                      <li><strong>124</strong>Doctors</li>
                      <li><strong>60</strong>Clinics</li>
                  </ul>
              </a>
          </div>
        
          <div className ="col-lg-3 col-md-6">
              <a href="#0" className ="box_cat_home">
                  <i className ="icon-info-4"></i>
                  <img src="https://image.flaticon.com/icons/png/512/660/660631.png" width="60" height="60" alt=""/>
                  <h3>Full List</h3>
                  <ul className ="clearfix">
                      
                  </ul>
              </a>
          </div>
          </div>
  </div>
  </div>
      
  

}

export default Another;