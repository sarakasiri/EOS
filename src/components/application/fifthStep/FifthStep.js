import React from "react";

import classes from "./styles/FifthStep.module.scss";

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

import dollar from '../../../assets/applyForm/vuesax-outline-dollar-square.svg';

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
};

const FifthStep = () => {
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
    });

    const initialValues = {
        firstName: "",
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
                                    <LazyLoadImage src={dollar} />
                                    <Typography style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Biography</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <div style={{ marginLeft: "1rem" }}>
                                            <Typography className={classes.radioButtonsTitle}>Do you hold any Governmental / Institutional
                                                Scholarship for the applied program?</Typography>
                                            <div className={classes.radioButtons}>
                                                <div className={classes.radioButtonsDiv} style={{ width: "45%" }}>
                                                    <Typography className={classes.radioButtonText}>Yes</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "45%" }}>
                                                    <Typography className={classes.radioButtonText}>No</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div>
                                            <Typography className={classes.radioButtonsTitle} style={{ marginTop: "1.15rem" }}>Self Support</Typography>
                                            <div className={classes.radioButtons} >
                                                <div className={classes.radioButtonsDiv} style={{ width: "45%" }}>
                                                    <Typography className={classes.radioButtonText}>Yes</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "45%" }}>
                                                    <Typography className={classes.radioButtonText}>No</Typography>
                                                </div>
                                            </div>
                                        </div>
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

export default FifthStep;