import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <div>
                var NewComponent = React.createClass({
  render: function() {
    return (

      <header>
        {/*- Navbar -*/}
        <div className="root">
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
                    <a id="header-a" className="nav-link" href="QT-community.html">QT-Community
                    </a>
                  </li>
                  <li className="nav-item pl-1">
                    <a id="header-a" className="nav-link" href="forums.html">Forums
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
        </div></header>
    );
  }
});
            </div>
        );
    }
}

export default header;