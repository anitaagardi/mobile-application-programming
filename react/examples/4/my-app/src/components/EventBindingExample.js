import React from "react";
class EventBindingExample extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         welcomeMessage: "Hello"
      }
      this.changeMessageHandler = this.changeMessageHandler.bind(this)
   }
   changeMessageHandler() {
      this.setState(prevState => ({
         welcomeMessage: prevState.welcomeMessage == "Hello" ? "Welcome" : "Hello"
      }));
   }
   render() {
      return (
         <div>
            <div><h3>{this.state.welcomeMessage}, {this.props.name}</h3></div>
            <div><button onClick={this.changeMessageHandler}>Change welcome message</button></div>
         </div>
      )
   }          
}
export default EventBindingExample;