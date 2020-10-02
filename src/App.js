import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import Footer from './Components/header/footer';
import Community from './Components/content/community';

class App extends Component {
  render() {
      return (
          <div>
           <Header/>
           <Community/>
           <Footer/>
          </div>
      );
  }
}

export default App;
