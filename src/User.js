import React, { Component } from 'react';
import cssStyle from "./User.module.css";

export default class User extends Component {
    render() {
        return (
            <>
                <h1 className={cssStyle.h1}>This is just to show you the use of css module</h1>
                <img src={process.env.PUBLIC_URL + "/tirza-van-dijk-cNGUw-CEsp0-unsplash.jpg"} width="200" height="320"/>
            </>
        )
    }
}
