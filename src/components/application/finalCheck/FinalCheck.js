import React from "react";

import classes from "./styles/FinalCheck.module.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import { LazyLoadImage } from "react-lazy-load-image-component";

import editIcon from "../../../assets/applyForm/vuesax-outline-edit-2.svg";

const FinalCheck = () => {


    return (
        <>
            <Box className={classes.totalFormBox}>

                <Box className={classes.information}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: "0.5rem",
                        paddingTop: "0.8rem",
                    }}>
                        <Typography
                            style={{
                                color: "#96a0b5",
                                padding: "0 0.4rem",
                                fontFamily: "Montserrat",
                                color: "#5256dd",
                                fontWeight: "550",
                            }}>
                            Personal Info
                        </Typography>
                        <div className={classes.menuItemDash}></div>
                        <Button className={classes.finalCheckButton}>
                            <LazyLoadImage className={classes.editIcon} src={editIcon} />
                            <Typography className={classes.editSpan}>Edit</Typography>
                        </Button>
                    </div>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Biography</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>First Name</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Last Name</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Date Of Birth</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Gender</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>National Info</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Nationality</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Country</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Country Code</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Postal Code</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>City</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>City Code</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Language</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Mother Language</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Other Language</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>English</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Persian</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Contact</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Phone Or Cell Number</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Email</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Postal Address</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Box>


                <Box className={classes.information}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: "0.5rem",
                        paddingTop: "0.8rem",
                    }}>
                        <Typography
                            style={{
                                color: "#96a0b5",
                                padding: "0 0.4rem",
                                fontFamily: "Montserrat",
                                color: "#5256dd",
                                fontWeight: "550",
                            }}>
                            Personal Info
                        </Typography>
                        <div className={classes.menuItemDash}></div>
                        <Button className={classes.finalCheckButton}>
                            <LazyLoadImage className={classes.editIcon} src={editIcon} />
                            <Typography className={classes.editSpan}>Edit</Typography>
                        </Button>
                    </div>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Program Request</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Degree</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Faculty</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Field Of Study</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Master’s Degree</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Universty</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Field Of Study</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Date Of Graduation</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>GPA</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Country</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>City</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Bachelor’s Degree</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Universty</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Field Of Study</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Date Of Graduation</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>GPA</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Country</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>City</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>High School</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Subject (Type Of Certificate)</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Date Of Graduation</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>GPA</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Country</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>City</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Box>

                <Box className={classes.information}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: "0.5rem",
                        paddingTop: "0.8rem",
                    }}>
                        <Typography
                            style={{
                                color: "#96a0b5",
                                padding: "0 0.4rem",
                                fontFamily: "Montserrat",
                                color: "#5256dd",
                                fontWeight: "550",
                            }}>
                            Personal Info
                        </Typography>
                        <div className={classes.menuItemDash}></div>
                        <Button className={classes.finalCheckButton}>
                            <LazyLoadImage className={classes.editIcon} src={editIcon} />
                            <Typography className={classes.editSpan}>Edit</Typography>
                        </Button>
                    </div>
                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Occupation</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Curriculum Vitae</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Personal Photo (JPEG Only)</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>

                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Scan Image Of Valid Passport</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Scan Image Of High School's Certificate</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Transcripts Of High School's Certificate</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Scan Image Of Bachelor’s Degree</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Transcripts Of Bachelor’s Degree</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Scan Image Of Master’s Degree</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Transcripts Of Master’s Degree</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Supporting Letter</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.information}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: "0.5rem",
                        paddingTop: "0.8rem",
                    }}>
                        <Typography
                            style={{
                                color: "#96a0b5",
                                padding: "0 0.4rem",
                                fontFamily: "Montserrat",
                                color: "#5256dd",
                                fontWeight: "550",
                            }}>
                            Personal Info
                        </Typography>
                        <div className={classes.menuItemDash}></div>
                        <Button className={classes.finalCheckButton}>
                            <LazyLoadImage className={classes.editIcon} src={editIcon} />
                            <Typography className={classes.editSpan}>Edit</Typography>
                        </Button>
                    </div>
                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Occupation</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={6}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Do You Hold Any Governmental / Institutional Scholarship For The Applied Program?</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Self Support</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.information}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: "0.5rem",
                        paddingTop: "0.8rem",
                    }}>
                        <Typography
                            style={{
                                color: "#96a0b5",
                                padding: "0 0.4rem",
                                fontFamily: "Montserrat",
                                color: "#5256dd",
                                fontWeight: "550",
                            }}>
                            Personal Info
                        </Typography>
                        <div className={classes.menuItemDash}></div>
                        <Button className={classes.finalCheckButton}>
                            <LazyLoadImage className={classes.editIcon} src={editIcon} />
                            <Typography className={classes.editSpan}>Edit</Typography>
                        </Button>
                    </div>
                    <Box className={classes.eachBox}>
                        <Typography className={classes.boxTitle}>Occupation</Typography>
                        <Box className={classes.box}>
                            <Grid container xs={12} className={classes.bioInfo}>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Applicant’s Full Name</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Date Of Application</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <Typography className={classes.eachTitle}>I Hereby Certify That The Above Information Is True And Accurate</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                        <Typography className={classes.eachTitle}>Comments</Typography>
                                        <Typography className={classes.finalCheckInfo}></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default FinalCheck;