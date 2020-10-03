import React,{Component} from 'react';
class Contener extends Component{
  render(){
    return(
     
      <div>
             <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleCaptions" data-slide-to={1} />
              <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/08/slide4-1800.jpg?time=1600743845" className="d-block w-100" alt=".." height="30%" />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5 style="color: black">DU LỊCH TRONG NƯỚC</h5>
                    <p>Du lịch trong nước luôn là lựa chọn tuyệt vời.</p> */}
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/08/slide1-1800.jpg?time=1600743845" className="d-block w-100" alt="..." height="30%" />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5 style="color: black">DU LỊCH NƯỚC NGOÀI</h5>
                    <p>Du lịch nước ngoài luôn là lựa chọn tuyệt vời thứ hai.</p> */}
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/08/slide2-1800.jpg?time=1600743845" className="d-block w-100" alt="..." height="30%" />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5 style="color: black">DU LỊCH THEO TOUR</h5>
                    <p>Trải nghiệm tuyệt vời, mạo hiểm.</p> */}
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <br />
        </div>
        <div className="container">
          
          <div className="row">
            <div className="col-lg-3 col-sm-3" style={{textAlign: 'center'}}>
              <i className="fa fa-bar-chart fa-4x i-1" />
              <h5 className="h-1">Advanced Statistics</h5>
              <p className="p-1">Our advanced analytics solutions are infused with the innovative algorithms that can
                help to unlock the potential opportunities hidden in data. Resolving problems with less time and
                costs.</p>
            </div>
            <div className="col-lg-3 col-sm-3" style={{textAlign: 'center'}}>
              <i className="fa fa-gears fa-4x i-1" />
              <h5 className="h-1">Advanced Statistics</h5>
              <p className="p-1">Our advanced analytics solutions are infused with the innovative algorithms that can
                help to unlock the potential opportunities hidden in data. Resolving problems with less time and
                costs.</p>
            </div>
            <div className="col-lg-3 col-sm-3" style={{textAlign: 'center'}}>
              <i className="fa fa-share-alt fa-4x i-2" />
              <h5 className="h-1">Advanced Statistics</h5>
              <p className="p-1">Our advanced analytics solutions are infused with the innovative algorithms that can
                help to unlock the potential opportunities hidden in data. Resolving problems with less time and
                costs.</p>
            </div>
            <div className="col-lg-3 col-sm-3" style={{textAlign: 'center'}}>
              <i className="fa fa-bar-chart fa-4x i-3" />
              <h5 className="h-1">Advanced Statistics</h5>
              <p className="p-1">Our advanced analytics solutions are infused with the innovative algorithms that can
                help to unlock the potential opportunities hidden in data. Resolving problems with less time and
                costs.</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{backgroundColor: 'rgba(252, 247, 247, 0)'}}>
            <div style={{marginTop: '50px'}} className="container">
              <div style={{textAlign: 'center', paddingTop: '40px', width: '100%'}}>
                <h3>Transform your business. Define what's next.</h3>
                <p>Powerful solutions help you maximize customer value, reduce risk, and grow business.</p>
              </div>
              <div className="row">
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-institution fa-stack-1x fa-inverse " style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>Hospitality</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      Driving your hotel revenue, reducing operation costs, creating labor productivity and
                      optimizing quality service with our explainable AI-powered system.</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-calculator fa-stack-1x fa-inverse fa-radius " style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>Financial Services</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      Revolutionize your business with Big data advantages and our AI solutions for customer
                      segmentation, fraud detection, risk management and personalized.</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-rocket fa-stack-1x fa-inverse fa-radius " style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>OTA Hotel Sale</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      Increasing online customers. Increasing brand coverage. Increasing revenue from OTA
                      channel. Strategic advice for OTA channel. Website data security. Reduce staff costs for
                      the hotel.</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-users fa-stack-1x fa-inverse fa-radius" style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>HR Solution</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      Providing professional services in providing Human Resource Solution services in Vietnam
                      and countries around the globe. Our services will contribute to reducing costs and
                      optimizing operational efficiency for many businesses.</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
              </div>
              <div style={{paddingBottom: '50px'}} className="row">
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-dashboard fa-stack-1x fa-inverse fa-radius " style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>Dashboard Design On-demand</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      Visualizing data from many of entrepreneur’s reports, review performance quickly and
                      make decisions correctly in some field such as finance, sales, marketings etc.
                      Methodology: BI tools (Tableau, Power BI, …)</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-shopping-cart fa-stack-1x fa-inverse fa-radius " style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>Online Business</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      This is a package service that contains some utilities of apparel sales to connect your
                      brand to global customers and help make a shortcut in increasing your business revenue.
                    </p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-area-chart fa-stack-1x fa-inverse fa-radius " style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>Analyst IT</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      UI / UX Design Provider: Interact directly with customers to sketch and understand
                      customers’ wishes, create a complete UI / UX model. Support and consult customers to
                      create logical user flow.</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
                <div style={{position: 'relative', marginTop: '10px'}} className="col-lg-3 col-sm-3">
                  <div style={{backgroundColor: 'red'}}>
                    <span className="fa-stack " style={{position: 'absolute', fontSize: '2em', left: '50%', marginLeft: '-40px'}}>
                      <i className="fa fa-laptop fa-stack-1x fa-inverse fa-radius" style={{background: '#396fcc', borderRadius: '50% 50%'}} /></span>
                  </div>
                  <div style={{textAlign: 'center', borderTop: '4px solid #396fcc', marginTop: '33px', backgroundColor: 'none', borderLeft: '1px solid whitesmoke', borderRight: '1px solid whitesmoke', borderBottom: '1px solid whitesmoke'}}>
                    <h5 style={{fontSize: '18px', marginTop: '40px'}}>AI Solution for Computer Vision</h5>
                    <p style={{textAlign: 'justify', fontSize: '13px', marginLeft: '10px', marginRight: '10px', color: 'rgb(165, 164, 164)'}}>
                      Provide AI application for Fake Human, Object Detection, some problems about Object
                      Classification. Text Detection in many types of document: license plate, identity card
                      (ID), notice board, logo …</p>
                    <p><span><a href style={{fontSize: '12px', color: 'tomato'}}>LEARN MORE &gt;</a></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop: '50px'}} className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <h5 style={{color: '#bbb', fontSize: '16px'}}>OUR STORY</h5>
                  <h5>
                    <p style={{fontSize: '14px', color: '#1b345a', textAlign: 'justify'}}>QT-Data Inc. specializes
                      in providing data-driven solutions to any kind of business. We help our customers
                      become the leader in their industry by discovering hidden insight in the data that
                      their competitors don’t have access to.</p>
                  </h5>
                  <span>
                    <p style={{fontSize: '13px', color: '#777', fontWeight: 400, textAlign: 'justify'}}>In this age
                      where technology dominates, using and understanding big data is a crucial
                      competitive advantage for leading corporations. Inspired by the power of big data
                      and its applications, we dedicate efforts to help our customers can leverage
                      insights from the massive complex datasets for product improvements and reaching
                      their target.</p>
                  </span>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <h5 style={{color: '#bbb', fontSize: '16px'}}>THE QT-DATA DIFFERENCE</h5>
                  <p>
                    <span className="far fa-lightbulb text-danger"><span style={{color: '#777', marginLeft: '10px', fontSize: '14px'}}>Flexibility,
                        adaptability, innovations and aggressiveness in market trends.</span></span><br />
                    <span className="far fa-lightbulb text-danger"><span style={{color: '#777', marginLeft: '10px', fontSize: '14px'}}>Providing in-depth
                        insights solutions.</span></span><br />
                    <span className="far fa-lightbulb text-danger"><span style={{color: '#777', marginLeft: '10px', fontSize: '14px'}}>Centralizing and
                        streamlining operation process.</span></span><br />
                    <span className="far fa-lightbulb text-danger"><span style={{color: '#777', marginLeft: '10px', fontSize: '14px'}}>Ability of bringing
                        academic to practice world.</span></span>
                  </p>
                  <button type="button" className="btn btn-success"><span style={{fontSize: '16px'}}>About
                      QT-Data</span> </button>
                </div>
              </div>
            </div>
            <div style={{marginTop: '50px'}} className="container">
              <h5 style={{color: '#bbb', fontSize: '16px'}}>BLOG</h5>
              <div style={{marginTop: '20px'}} className="row">
                <div style={{marginTop: '20px'}} className="col-lg-4 col-sm-4">
                  <div style={{border: '1px solid whitesmoke', boxShadow: '0px 1px 3px 1px whitesmoke'}}>
                    <div>
                      <img style={{boxShadow: '0px 1px 1px 0px whitesmoke'}} width="100%" src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-4-560x356.jpg" alt="" />
                    </div>
                    <div className="abc" style={{lineHeight: '80px', textAlign: 'center'}}>
                      <a className="a-1" style={{textDecoration: 'none'}} href>Overview of blockchain and
                        bitcoin (Part 2)</a>
                    </div>
                  </div>
                </div>
                <div style={{marginTop: '20px'}} className="col-lg-4 col-sm-4">
                  <div style={{border: '1px solid whitesmoke', boxShadow: '0px 1px 3px 1px whitesmoke'}}>
                    <div>
                      <img style={{boxShadow: '0px 1px 1px 0px whitesmoke'}} width="100%" src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-3-560x356.jpg" alt="" />
                    </div>
                    <div className="abc" style={{lineHeight: '80px', textAlign: 'center'}}>
                      <a className="a-1" style={{textDecoration: 'none'}} href>Overview of blockchain and
                        bitcoin (Part 3)</a>
                    </div>
                  </div>
                </div>
                <div style={{marginTop: '20px'}} className="col-lg-4 col-sm-4">
                  <div style={{border: '1px solid whitesmoke', boxShadow: '0px 1px 3px 1px whitesmoke'}}>
                    <div>
                      <img style={{boxShadow: '0px 1px 1px 0px whitesmoke'}} width="100%" src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-2-560x356.jpg" alt="" />
                    </div>
                    <div className="abc" style={{lineHeight: '80px', textAlign: 'center'}}>
                      <a className="a-1" style={{textDecoration: 'none'}} href>Overview of blockchain and
                        bitcoin (Part 4)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br />
        <div style={{borderTop: '1px solid rgb(226, 225, 225)'}}>
          <div style={{marginTop: '40px'}} className="container">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
              </ul>
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <div className="mx-auto d-block" style={{width: '70%', marginBottom: '35px'}}>
                    <img style={{borderRadius: '50% 50%', width: '100px', float: 'left', marginRight: '20px'}} src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/MinhTran_avatar.jpg" />
                    <p style={{marginRight: '10px', textAlign: 'justify', color: '#777', fontSize: '14px'}}>“Discipline is the bridge between goals and accomplishment. Help others achieve their dreams and you will achieve yours.”</p>
                    <span style={{fontSize: '12px', fontWeight: 400, color: '#777'}}><span style={{color: 'black', fontSize: '14px'}}>Minh Tran</span> / Project Manager / QT-Data Inc.</span>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="mx-auto d-block" style={{width: '70%', marginBottom: '35px'}}>
                    <img style={{borderRadius: '50% 50%', width: '100px', float: 'left', marginRight: '20px'}} src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/NuNguyen_avatar.jpg" />
                    <p style={{marginRight: '10px', textAlign: 'justify', color: '#777', fontSize: '14px'}}>“Use your innate passions to help you achieve even your wildest dreams. With QT-Team, you may be surprised at how quickly they can come true and money inevitably follows!”</p>
                    <span style={{fontSize: '12px', fontWeight: 400, color: '#777'}}><span style={{color: 'black', fontSize: '14px'}}>Nu Nguyen</span> / HR Manager / QT-Data Inc.</span>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="mx-auto d-block" style={{width: '70%', marginBottom: '35px'}}>
                    <img style={{borderRadius: '50% 50%', width: '100px', float: 'left', marginRight: '20px'}} src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/HenryDuong_avatar.jpg" />
                    <p style={{marginRight: '10px', textAlign: 'justify', color: '#777', fontSize: '14px'}}>“Discipline is the bridge between goals and accomplishment. Help others achieve their dreams and you will achieve yours.”</p>
                    <span style={{fontSize: '12px', fontWeight: 400, color: '#777'}}><span style={{color: 'black', fontSize: '14px'}}>Henry Duong</span>  / CEO / QT-Data Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{borderTop: '1px solid rgb(226, 225, 225)', marginTop: '20px'}}>
          <div style={{textAlign: 'center', paddingTop: '20px'}} className="container">
            <span style={{fontSize: '25px'}}>We can bring you a solution that is far beyond your expectation.</span>  
            <button type="button" className="btn btn-success">REQUEST A DEMO</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Contener
