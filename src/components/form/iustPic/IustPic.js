import React from "react";

import classes from './styles/IustPic.module.scss';
import logo from '../../../assets/applyForm/logo.svg';


const IustPic = () => {
    return (
        <>
            <div className={classes.iustPicContainer}>
                <img src={logo} style={{ width: "5rem", height: "5rem" }}></img>
            </div>
        </>
    );
};

export default IustPic