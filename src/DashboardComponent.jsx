import React from 'react';


class DashboardComponent extends React.Component {

    constructor(){
        super();
        this.state = {color: 'red', type : 'D1', year: 2001};
    }

    newFunc = () => {
        this.setState({type: 'D2'});
    }
    render() {
        return (
            <div>
                <h1>This is our new Dashboard.It is of color {this.state.color}
                    and the type is {this.state.type} and the year of manufacture is {this.state.year}
                </h1>
                <button onClick={this.newFunc}>Change Property</button>
                <table border="1" cellPadding="8" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Arjun Mehta</td>
                            <td>Engineering</td>
                            <td>arjun@company.com</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Riya Kapoor</td>
                            <td>Marketing</td>
                            <td>riya@company.com</td>
                        </tr>
                        <tr>
                            <td>103</td>
                            <td>Dev Sharma</td>
                            <td>Finance</td>
                            <td>dev@company.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}




export default DashboardComponent;
