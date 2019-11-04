import React, { Component } from 'react';

class Remaining extends Component {


    render(){
        return(
            <div>
                <p>
                    <span id="remaining-count" onChange={this.props.update}>{this.props.itemsLeft}</span> items remain
                </p>
            </div>
            
        );

    }
}






export default Remaining;