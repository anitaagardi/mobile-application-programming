import React from "react";

function getCurrentTime() {
      return new Date().toTimeString();
   }


class Second extends React.Component {
    render() {
        return (
                <div>
         <p>The current time is <span className="red">{getCurrentTime()}</span></p>
      </div>

            );
    }
}
export default Second;
