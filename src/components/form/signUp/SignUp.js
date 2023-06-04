import React, { useState } from 'react';

import classes from './styles/SignUp.module.scss';

import IustPic from '../iustPic/IustPic';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Link } from 'react-router-dom';

import { Formik } from "formik";
import * as yup from "yup";

const SignUp = () => {
    const [agentBtn, setAgentBtn] = useState(false);

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const agentBtnHandler = () => {
        setAgentBtn(value => !value);
    };

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        password: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
    });

    const initialValues = {
        firstName: "",
        password: "",
        email: "",
    };

    return (
        <>
            <Box className={classes.loginBox} >
                <Grid container columns={12}>
                    <Grid className={classes.formBackground} item xs={6}>
                        <IustPic />
                    </Grid>
                    <Grid item xs={4.5} className={classes.loginForm}>
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
                                    <Box className={classes.loginBox}>
                                        <Typography marginBottom={"0.4rem"}>Login</Typography>
                                        <Typography marginBottom={"2rem"}>to register an application.</Typography>
                                        <Button
                                            fullWidth
                                            className={classes.googleLogin}
                                        >
                                            <span>login with google</span>
                                        </Button>

                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem" }}>
                                            <div className={classes.menuItemDash}></div>
                                            <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                            <div className={classes.menuItemDash}></div>
                                        </div>

                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.firstName}
                                            name="firstName"
                                            error={!!touched.firstName && !!errors.firstName}
                                            helperText={touched.firstName && errors.firstName}
                                            sx={{
                                                marginBottom: "1.5rem",
                                                borderColor: "#d9e4ec"
                                            }}
                                            label={
                                                <div >
                                                    <span>username</span>
                                                </div>
                                            }
                                        ></TextField>

                                        <div className={classes.buttons}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="text"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                name="firstName"
                                                error={!!touched.password && !!errors.password}
                                                helperText={touched.password && errors.password}
                                                // sx={{ marginBottom: "2rem" }}
                                                label={
                                                    <div >
                                                        <span>password</span>
                                                    </div>
                                                }
                                            ></TextField>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="text"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                name="firstName"
                                                error={!!touched.password && !!errors.password}
                                                helperText={touched.password && errors.password}
                                                sx={{ marginLeft: "1rem" }}
                                                label={
                                                    <div >
                                                        <span>password</span>
                                                    </div>
                                                }
                                            ></TextField>
                                        </div>

                                        <div className={classes.buttons}>
                                            <div>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox onClick={agentBtnHandler} />} label="i'm an agent" />
                                                </FormGroup>
                                            </div>
                                            <div>
                                                <span>forget password ?</span>
                                                {/* <Link to="/auth/forget_password">
                            forget password ?
                        </Link> */}
                                            </div>
                                        </div>

                                        {agentBtn ? (
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                type="text"
                                                name="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                error={!!touched.email && !!errors.email}
                                                helperText={touched.email && errors.email}
                                                sx={{ marginBottom: "1.2rem" }}
                                                label={
                                                    <div >
                                                        <span>agent's email</span>
                                                    </div>
                                                }
                                            ></TextField>
                                        ) : null}

                                        <Button
                                            fullWidth
                                            type='submit'
                                            className={classes.loginBtn}
                                        >
                                            Login
                                        </Button>
                                        <Typography>don't have any account?
                                            {/* <Link>
                                    sign Up
                                </Link> */}
                                            <span>signup</span>
                                        </Typography>
                                    </Box>

                                </form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default SignUp;