import React, { useState } from "react";

import classes from "./styles/SecondStep.module.scss";

import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import { Formik } from "formik";
import * as yup from "yup";

import { LazyLoadImage } from "react-lazy-load-image-component";

import book from '../../../assets/applyForm/vuesax-outline-book.svg';
import award from '../../../assets/applyForm/vuesax-outline-award.svg';

const useStyles = makeStyles({
    root: {
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        backgroundColor: '#ffffff',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    },
    checkedIcon: {
        backgroundColor: '#5919e0e3',
        backgroundImage: 'linear-gradient(180deg,hsla(1,100%,100%,.0),hsla(1,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 20%,transparent 30%)',
            content: '""',
        },
    },
});

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

const SecondStep = (props) => {
    const [degree, setDegree] = useState();

    const handleDegreeForm = (degree) => {
        setDegree(degree);
    };

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        degree: yup.string().required("required"),
        faculty: yup.string().required("required"),
        fieldOfStudy: yup.string().required("required"),

        phdUniversty: yup.string().required("required"),
        phdFieldofStudy: yup.string().required("required"),
        phdDateOfGraduation: yup.string().required("required"),
        phdGpa: yup.string().required("required"),
        phdCountry: yup.string().required("required"),

        masterUniversty: yup.string().required("required"),
        masterFieldofStudy: yup.string().required("required"),
        masterDateOfGraduation: yup.string().required("required"),
        masterGpa: yup.string().required("required"),
        masterCountry: yup.string().required("required"),
    });

    const initialValues = {
        degree: "",
        faculty: "",
        fieldOfStudy: "",

        phdUniversty: "",
        phdFieldofStudy: "",
        phdDateOfGraduation: "",
        phdGpa: "",
        phdCountry: "",
        phdCity: "",

        masterUniversty: "",
        masterFieldofStudy: "",
        masterDateOfGraduation: "",
        masterGpa: "",
        masterCountry: "",
        masterCity: "",

        highSchoolFieldofStudy: "",
        highSchoolDateOfGraduation: "",
        highSchoolGpa: "",
        highSchoolCountry: "",
        highSchoolCity: "",
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
                                    <LazyLoadImage className={classes.titleVector} src={book} />

                                    <Typography style={{ color: "#121f3e", padding: "0 0.4rem" }}>Program Request</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>

                                    <Grid item xs={3} >
                                        <div >
                                            <Typography className={classes.radioButtonsTitle}>Degree</Typography>
                                            <div className={classes.radioButtons}>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>Bachelor</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>Master</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>Ph.D.</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}
                                            >
                                                Faculty
                                            </FormHelperText>
                                            <Select
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.faculty}
                                                type="text"
                                                name="faculty"
                                                error={!!touched.faculty && !!errors.faculty}
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
                                                {touched.faculty && errors.faculty}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}
                                            >
                                                Field Of Study
                                            </FormHelperText>
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

                                </Grid>

                            </Box>


                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <LazyLoadImage className={classes.titleVector} src={award} />

                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#121f3e",
                                        padding: "0 0.4rem"
                                    }}>
                                        Master's Degree
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                University
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdUniversty}
                                                type="text"
                                                name="phdUniversty"
                                                error={!!touched.phdUniversty && !!errors.phdUniversty}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdUniversty && errors.phdUniversty}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Field Of Study
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdFieldofStudy}
                                                type="text"
                                                name="phdFieldofStudy"
                                                error={!!touched.phdFieldofStudy && !!errors.phdFieldofStudy}
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
                                                {touched.phdFieldofStudy && errors.phdFieldofStudy}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Date Of Graduation
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdDateOfGraduation}
                                                type="text"
                                                name="phdDateOfGraduation"
                                                error={!!touched.phdDateOfGraduation && !!errors.phdDateOfGraduation}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdDateOfGraduation && errors.phdDateOfGraduation}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}
                                            >
                                                GPA
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdGpa}
                                                type="text"
                                                name="phdGpa"
                                                error={!!touched.phdGpa && !!errors.phdGpa}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.phdGpa && errors.phdGpa}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Country
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phdCountry}
                                                type="text"
                                                name="phdCountry"
                                                error={!!touched.phdCountry && !!errors.phdCountry}
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
                                                {touched.phdCountry && errors.phdCountry}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem"
                                                }}
                                            >
                                                City
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                label="vbhjkl"
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
                                </Grid>
                            </Box>


                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <LazyLoadImage className={classes.titleVector} src={award} />

                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#121f3e",
                                        padding: "0 0.4rem"
                                    }}>
                                        Master's Degree
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                University
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterUniversty}
                                                type="text"
                                                name="masterUniversty"
                                                error={!!touched.masterUniversty && !!errors.masterUniversty}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterUniversty && errors.masterUniversty}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Field Of Study
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterFieldofStudy}
                                                type="text"
                                                name="masterFieldofStudy"
                                                error={!!touched.masterFieldofStudy && !!errors.masterFieldofStudy}
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
                                                {touched.masterFieldofStudy && errors.masterFieldofStudy}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Date Of Graduation
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterDateOfGraduation}
                                                type="text"
                                                name="masterDateOfGraduation"
                                                error={!!touched.masterDateOfGraduation && !!errors.masterDateOfGraduation}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterDateOfGraduation && errors.masterDateOfGraduation}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                GPA
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterGpa}
                                                type="text"
                                                name="masterGpa"
                                                error={!!touched.masterGpa && !!errors.masterGpa}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.masterGpa && errors.masterGpa}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Country
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.masterCountry}
                                                type="text"
                                                name="masterCountry"
                                                error={!!touched.masterCountry && !!errors.masterCountry}
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
                                                {touched.masterCountry && errors.masterCountry}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                City
                                            </FormHelperText>
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
                                </Grid>
                            </Box>

                            <Box className={classes.formBox}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "0.5rem",
                                    paddingTop: "0.8rem",
                                }}>
                                    <LazyLoadImage className={classes.titleVector} src={award} />

                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#121f3e",
                                        padding: "0 0.4rem"
                                    }}>
                                        High School
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Subject (Type Of Certificate)
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="text"
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Date Of Graduation
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="text"
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                GPA
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                type="text"
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                Country
                                            </FormHelperText>
                                            <Select
                                                className={classes.stepsTextField}
                                                type="text"
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
                                            <FormHelperText
                                                className={classes.textFieldTitles}

                                            >
                                                City
                                            </FormHelperText>
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
                                </Grid>
                            </Box>

                            {degree === 2 && (<div></div>)}
                            {degree === 3 && (<div></div>)}

                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default SecondStep;