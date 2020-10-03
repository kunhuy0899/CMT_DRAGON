import React, { Component } from 'react';

class community extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="row">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light col" id="navbar1">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                                <h4 className="Acc">QT-Forums</h4>
                                <ul className="navbar-nav ml-auto" style={{ marginRight: '200px' }}>
                                    <li className="nav-item">
                                        <a href className="nav-link" style={{ marginTop: '90px' }}>Home /</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href className="nav-link" style={{ marginTop: '90px' }}>QT-Forums </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </nav>
                </div>

                <section>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-lg-12">
                      <h2 />
                      <h6 style={{color: '#d86d0e'}}>&gt;&gt; Make a donate to support our work &lt;&lt;</h6>
                      <h3>Send us your question now!</h3>
                      <p style={{fontSize: '15px'}} align="justify">As an African proverb says: “If you want to go fast, go alone; if you want to go far, go together”. QT-Community will assist you in providing solutions to Excel, Quant and Analytics. Connecting with us gives you the opportunity to solve your problems and get a better performance.</p>
                      <p style={{fontSize: '15px'}} align="justify">Feel free to contact us by completing the form below. We will send you our solution as soon as possible !</p>
                    </div>
                    <hr />
                    <div className="col-sm-6 col-lg-6">
                      <hr />
                      <form>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-3 col-lg-3 col-form-label">First name*</label>
                          <div className="col-sm-9 col-lg-9">
                            <input type="name" className="form-control" id="name" placeholder="Selena" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-3 col-lg-3 col-form-label">Last Name*</label>
                          <div className="col-sm-9 col-lg-9">
                            <input type="name" className="form-control" id="name" placeholder="Pott" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-3 col-lg-3 col-form-label">Email address*</label>
                          <div className="col-sm-9 col-lg-9">
                            <input type="name" className="form-control" id="name" placeholder="Selena@gmail.com" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-3 col-lg-3 col-form-label">Job title*</label>
                          <div className="col-sm-9 col-lg-9">
                            <input type="name" className="form-control" id="name" placeholder="Researcher" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-3 col-lg-3 col-form-label">Subject*</label>
                          <div className="col-sm-9 col-lg-9">
                            <input type="name" className="form-control" id="name" placeholder="Detect changepoint code in Excel" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-12 col-lg-12 col-form-label">Please describe your question here*</label>
                          <div className="col-sm-12 col-lg-12">
                            <textarea className="form-control" defaultValue={""} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-6 col-lg-6" />
                          <div className="custom-file col-lg-6 col-sm-6">
                            <input type="file" name="your-file" size={40} accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.csv,.py,.r,.ipynb" style={{position: 'absolute', zIndex: 5, opacity: 0}} />
                            <a className="btn light-gray" href="#">Choose file</a>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-12 col-lg-12 col-form-label">Please describe your question here*</label>
                          <div className="col-sm-3 col-lg-3" />
                          <div className="col-sm-9 col-lg-9">
                            <input type="name" className="form-control" id="name" placeholder="Your message here" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-2 col-sm-2">
                            <p><input type="submit" defaultValue="Submit" style={{border: 'none', backgroundColor: '#f28728', color: '#fff', width: '70px', height: '40px'}} /><span className="ajax-loader" /></p>
                          </div>
                        </div>
                      </form>
                      <div className="col-sm-12 col-lg-12">
                        <h4>QT- Community Members</h4>
                        <p>(helping to solve problems)</p>
                        <ul className="checklist tick3">
                          <li>QT-Research</li>
                          <li><span style={{color: '#3366ff'}}><a style={{color: '#3366ff'}} href="https://www.facebook.com/JVN.Alumni/" target="_blank" rel="noopener noreferrer">JVN Alumni</a></span></li>
                          <li><span style={{color: '#3366ff'}}><a style={{color: '#3366ff'}} href="https://www.facebook.com/Vnquants/" target="_blank" rel="noopener noreferrer">Vnquants</a></span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <h5>Example</h5>
                      <p>I want to detect the change points of stock return to build my trading model in Excel. Then I submit the question to QT-Community.</p>
                      <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2020/02/example_community_001.png" />
                      <p>The answer is sent to my email with a file code with VBA in Excel and tutorial so that I can implement it. The result is shown below.</p>
                      <p><a style={{color: '#d86d0e'}} href>changepoint.xlsm</a></p>
                      <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2020/02/example_community_002-560x360.png" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
        );
    }
}

export default community;