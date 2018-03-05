import React from 'react';
// import PropTypes from 'prop-types';

// @flow
const MenuLateral = props => (


        <div className="nav-side-menu p-fixed">
          <div className="brand">
            <a id="menu-toggle"  className="d-flex justify-content-between align-center pl-2 pr-20">Menu
              <i id="menu-arrow" className="fa fa-arrow-circle-left "></i>
            </a>
          </div>          
        
            <div className="menu-list">      
              <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a  className="dashboard p-relative d-flex justify-content-between align-center pl-2 pr-20">
                    Dashboard <i className="fa fa-dashboard fa-lg"></i> 
                  </a>
                </li>

                <li>
                  <a  className="request p-relative d-flex justify-content-between align-center pl-2 pr-20">
                    Requisições <i className="fa fa-clipboard fa-lg"></i> 
                  </a>
                </li>


                <li>
                  <a  className="company p-relative d-flex justify-content-between align-center pl-2 pr-20">
                    Empresas <i className="fa fa-building fa-lg"></i> 
                  </a>
                </li>


                <li data-toggle="collapse" data-target="#service" className="collapsed">
                  <a  className="p-relative d-flex justify-content-between align-center pl-2 pr-20">
                    Templates <i className="fa fa-folder-open fa-lg" aria-hidden="true"></i>
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>  
                <ul className="sub-menu collapse" id="service">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>

                <li data-toggle="collapse" data-target="#new" className="collapsed">
                  <a  className="p-relative d-flex justify-content-between align-center pl-2 pr-20">
                    Relatórios <i className="fa fa-line-chart fa-lg" aria-hidden="true"></i>  
                  </a>
                </li>
            </ul>
          </div>
        </div>



);

// MenuLateral.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default MenuLateral;