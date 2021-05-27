import React from "react";
import DateTime from '../components/DateTime/DateTime'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Time () {
           
        return (
            <div className="container">
                <DateTime />
                
                    <Link to="/">
                        {/* Пофиксить ширину кнопки */  }
                        <Button variant='dark' style={{width: '210px', marginTop:'10px'}}>Back</Button>
                    </Link>
                
            </div>
        );
    
}

export default Time;