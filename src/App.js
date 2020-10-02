
import React,{Component} from 'react';
import Head from './component/content/head';
import Content from "./component/container/contet";
import Qlogs from "./component/container/qlogs"
import Footer from "./component/content/footer";
class App extends Component{
  render(){
    return(
      <div style={{ background:'#fafafa'}}>
        <Head/>
        <Content/>
        <Qlogs/>
        <Footer/>
      </div>
    )
  }
}

export default App
  