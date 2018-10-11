import React, { Component } from 'react';

export default class DImg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={ this.props.row.img}></img>
                <h3>{this.props.row.product_name}</h3>
            </div>
        )
    }
}
