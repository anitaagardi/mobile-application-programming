import React from "react";

function Greeting2() { 
   return <h1>Hello React!</h1> 
   
} 

class First extends React.Component {
    
   render() {
    const element = <h1>Hello React!</h1>;
    var greeting = <h1>Hello React!</h1>
    var canGreet = true; 
    if(canGreet) { 
        greeting = <h1>Hello React!</h1> 
    }
    var  greeting2 = Greeting2()
    var cTime = new Date().toTimeString();
      return (
         <div>
            <h1>Hello World!</h1>
            <div>Greeting {greeting}</div>
            <div>Greeting2 {greeting2}</div>
            <div><p>The current time is {cTime}</p></div>
         </div>
      );
   }
}
export default First;