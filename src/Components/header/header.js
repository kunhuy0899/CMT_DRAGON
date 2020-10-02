import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div>
        <div>
          {/*- Navbar -*/}
          <nav id="nav1" className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand text-white" href="#"><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/08/header-logo.png" alt="" height="50px" width="170px" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
                <span className="navbar-toggler-icon"><i className="fas fa-bars" /></span>
              </button>
              <div className="collapse navbar-collapse" id="nvbCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link " href="#">Company</a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Solutions</a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">QT-Community
                  </a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Forums
                  </a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Resources
                  </a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Shop
                  </a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Account
                  </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </nav>
          {/*# Navbar #*/}
          <nav className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light col" id="navbar1">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent ">
            <h4 className="Acc">QT-Forums</h4>
            <ul className="navbar-nav ml-auto" style={{marginRight: '200px'}}>
              <li className="nav-item">
                <a href className="nav-link" style={{marginTop: '90px'}}>Home /</a>
              </li>
              <li className="nav-item">
                <a href className="nav-link" style={{marginTop: '90px'}}>QT-Forums </a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
        </div>
      </div>
    );
  }
}

export default header;