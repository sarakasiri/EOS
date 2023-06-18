import React, { useState } from "react";

import classes from "./styles/ThirdStep.module.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { Formik } from "formik";
import * as yup from "yup";

import { LazyLoadImage } from "react-lazy-load-image-component";

import briefcase from '../../../assets/applyForm/vuesax-outline-briefcase.svg';

const ThirdStep = () => {
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        occupation: yup.string().required("required"),
    });

    const initialValues = {
        occupation: "",
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
                                    <LazyLoadImage src={briefcase} />
                                    <Typography style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Program Request</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText className={classes.textFieldTitles}>Occupation</FormHelperText>
                                            <Select
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.occupation}
                                                type="text"
                                                name="occupation"
                                                style={{
                                                    paddingRight: "0.3rem",
                                                }}
                                                error={!!touched.occupation && !!errors.occupation}
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.occupation && errors.occupation}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText className={classes.textFieldTitles}>Organization</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText className={classes.textFieldTitles}>Country</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>

                                            <FormHelperText className={classes.textFieldTitles}>City</FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth >
                                            <FormHelperText
                                                className={classes.textFieldTitles}

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

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth >
                                            <FormHelperText
                                                className={classes.textFieldTitles}

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

export default ThirdStep;