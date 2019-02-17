import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import Header from './component/Header/Header.js';
import CustomLayout from './container/Layout';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Widgetlayout from './container/Widget';

import 'react-chat-widget/lib/styles.css';
// import logo from './MainView2/header/logo_button.png';
import logo from '../src/logo.svg'


class App extends Component {
  // componentDidMount() {
  //   ;
  // }

  // handleNewUserMessage = (newMessage) => {
  //   console.log(`New message incomig! ${newMessage}`);
  //   // Now send the message throught the backend API
  // }

  // handleSubmit = (e) => {
  //   this.props.save(this.state)
  //   this.setState({
  //     newMessage: ""
  //   })
  //   e.preventDefault()
  // }
  



  render() {
    return (
      <div className="App">
      	<Router>
	        <CustomLayout>
	          <BaseRouter />
            {/* <Widget 
            handleNewUserMessage={this.handleNewUserMessage}
            
            /> */}
            <Widgetlayout />
	        </CustomLayout>
      	</Router>
        
       
      </div>
    );
  }
}

export default App;
