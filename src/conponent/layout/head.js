import React, { Component } from 'react';
import { Link } from "react-router-dom";
class head extends Component {
  render() {
    return (
      <div>
        <header>
          {/*- Navbar -*/}
          <nav id="nav1" className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand text-white" href="#"><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/08/header-logo.png" alt="" height="50px" width="170px" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
                <span className="navbar-toggler-icon"><i className="fas fa-bars" /></span>
              </button>
              <div className="collapse navbar-collapse" id="nvbCollapse">
                <ul className="navbar-nav ml-auto">
                  <li id="li-1" className="nav-item pl-1">
                    <Link id="header-a" className="nav-link " to="/">Company</Link>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Solutions</a>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <Link id="header-a" className="nav-link" to="/qt_community">QT-Community
                    </Link>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <Link id="header-a" className="nav-link" to="/forums">Forums
                  </Link>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <Link id="header-a" className="nav-link" to="/resources">Resources
                  </Link>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="#">Shop
                  </a>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <Link id="header-a" className="nav-link" to="/account">Account
                  </Link>
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <span className="fas fa-search" />
                  </li>
                  <li id="li-1" className="nav-item pl-1">
                    <span className="fas fa-shopping-cart" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*# Navbar #*/}
        </header>
   
      </div>
    )
  }
}

export default head
