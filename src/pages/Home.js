import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import SvgIcon from '@material-ui/core/SvgIcon';
import { grey } from "@material-ui/core/colors";
export default class Home extends Component {
    render() {
        return ( 
        <div className='container'>
            <Link to='./time'><SvgIcon style={{ color: grey[900], fontSize:100}}><AccessTimeIcon /></SvgIcon></Link>
            <Link to='./weather'><SvgIcon style={{ color: grey[900], fontSize:100}}><CloudOutlinedIcon /></SvgIcon></Link>
        </div>
        );
    }
}