import React from 'react';

import classes from './styles/SingleApply.module.scss';

import { DataGrid } from "@mui/x-data-grid";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



const SingleApply = () => {
    return (
        <>
            <Box className={classes.totalFormBox}>

                <Box className={classes.requestId}>
                    <div className={classes.requestTitle}>
                        <Typography
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                color: "#121f3e",
                            }}>
                            Request Id :
                        </Typography>
                        <Typography
                            style={{
                                fontFamily: "Montserrat",
                                fontSize: "0.9rem",
                                color: "#a5a0b7",
                            }}>
                            Date Submitted :
                        </Typography>
                    </div>
                </Box>

                <Box className={classes.personalInfo}>
                    <Grid container className={classes.fieldsContainer}>
                        <Grid item xs={2.75} className={classes.fieldBox}>
                            <div className={classes.fieldText}>
                                <Typography className={classes.fieldTitle}>Field</Typography>
                                <Typography className={classes.fieldAnswer}>Mathematics</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={2.75} className={classes.fieldBox}>
                            <div className={classes.fieldText}>
                                <Typography className={classes.fieldTitle}>Degree</Typography>
                                <Typography className={classes.fieldAnswer}>Phd</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={2.75} className={classes.fieldBox}>
                            <div className={classes.fieldText}>
                                <Typography className={classes.fieldTitle}>University Approve</Typography>
                                <Typography className={classes.fieldAnswer}>In Progress</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={2.75} className={classes.fieldBox}>
                            <div className={classes.fieldText}>
                                <Typography className={classes.fieldTitle}>Faculty Approve</Typography>
                                <Typography className={classes.fieldAnswer}>Approved</Typography>
                            </div>
                        </Grid>
                    </Grid>

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
            </Box>
        </>
    );
};

export default SingleApply;