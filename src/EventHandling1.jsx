import React from 'react';
class EventHandling1 extends React.Component {
    newfun(){
        alert("OK");
    }

    render(){
        <div>
            <h2>This is the Event..</h2>
            <button onClick={this.newfun}>Click</button>
        </div>
    }
}
export default EventHandling1;
