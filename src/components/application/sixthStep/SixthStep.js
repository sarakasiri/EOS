import React, { useState } from "react";

import classes from "./styles/SixthStep.module.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Formik } from "formik";
import * as yup from "yup";

import { LazyLoadImage } from "react-lazy-load-image-component";

import tick from '../../../assets/applyForm/vuesax-outline-tick-square.svg';

const SixthStep = () => {
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        phdUniversty: yup.string().required("required"),
    });

    const initialValues = {
        phdUniversty: "",
    };
    return (
        <>
            <Box className={classes.totalFormBox}>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit} >
                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <LazyLoadImage src={tick} />
                                    <Typography style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Agreement</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth  >
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}
                                            >
                                                First Name
                                            </FormHelperText>
                                            <OutlinedInput
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.firstName}
                                                type="text"
                                                name="firstName"
                                                style={{
                                                    paddingRight: "0.3rem",
                                                }}
                                                error={!!touched.firstName && !!errors.firstName}
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.firstName && errors.firstName}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth >
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}
                                            >
                                                Date Of Birth
                                            </FormHelperText>
                                            <OutlinedInput
                                                type="date"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.dateOfBirth}
                                                name="dateOfBirth"
                                                error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                                                helperText={touched.dateOfBirth && errors.dateOfBirth}
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410",

                                            }}>
                                                {touched.dateOfBirth && errors.dateOfBirth}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={6}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "rgba(208, 208, 208, 0.251)",
                                                height: "3rem",
                                                padding: "0 1rem ",
                                                marginTop: "0.3rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: "0.2rem",
                                            }}>

                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="I hereby certify that the above information is true and accurate" />
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControl variant="outlined" fullWidth rows={10}>
                                            <FormHelperText
                                                className={classes.textFieldTitles}
                                            >
                                                Please Specify
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="textArea"
                                                minRows={10}
                                                sx={{
                                                    "& fieldset": { border: 'none' },
                                                    marginBottom: "1rem",
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>

                                </Grid>

                            </Box>

                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default SixthStep;