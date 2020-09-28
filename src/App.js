import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Head from './conponent/layout/head';
import Footer from './conponent/layout/footer'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Head />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
