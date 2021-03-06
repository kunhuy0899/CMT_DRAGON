import React, { Component } from 'react';

class forums extends Component {
    render() {
        return (
            <div>
                <nav className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light col" id="navbar1">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                            <h4 className="Acc">SHOP</h4>
                            <ul className="navbar-nav ml-auto" style={{ marginRight: '200px' }}>
                                <li className="nav-item">
                                    <a href className="nav-link" style={{ marginTop: '90px' }}>Home /</a>
                                </li>
                                <li className="nav-item">
                                    <a href className="nav-link" style={{ marginTop: '90px' }}>SHOP </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </nav>
                <div className="container">
                    <div className="row">
                        <article className="col-md-9 mt-5">
                            <div className="cont col-md-12 ">
                                <h2>Forums</h2>
                                <div className="bbp-search-form" style={{ float: 'right', fontSize: '13px' }}>
                                    <form role="search" method="get" id="bbp-search-form" style={{ fontSize: '17px' }}>
                                        <div className="col">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        </div>
                                    </form>
                                </div>
                                <div style={{ float: 'left', fontSize: '17px' }} className="bbp-breadcrumb"><p><a href="https://qntdata.com" className="bbp-breadcrumb-home">Home</a> <span className="bbp-breadcrumb-sep">›</span> <span className="bbp-breadcrumb-current">Forums</span></p></div>
                                <table className="table table-striped" style={{ fontSize: '17px' }}>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Forums</th>
                                            <td>Topics</td>
                                            <td>Posts</td>
                                            <td>Last Post</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">QT-Forum</th>
                                            <td>8</td>
                                            <td>8</td>
                                            <td>7 months, 1 week ago <br /><p>admin1</p> </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" />
                                            <td />
                                            <td />
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </article>
                        <aside className="col-md-3">
                            <div className="mt-5">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <i className="fas fa-search" />
                                </form>
                            </div>
                            <div className="post">
                                <h5 style={{ color: '#bbb' }}>RECENT POSTS</h5>
                                <p className="mt-4 ">
                                </p><li className="li"><a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a></li><br />
                                <li className="li"><a href="#">State of AI in HR</a></li><br />
                                <li className="li"><a href="#">Overview of blockchain and bitcoin (Part 4)</a></li><br />
                                <li className="li"><a href="#">Overview of blockchain and bitcoin (Part 3)</a></li><br />
                                <li className="li"><a href="#">Overview of blockchain and bitcoin (Part 2)</a></li>
                                <p /><br />
                                <h5 style={{ color: '#bbb' }}>RECENT COMMENTS</h5>
                                <div className="mt-4 ">
                                    <li className="li"> <a href="#">Carri</a><span style={{ color: '#bbb' }}> on </span> <a href="#">State of AI in HR</a></li><br />
                                    <li className="li"><span style={{ color: '#bbb' }}>admin1 on </span><a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a></li><br />
                                    <li className="li"><a href>Justin Hamilton</a><span style={{ color: '#bbb' }}> on </span><a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a></li><br />
                                    <li className="li"><a href>Kyle Brown</a><span style={{ color: '#bbb' }}> on </span><a href="#">Overview of blockchain and bitcoin (Part 3)</a></li><br />
                                    <li className="li"><a href>AffiliateLabz</a><span style={{ color: '#bbb' }}> on </span><a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a></li>
                                </div>
                                <br />
                                <h5 style={{ color: '#bbb' }}> ARCHIVES</h5>
                                <p className="mt-4 "> </p><li className="li"><a href="#">February 2020</a></li><br />
                                <li className="li"><a href="#">September 2019</a></li><br />
                                <li className="li"><a href="#">August 2019</a></li><br />
                                <p /><br />
                                <h5 style={{ color: '#bbb' }}> CATEGORIES</h5>
                                <p className="mt-4 "> </p><li className="li"><a href="#">Uncategorized</a></li><br />
                                <li className="li"><a href="#">WordPress</a><span style={{ color: '#bbb' }}> (5) </span></li><br />
                                <li className="li"><a href="#">August 2019</a><span style={{ color: '#bbb' }}> (1) </span></li><br />
                                <p /><br />
                                <h5 style={{ color: '#bbb' }}>RECENT POSTS</h5>
                                <p className="mt-4 ">
                                </p><li className="la">
                                    <div style={{ width: '70px', height: 70, float: 'left' }} className="img">
                                        <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2020/02/blog-State-of-AI-in-HR_1-50x50.jpg" style={{ width: '50px', height: 50, float: 'left', marginRight: '20px' }} />
                                    </div>
                                    <div style={{ float: 'righ', height: '70px' }}>
                                        <a href="#">State of AI in HR</a><br />
                                        <span style={{ color: '#bbb' }}>February 2020 </span>
                                    </div>
                                </li><br />
                                <li className="la">
                                    <div style={{ width: '70px', height: 70, float: 'left' }} className="img">
                                        <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-4-50x50.jpg" style={{ float: 'left', marginRight: '20px' }} width="50px" height="50px" />
                                    </div>
                                    <div style={{ float: 'righ', height: '70px' }}>
                                        <a href="#">Overview of blockchain and bitcoin (Part 4)</a><br />
                                        <span style={{ color: '#bbb' }} >September 2019 </span>
                                    </div>
                                </li><br />
                                <li className="la">
                                    <div style={{ width: '70px', height: 70, float: 'left' }} className="img">
                                        <img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-3-50x50.jpg" style={{ float: 'left', marginRight: '20px' }} width="50px" height="50px" />
                                    </div>
                                    <div style={{ float: 'righ', height: '70px' }}>
                                        <a href="#">Overview of blockchain and bitcoin (Part 3)</a><br />
                                        <span style={{ color: '#bbb' }} >September 2019 </span>
                                    </div>
                                </li><br />
                                <p /><br />
                                <h5 style={{ color: '#bbb' }}>ABOUT US</h5>
                                <p className="mt-4 " style={{ color: '#888888' }}>
                                    Converio is a clean and clear multipurpose responsive WordPress theme. With Converio WordPress theme you can build beautiful and modern sites to promote any business or service fast and easily.
                  </p><br />
                                <p style={{ color: '#888888' }}> <a href>Get Converio </a>WordPress theme now to start building your awesome site.</p><br />
                                <h5 style={{ color: '#bbb' }}> WORKS STREAM</h5>
                                <div className="mt-4">
                                    <a href="#"><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-4-78x78.jpg" width="78px" height="78px" /></a>
                                    <a href="#"><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-3-78x78.jpg" width height /></a>
                                    <a href="#"><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/09/blog-Overview-of-blockchain-and-bitcoin-Part-2-78x78.jpg" width height /></a>
                                    <a href="#"><img src="https://secureservercdn.net/198.71.233.138/d0y.65e.myftpupload.com/wp-content/uploads/2019/08/blog-Overview-of-blockchain-and-bitcoin-Part-1-78x78.jpg" width height /></a>
                                </div>
                                <div className="mt-4">
                                    <h5 style={{ color: '#bbb' }}><i className="fab fa-twitter" /> TWITTER</h5>
                                    <p>
                                        The most conversion optimized WordPress theme in the industry has released. Check out this great #themeforest item: <br />
                                        <a href="http://t.co/AWN0QUm0j4">http://t.co/AWN0QUm0j4</a><br />
                                        <span>6 years ago</span>
                                    </p>
                                    <p>
                                        The Most Customizable Theme Ever Has Released - Check out this great #themeforest item:  <br />
                                        <a href="http://t.co/DdmcRdPHF3">http://t.co/DdmcRdPHF3</a><br />
                                        <span>6 years ago</span>
                                    </p>
                                </div>
                                <h5 style={{ color: '#bbb' }}><i className="fab fa-pinterest" /> PINTERECT</h5>
                                <div className="mt-4">
                                    <a href="#"><img src="https://i.pinimg.com/90x90/f1/c1/d2/f1c1d2c01d9665c65e73a471a608791e--trendy-website.jpg" width="78px" height="78px" /></a>
                                    <a href="#"><img src="https://i.pinimg.com/90x90/7a/66/8e/7a668ee99e436676452148d02803f04d--wordpress-theme.jpg" width="78px" height="78px" /></a>
                                    <a href="#"><img src="https://i.pinimg.com/90x90/8c/41/dd/8c41dd80bfc446c4f687aecb67a19941--wordpress-theme-website.jpg" width="78px" height="78px" /></a>
                                    <a href="#"><img src="https://i.pinimg.com/90x90/66/79/dc/6679dcb4afe9c35709fd63032f1b1f18--retina-wordpress-theme.jpg" width="78px" height="78px" style={{ marginTop: '10px', marginRight: '5px' }} /></a>
                                    <a href="#"><img src="https://i.pinimg.com/90x90/bf/f5/63/bff56340b2a4cd0b198e9f3e912deb3f--wordpress-theme.jpg" width="78px;" height="78px" style={{ marginTop: '10px', marginRight: '5px' }} /></a>
                                    <a href="#"><img src="https://i.pinimg.com/90x90/b8/0e/55/b80e556ef0e26ec90e7cb91a386e92a6--website.jpg" width="78px" height="78px" style={{ marginTop: '10px', marginLeft: '1px' }} /></a>
                                </div><br />
                                <a href style={{ color: 'black' }}> FOLLOW OUR PINTEREST BOARDS </a>
                                <section>
                                    <h5 style={{ color: '#bbb', marginTop: '50px' }}><i className="fab fa-pinterest" /> CALENDAR</h5>
                                    <div className="mt-4">
                                        <div className="calendar">
                                            <p style={{ color: '#666' }}>February 2020</p>
                                            <ul className="weekdays">
                                                <li>M</li>
                                                <li>T</li>
                                                <li>W</li>
                                                <li>T</li>
                                                <li>F</li>
                                                <li>S</li>
                                                <li>S</li>
                                            </ul>
                                            <ul className="days">
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <a href /><li><span className="active">12</span></li>
                                                <li>13</li>
                                                <a href><li><span className="active">14</span></li></a>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>21</li>
                                                <li>22</li>
                                                <li>23</li>
                                                <li>24</li>
                                                <li>25</li>
                                                <li>26</li>
                                                <li>27</li>
                                                <li>28</li>
                                                <li>29</li>
                                            </ul>
                                        </div>
                                        <a href>Sep</a>
                                    </div><br />
                                </section>
                                <div>
                                    <h5 style={{ color: '#bbb' }} className="mb-5 mt-5">SEARCH</h5>
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </div>
                                <div>
                                    <h5 style={{ color: '#bbb' }} className="mb-5 mt-5">SEARCH</h5>
                                    <select name id className="form-control">
                                        <option value>Select month</option>
                                        <option value>February 2020</option>
                                        <option value>September 2019</option>
                                        <option value>August 2019</option>
                                    </select>
                                </div>
                                <div className="mt-5">
                                    <h5 style={{ color: '#bbb' }} className="mb-5 mt-5">TAGS</h5>
                                    <a href className="tags">Al</a>
                                    <a href className="tags">Artificial Intelligence</a>
                                    <a href className="tags">HR</a><br />
                                    <div className="mt-3">
                                        <a href className="tags">Human Resource</a>
                                        <a href className="tags">Machine Learning</a>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h5 style={{ color: '#bbb', textAlign: 'left' }} className="mb-5 mt-5">RECRNT COMMENTS DEFAULT</h5>
                                    <li className="li"> <a href="#">Carri</a><span style={{ color: '#bbb' }}> on </span> <a href="#">State of AI in HR</a></li><br />
                                    <li className="li"><span style={{ color: '#bbb' }}>admin1 on </span><a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a></li><br />
                                    <li className="li"><a href>Justin Hamilton</a><span style={{ color: '#bbb' }}> on </span><a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a></li><br />
                                </div>
                                <div className="mt-5">
                                    <h5 style={{ color: '#bbb', textAlign: 'left' }} className="mb-5 mt-5"> RECRNT COMMENTS (CUSTOM)</h5>
                                    <div className="cmt">
                                        <img src="https://secure.gravatar.com/avatar/c21b029e45e42f9b09a29e8180b6ee40?s=50&d=mm&r=g" className="anh" width="50px" height="50px" />
                                        <li className="li"> <span style={{ color: '#bbb' }}>Carri</span> on <a href="#">State of AI in HR</a>
                                            <p> Hi there! I know this is kinda off topic but...</p>
                                        </li><br />
                                    </div>
                                    <div className="cmt">
                                        <img src="https://secure.gravatar.com/avatar/c21b029e45e42f9b09a29e8180b6ee40?s=50&d=mm&r=g" className="anh" width="50px" height="50px" />
                                        <li className="li"><span style={{ color: '#bbb' }}>admin1 </span>on <a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a>
                                            <p>Hi Justin, We use Converio Theme. Wish you a good day!...</p>
                                        </li><br />
                                    </div>
                                    <div className="cmt">
                                        <img src="https://secure.gravatar.com/avatar/c21b029e45e42f9b09a29e8180b6ee40?s=50&d=mm&r=g" className="anh" width="50px" height="50px" />
                                        <li className="li"><span style={{ color: '#bbb' }}>admin1</span> on <a href="#">Trí tuệ nhân tạo trong quản trị nguồn nhân lực</a>
                                            <p>Long time reader, first time commenter -- so, thought I'd...</p>
                                        </li><br />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne" style={{ background: 'white' }}>
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: 'black !important', fontSize: '10pt', textDecoration: 'none', fontWeight: 'bold' }}>
                                                Accordion item
                        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body" style={{ color: '#888 !important', fontSize: '10pt' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque diam sem, hendrerit ut faucibus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. Curabitur venenatis ipsum nec ligula.                       </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo" style={{ background: 'white' }}>
                                        <h2 className="mb-0" style={{ color: 'black !important', fontSize: '12pt' }}>
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: 'black !important', fontSize: '10pt', textDecoration: 'none', fontWeight: 'bold' }}>
                                                Suspendisse lobortis
                        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body" style={{ color: '#888 !important', fontSize: '10pt' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque diam sem, hendrerit ut faucibus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. Curabitur venenatis ipsum nec ligula.                      </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree" style={{ background: 'white' }}>
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: 'black !important', fontSize: '10pt', textDecoration: 'none', fontWeight: 'bold' }}>
                                                Donec sed arcu a justo
                        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body" style={{ color: '#888 !important', fontSize: '10pt' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque diam sem, hendrerit ut faucibus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. Curabitur venenatis ipsum nec ligula.                      </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour" style={{ background: 'white' }}>
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ color: 'black !important', fontSize: '10pt', textDecoration: 'none', fontWeight: 'bold' }}>
                                                Accordion item
                        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body" style={{ color: '#888 !important', fontSize: '10pt' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque diam sem, hendrerit ut faucibus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. Curabitur venenatis ipsum nec ligula.                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{ background: 'coral' }}>
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style={{ fontSize: '12pt', color: 'white', backgroundColor: 'coral' }}><i className="fas fa-heart" />
                                        </a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style={{ fontSize: '12pt', color: 'white', backgroundColor: 'coral' }}><i className="fas fa-map-marker-alt" />Location</a>
                                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" style={{ fontSize: '12pt', color: 'white', backgroundColor: 'coral' }}>Tabs</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent" style={{ background: 'white', padding: '20px', color: '#888', fontSize: '10pt' }}>
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen tesque diam sem, hendrerit ut faucibus sit amet, bibendum vel lacus. Nunc molestie magna sed sapien ornare tempus. Curabitur venenatis ipsum nec ligula.</div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Aliquam erat volutpat. Pellentesque varius varius elit ac consectetur. Nunc varius, diam ut malesuada aliquam, odio ante faucibus erat, nec semper mauris arcu id turpis. Nulla at tincidunt arcu.</div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><p>Sed suscipit, metus ac fermentum condimentum, justo lectus vehicula eros, sed accumsan mi risus ut velit. Donec sollicitudin lacus vitae mauris mattis tempor.</p></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default forums;