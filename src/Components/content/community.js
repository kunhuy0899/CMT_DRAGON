import React, { Component } from 'react';

class community extends Component {
    render() {
        return (
            <div>
            <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 />
              <h6 style={{color: '#d86d0e'}}>&gt;&gt; Make a donate to support our work &lt;&lt;</h6>
              <h3>Send us your question now!</h3>
              <p style={{marginRight: '140px', fontSize: '15px'}} align="justify">As an African proverb says: “If you want to go fast, go alone; if you want to go far, go together”. QT-Community will assist you in providing solutions to Excel, Quant and Analytics. Connecting with us gives you the opportunity to solve your problems and get a better performance.</p>
              <p style={{marginRight: '140px', fontSize: '15px'}} align="justify">Feel free to contact us by completing the form below. We will send you our solution as soon as possible !</p>
            </div>
            <hr />
            <div className="col-sm-6">
              <form>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-3 col-form-label">First name*</label>
                  <div className="col-sm-9">
                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Selena" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Last Name*</label>
                  <div className="col-sm-9">
                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className=""  aria-invalid="false" placeholder="Pott" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Email address*</label>
                  <div className="col-sm-9">
                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"  placeholder="selena@gmail.com" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Job title*</label>
                  <div className="col-sm-9">
                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Researcher" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Subject*</label>
                  <div className="col-sm-9">
                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Detech changepoint code in Excel" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-12 col-form-label">Please describe your question here*</label>
                  <div className="col-sm-12">
                    <textarea name="description" cols={60} rows={7} className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your message here" defaultValue={""} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-6 col-form-label" />
                  <div className="col-sm-6">
                    <span className="file-input"><input type="file" name="your-file" size={50} cols={10} rows={7} className="wpcf7-form-control wpcf7-file" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.csv,.py,.r,.ipynb" aria-invalid="false" style={{position: 'absolute', zIndex: 3, opacity: 0}} /><a className="btn light-gray" href="#" /><input id="fake_undefined" name="fake_your-file" className="fake" placeholder=" Choose file" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-12 col-form-label">How Did You Hear About Us?*</label>
                  <div className="col-sm-12">
                    <span style={{float: 'right'}} className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Detech changepoint code in Excel" /></span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label" />
                  <div className="col-sm-12">
                    <input type="submit" defaultValue="Submit" className="submit" style={{background: '#f28728', color: '#ffffff', fontWeight: 900, marginBottom: '5px', letterSpacing: '0.005px', textTransform: 'uppercase', boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.08)', border: 'none', borderRadius: '2px', height: '46px', padding: '0 21px'}} />
                  </div>
                </div>
              </form>
              <div>
                <h4>QT- Community Members</h4>
                <p>(helping to solve problems)</p>
              </div>
            </div>
            <div className="col-sm-6">
              <h5>Example</h5>
              <p>I want to detect the change points of stock return to build my trading model in Excel. Then I submit the question to QT-Community.</p>
              <p /><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2020/02/example_community_001.png" /><p />
              <p>The answer is sent to my email with a file code with VBA in Excel and tutorial so that I can implement it. The result is shown below.</p>
              <p><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2020/02/example_community_002-560x360.png" /></p>
            </div>
          </div>
        </div>
      </section>
            </div>
        );
    }
}

export default community;