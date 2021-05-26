import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return ( 
        <div className='container'>
            <Link to='./time'>Time</Link>
            <Link to='./weather'>Weather</Link>
        </div>
        );
    }
}