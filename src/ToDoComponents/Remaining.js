import React, { Component } from 'react';

class Remaining extends Component {


    render(){
        return(
            <div>
                <p>
                    <span id="remaining-count">{this.props.value}</span> items remain
                </p>
            </div>
            
        );

    }
}






export default Remaining;