import React from 'react';

class UniversityClassComp extends React.Component {
    render() {
        return (
            <div>
                <h2>The University name is {this.props.name}</h2>
            </div>
        );
    }
}

export default UniversityClassComp;
