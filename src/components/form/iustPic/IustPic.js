import React from "react";

import classes from './styles/IustPic.module.scss';
import logo from '../../../assets/applyForm/logo.svg';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Typography } from "@mui/material";


const IustPic = () => {
    return (
        <>
            <div className={classes.iustPicContainer}>
                <div className={classes.iustContainer}>

                    <div className={classes.iustTitle}>
                        <div>
                            <LazyLoadImage src={logo} className={classes.iustLogo} />
                        </div>
                        <div className={classes.universityTitle}>
                            <Typography sx={{
                                fontFamily: "Montserrat",
                                color: "#fff",
                                fontWeight: "500",
                                fontSize: "1.02rem"
                            }}>
                                Iran University of Science and Technology
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    color: "#bfb9d4",
                                    fontWeight: "500",
                                    fontSize: "0.88rem"
                                }}>
                                Office of International Students
                            </Typography>
                        </div>
                    </div>

                    <div className={classes.iustDescription}>
                        <Typography
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#dfdcea",
                                fontWeight: "500",
                                fontSize: "0.8rem"
                            }}>
                            egestas purus viverra accumsan in nisl nisi. arcu cursus vitae congue maur
                            rhoncus  aenean vel elit scelerisque. in egestas erat imperdiet sed euismod
                            nisi porta lorem mollis.
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IustPic