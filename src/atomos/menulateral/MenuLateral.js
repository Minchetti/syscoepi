import React from 'react';
import $ from 'jquery'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types';

// @flow


// var degree = 180;
// $('#menu-toggle').click(function(e) {
//   console.log('clicou');
//   $(".nav-side-menu").toggleClass("active");
//   $(".boxField").toggleClass("active");
//   $("#menu-arrow").css('transform', 'rotate(' + degree + 'deg)');
//   degree += 180;   
// });
// $(".dashboard").click(function(e) {
//   e.preventDefault();
//   $('#request').hide(400);
//   $('#company').hide(400);
//   $('#dashboard').show(400);
// });    
// $(".request").click(function(e) {
//   e.preventDefault();
//   $('#request').show(400);
//   $('#company').hide(400);
//   $('#dashboard').hide(400);
// });    
// $(".company").click(function(e) {
//   e.preventDefault();
//   $('#dashboard').hide(400);
//   $('#company').show(400);
//   $('#request').hide(400);
// });

  class MenuLateral extends React.Component {
    state = {
      width: 180
    };    


    onClick = () => {
      if (this.state.width === 180){
        this.setState({ width: 55 });
        this.setState({ display: 'none' });
      }
      else{
        this.setState({ width: 180 });
        this.setState({ display: 'block' });
      }
      // console.log('deu'); 
      // console.log(this.state);
    }

    render() {
      // if (this.state.escondido) {
      //   $()
      // }
      return (
        <div className="nav-side-menu" style={{width: this.state.width}}>
          <div className="brand">
            <a id="menu-toggle" onClick={this.onClick} className="d-flex justify-content-between align-center p-15">
              <span style={{display: this.state.display}}>Menu</span>
              <i id="menu-arrow" className="fa fa-arrow-circle-left "></i>
            </a>
          </div>      
          <div className="menu-list">      
            <ul id="menu-content" className="menu-content collapse out">
              <li>
                  <Link className="p-relative d-flex justify-content-between align-center p-15" to="/home/dashboard">
                    <span style={{display: this.state.display}}>Dashboard</span>
                    <i className="fa fa-dashboard fa-lg"></i>                     
                  </Link>               
              </li>
              <li>
                  <Link className="p-relative d-flex justify-content-between align-center p-15" to="/home/request">
                    <span style={{display: this.state.display}}>Requisições</span> 
                    <i className="fa fa-clipboard fa-lg"></i>                     
                  </Link>               
              </li>
              <li>
                  <Link className="p-relative d-flex justify-content-between align-center p-15" to="/home/company">
                    <span style={{display: this.state.display}}>Empresas</span> 
                    <i className="fa fa-building fa-lg"></i>                     
                  </Link>               
              </li>

              <li data-toggle="collapse" data-target="#service" className="collapsed">
                <a  className="p-relative d-flex justify-content-between align-center p-15">
                    <span style={{display: this.state.display}}>Templates</span>
                    <i className="fa fa-folder-open fa-lg" aria-hidden="true"></i>
                  <span className="arrow p-absolute"></span>
                </a>
              </li>  
              <ul className="sub-menu collapse" id="service">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>

              <li data-toggle="collapse" data-target="#new" className="collapsed">
                <a  className="p-relative d-flex justify-content-between align-center p-15">
                  <span style={{display: this.state.display}}>Relatórios</span>
                  <i className="fa fa-line-chart fa-lg" aria-hidden="true"></i>  
                </a>
              </li>
            </ul>
          </div>      
        </div>
      )
    }
  }


// MenuLateral.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default MenuLateral;