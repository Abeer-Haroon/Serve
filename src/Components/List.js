import React from 'react';
const List = (props) => {
    return <div>
        <div id="results">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4><strong>Showing 10</strong> of 140 results</h4>
                    </div>
                    <div className="col-md-6">
                        <div className="search_bar_list">
                            <input type="text" className="form-control" placeholder="Ex. Specialist, Name, Doctor..." />
                            <input type="submit" value="Search" />
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
        <div className="filters_listing">
            <div className="container">
                <ul className="clearfix">
                    <li>
                        <h6>Type</h6>
                        <div className="switch-field">
                            <input type="radio" id="all" name="type_patient" value="all" checked />
                            <label for="all">All</label>
                            <input type="radio" id="doctors" name="type_patient" value="doctors" />
                            <label for="doctors">Doctors</label>
                            <input type="radio" id="clinics" name="type_patient" value="clinics" />
                            <label for="clinics">Clinics</label>
                        </div>
                    </li>
                    <li>
                        <h6>Layout</h6>
                        <div className="layout_view">
                            <a href="grid-list.html"><i className="icon-th"></i></a>
                            <a href="#0" className="active"><i className="icon-th-list"></i></a>
                            <a href="list-map.html"><i className="icon-map-1"></i></a>
                        </div>
                    </li>
                    <li>
                        <h6>Sort by</h6>
                        <select name="orderby" className="selectbox">
                        <option value="Closest">Closest</option>
                        <option value="Best rated">Best rated</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        </select>
                    </li>
                </ul>
            </div>
            
        </div>
        
        
        <div className="container margin_60_35">
            <div className="row">
                <div className="col-lg-7">
                    <div className="strip_list wow fadeIn">
                        <a href="#0" className="wish_bt"></a>
                    
                            <a href="detail-page.html"><img src="DrBabaJones.jpeg" alt=""/></a>
                        <small>Pediatrician</small>
                        <h3>Dr. Cornfield</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
                        <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                        <ul>
                            <li><a href="#0" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
                            <li><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
                            <li><a href="detail-page.html">Book now</a></li>
                        </ul>
                    </div>
                    
                    <div className="strip_list wow fadeIn">
                        <a href="#0" className="wish_bt"></a>
                    
                            <a href="detail-page.html"><img src="DrBarvez.jpeg" alt=""/></a>
                    
                        <small>Psicologist</small>
                        <h3>Dr. Shoemaker</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
                        <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_2.svg" width="15" height="15" alt=""/></a>
                        <ul>
                            <li><a href="#0" onclick="onHtmlClick('Doctors', 1)" className="btn_listing">View on Map</a></li>
                            <li><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
                            <li><a href="detail-page.html">Book now</a></li>
                        </ul>
                    </div>
                    
                    <div className="strip_list wow fadeIn">
                        <a href="#0" className="wish_bt"></a>
                    
                            <a href="detail-page.html"><img src="DrBebbironi.jpg" alt=""/></a>
                        
                        <small>Pediatrician</small>
                        <h3>Dr. Lachinet</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
                        <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_3.svg" width="15" height="15" alt=""/></a>
                        <ul>
                            <li><a href="#0" onclick="onHtmlClick('Doctors', 2)" className="btn_listing">View on Map</a></li>
                            <li><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
                            <li><a href="detail-page.html">Book now</a></li>
                        </ul>
                    </div>
                    
                    <div className="strip_list wow fadeIn">
                        <a href="#0" className="wish_bt"></a>
                        
                            <a href="detail-page.html"><img src="DrBebsi.jpeg" alt=""/></a>
                        
                        <small>Pediatrician</small>
                        <h3>Dr. Rainwater</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
                        <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_4.svg" width="15" height="15" alt=""/></a>
                        <ul>
                            <li><a href="#0" onclick="onHtmlClick('Doctors', 1)" className="btn_listing">View on Map</a></li>
                            <li><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
                            <li><a href="detail-page.html">Book now</a></li>
                        </ul>
                    </div>
                    
                    <div className="strip_list wow fadeIn">
                        <a href="#0" className="wish_bt"></a>
                        
                            <a href="detail-page.html"><img src="DrBizzaHut.jpeg" alt=""/></a>
                        
                        <small>Psicologist</small>
                        <h3>Dr. Manzone</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span className="rating"><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i> <small>(145)</small></span>
                        <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_4.svg" width="15" height="15" alt=""/></a>
                        <ul>
                            <li><a href="#0" onclick="onHtmlClick('Doctors', 1)" className="btn_listing">View on Map</a></li>
                            <li><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
                            <li><a href="detail-page.html">Book now</a></li>
                        </ul>
                    </div>
                    
                    
                    <nav aria-label="" className="add_top_20">
                        <ul className="pagination pagination-sm">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
                
                
                <aside className="col-lg-5" id="sidebar">
                    <div id="map_listing" className="normal_list">
                    </div>
                </aside>
            
                
            </div>
            
        </div>
        
    </div>
}
export default List