import React from 'react';

class NewComponent extends React.Component{
    render(){
        //return React.createElement('h3', null, 'This heading is created using CreateElement Method');
        return React.createElement('div', {style:{backgroundColor:'yellow'}}, React.createElement('h2', {style:{color:"purple"}}, 'This is the new heading'))
    }
}

export default NewComponent;
