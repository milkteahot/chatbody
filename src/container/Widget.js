import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import logo from './chat.png';
 
class Widgetlayout extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div className="Widget">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Movie Title"
          subtitle="챗방제목"
        />
      </div>
    );
  } 
}
 
export default Widgetlayout;