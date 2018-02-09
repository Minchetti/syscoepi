import React from 'react';
import PropTypes from 'prop-types';

// @flow
const MenuLateral = props => (
  // <span>{props.text}</span>


        <div className="nav-side-menu p-fixed">
          <div className="brand">
            <a id="menu-toggle" href="#" className="d-flex justify-content-between align-center pl-10 pr-20">Menu
              {/* <span id="main_icon" className="glyphicon glyphicon-align-justify"></span> */}
              <i id="menu-arrow" className="fa fa-arrow-circle-left "></i>
            </a>
          </div>          
          {/* <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i> */}
        
            <div className="menu-list">      
              <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a href="#" className="dashboard p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Dashboard <i className="fa fa-dashboard fa-lg"></i> 
                  </a>
                </li>

                <li>
                  <a href="#" className="request p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Requisições <i className="fa fa-clipboard fa-lg"></i> 
                  </a>
                </li>

                {/* <li  data-toggle="collapse" data-target="#products" className="collapsed active">
                  <a href="#" className="request p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Requisições <i className="fa fa-clipboard fa-lg"></i> 
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>
                <ul className="sub-menu collapse" id="products">
                  <li className="active d-flex justify-content-between align-center"><a href="#">Nova</a><i className="fa fa-plus" aria-hidden="true"></i></li>
                  <li className="d-flex justify-content-between align-center"><a href="#">Aprovar</a><i className="fa fa-thumbs-up" aria-hidden="true"></i></li>
                  <li class="d-flex justify-content-between align-center"><a href="#">Procurar</a><i className="fa fa-search" aria-hidden="true"></i></li>
                </ul> */}

                <li>
                  <a href="#" className="company p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Empresas <i className="fa fa-building fa-lg"></i> 
                  </a>
                </li>

                {/* <li data-toggle="collapse" data-target="#service" className="collapsed">
                  <a href="#" className="company p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Empresas <i class="fa fa-building fa-lg" aria-hidden="true"></i>
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>  
                <ul className="sub-menu collapse" id="service">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul> */}


                <li data-toggle="collapse" data-target="#service" className="collapsed">
                  <a href="#" className="p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Templates <i class="fa fa-folder-open fa-lg" aria-hidden="true"></i>
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>  
                <ul className="sub-menu collapse" id="service">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>

                <li data-toggle="collapse" data-target="#new" className="collapsed">
                  <a href="#" className="p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Relatórios <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>  
                  </a>
                </li>
            </ul>
          </div>
        </div>



   /* <span>FORMULARIO 1</span> */
);

MenuLateral.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenuLateral;