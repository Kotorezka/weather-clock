import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Weather extends Component {
    render() {
        
        return (
            <div className="container">
                
                <button>
                    <Link to="/">Назад</Link>
                </button>
            </div>
        );
    }
}