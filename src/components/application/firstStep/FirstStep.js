import React from "react";

import classes from "./styles/FirstStep.module.scss";

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

import { LazyLoadImage } from "react-lazy-load-image-component";

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { Formik } from "formik";
import * as yup from "yup";

import biography from '../../../assets/login/vuesax-outline-frame.svg';
import global from '../../../assets/applyForm/vuesax-outline-global.svg';
import languages from '../../../assets/applyForm/vuesax-outline-language-square.svg';
import contact from '../../../assets/applyForm/vuesax-outline-call.svg';


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
// const makeNewStyles = makeStyles({
//     root: {
//         "& fieldset": { border: 'none' },
//         '&:hover fieldset': {
//             borderColor: 'yellow',
//             border: 'block'
//         },
//     }
// });

const FirstStep = () => {
    // const classes = makeNewStyles();

    const today = new Date();

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        dateOfBirth: yup.date().required("required").max(today),

        nationality: yup.string().required("required"),
        country: yup.string().required("required"),
        cityCode: yup.string().required("required"),

        english: yup.string().required("required"),
        persian: yup.string().required("required"),

        phoneNumber: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        postalAddress: yup.string().required("required"),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",

        nationality: "",
        country: "",
        countryCode: "",
        postalCode: "",
        city: "",
        cityCode: "",

        motherLanguage: "",
        otherLanguage: "",
        english: "",
        persian: "",

        phoneNumber: "",
        email: "",
        postalAddress: "",
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
                        helperText
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
                                    <LazyLoadImage className={classes.titleVector} src={biography} />
                                    <Typography style={{ color: "#121f3e", padding: "0 0.4rem" }}>
                                        Biography
                                    </Typography>
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
                                        <FormControl
                                            variant="outlined"
                                            fullWidth >
                                            <FormHelperText style={{
                                                marginLeft: "2rem",
                                                color: "#121f3e",
                                            }}
                                            >
                                                Last Name
                                            </FormHelperText>
                                            <OutlinedInput
                                                type="text"
                                                name="lastName"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.lastName}
                                                error={!!touched.lastName && !!errors.lastName}

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
                                                {touched.lastName && errors.lastName}
                                            </FormHelperText>
                                        </FormControl>

                                    </Grid>

                                    {/* <Grid item xs={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer
                                                components={['DesktopDatePicker']}
                                            >
                                                <DemoItem  >
                                                    <DesktopDatePicker
                                                        defaultValue="."
                                                        className={classes.stepsTextField}
                                                        sx={{
                                                            height: "3rem",
                                                            width: "15rem",
                                                            // "& fieldset": { border: 'none' },
                                                        }}
                                                        slotProps={{ textField: { width: "5rem", helperText: 'Please fill this field' } }}
                                                    />
                                                </DemoItem>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Grid> */}
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

                                    <Grid item xs={3}>
                                        {/* <FormControl fullWidth>
                                            <FormHelperText >Gender</FormHelperText>
                                            <RadioGroup row
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.firstName}
                                                name="firstName"
                                                error={!!touched.firstName && !!errors.firstName}
                                                helperText={touched.firstName && errors.firstName}
                                            >
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        fullWidth
                                                        value="weak"
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Female
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        className={classes.kiriRadio}
                                                        value="good"
                                                        control={<StyledRadio size="small"
                                                            sx={{
                                                                '&.Mui-checked': {
                                                                    border: "2rem sollid #5919e0e3",
                                                                    color: '#5919e0e3 !important',
                                                                },
                                                                '& .css-r5ex5e-MuiSvgIcon-root': {
                                                                    color: "red"
                                                                }
                                                            }} />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Male
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                            </RadioGroup>
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410"
                                            }}>
                                                {touched.firstName && errors.firstName}
                                            </FormHelperText>
                                        </FormControl> */}

                                        <div>
                                            <Typography className={classes.radioButtonsTitle}>Gender</Typography>
                                            <div className={classes.radioButtons} style={{ height: "2.6rem", width: "90%", backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                                <div className={classes.radioButtonsDiv} style={{ width: "45%" }}>
                                                    <Typography className={classes.radioButtonText}>Male</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "45%" }}>
                                                    <Typography className={classes.radioButtonText}>Female</Typography>
                                                </div>
                                            </div>
                                        </div>
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
                                    <LazyLoadImage className={classes.titleVector} src={global} />

                                    <Typography style={{
                                        marginRight: "auto ",
                                        color: "#121f3e",
                                        padding: "0 0.4rem"
                                    }}>
                                        National Info
                                    </Typography>
                                    <div className={classes.dash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Nationality
                                            </FormHelperText>
                                            <Select
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.nationality}
                                                type="text"
                                                name="nationality"
                                                error={!!touched.nationality && !!errors.nationality}
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
                                                {touched.nationality && errors.nationality}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Country
                                            </FormHelperText>
                                            <Select
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.country}
                                                type="text"
                                                name="country"
                                                style={{
                                                    paddingRight: "0.3rem",
                                                }}
                                                error={!!touched.country && !!errors.country}
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
                                            <FormHelperText style={{
                                                margin: "0.2rem 0 0.8rem 2rem",
                                                color: "#fd0410",

                                            }}>
                                                {touched.country && errors.country}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Country Code
                                            </FormHelperText>
                                            <OutlinedInput
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.countryCode}
                                                type="text"
                                                name="nationality"
                                                className={classes.stepsTextField}
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
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Postal Code
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
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
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
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

                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                City Code
                                            </FormHelperText>
                                            <OutlinedInput
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.cityCode}
                                                type="text"
                                                name="cityCode"
                                                error={!!touched.cityCode && !!errors.cityCode}
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
                                                {touched.cityCode && errors.cityCode}
                                            </FormHelperText>
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
                                    <LazyLoadImage className={classes.titleVector} src={languages} />

                                    <Typography style={{
                                        color: "#121f3e",
                                        padding: "0 1rem",

                                        marginRight: "auto ",
                                    }}>
                                        Language
                                    </Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Mother Language
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
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
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Other Languages
                                            </FormHelperText>
                                            <OutlinedInput
                                                className={classes.stepsTextField}
                                                sx={{
                                                    height: "3rem",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>

                                        {/* <FormControl fullWidth>
                                            <FormHelperText >English</FormHelperText>
                                            <RadioGroup row>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        fullWidth
                                                        value="weak"
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Weak
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        className={classes.kiriRadio}
                                                        value="good"
                                                        control={<StyledRadio size="small"
                                                            sx={{
                                                                '&.Mui-checked': {
                                                                    border: "2rem sollid #5919e0e3",
                                                                    color: '#5919e0e3 !important',
                                                                },
                                                                '& .css-r5ex5e-MuiSvgIcon-root': {
                                                                    color: "red"
                                                                }
                                                            }} />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Good
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        value="exellent"
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Execellent
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                            </RadioGroup>
                                        </FormControl> */}


                                        <div>
                                            <Typography className={classes.radioButtonsTitle}>English</Typography>
                                            <div className={classes.radioButtons} style={{ height: "2.6rem", width: "90%", backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>Excellent</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>good</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>weak</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/* <FormControl fullWidth>
                                            <FormHelperText >Persian</FormHelperText>
                                            <RadioGroup row>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        fullWidth
                                                        value="weak"
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Weak
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        className={classes.kiriRadio}
                                                        value="good"
                                                        control={<StyledRadio size="small"
                                                            sx={{
                                                                '&.Mui-checked': {
                                                                    border: "2rem sollid #5919e0e3",
                                                                    color: '#5919e0e3 !important',
                                                                },
                                                                '& .css-r5ex5e-MuiSvgIcon-root': {
                                                                    color: "red"
                                                                }
                                                            }} />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Good
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                                <div className={classes.radioButtonBackground}>
                                                    <FormControlLabel
                                                        value="exellent"
                                                        control={<StyledRadio size="small" />}
                                                        label={
                                                            <Typography sx={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
                                                                Execellent
                                                            </Typography>
                                                        }
                                                        labelPlacement="bottom"
                                                    />
                                                </div>
                                            </RadioGroup>
                                        </FormControl> */}


                                        <div>
                                            <Typography className={classes.radioButtonsTitle}>Persian</Typography>
                                            <div className={classes.radioButtons} style={{ height: "2.6rem", width: "90%", backgroundColor: "red", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>Excellent</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>good</Typography>
                                                </div>
                                                <div className={classes.radioButtonsDiv} style={{ width: "30%" }}>
                                                    <Typography className={classes.radioButtonText}>weak</Typography>
                                                </div>
                                            </div>
                                        </div>
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
                                    <LazyLoadImage className={classes.titleVector} src={contact} />

                                    <Typography style={{ color: "#121f3e", padding: "0 0.4rem" }}>Contact</Typography>
                                    <div className={classes.menuItemDash}></div>
                                    <span style={{ color: "#96a0b5", padding: "0 0.4rem" }}>Or</span>
                                </div>
                                <Grid container xs={12}>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Phone Or Cell Number
                                            </FormHelperText>
                                            <OutlinedInput
                                                type="text"
                                                name="phornNumber"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.phoneNumber}
                                                error={!!touched.phoneNumber && !!errors.phoneNumber}

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
                                                {touched.phoneNumber && errors.phoneNumber}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Email
                                            </FormHelperText>
                                            <OutlinedInput
                                                type="text"
                                                name="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                error={!!touched.email && !!errors.email}

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
                                                {touched.email && errors.email}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" fullWidth>
                                            <FormHelperText
                                                style={{
                                                    marginLeft: "2rem",
                                                    color: "#121f3e",
                                                }}>
                                                Postal Address
                                            </FormHelperText>
                                            <OutlinedInput
                                                type="text"
                                                name="postalAddress"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.postalAddress}
                                                error={!!touched.postalAddress && !!errors.postalAddress}

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
                                                {touched.postalAddress && errors.postalAddress}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Button type="submit">dfghyj</Button>
                        </form>
                    )}
                </Formik>
            </Box>

        </>
    );
};

export default FirstStep;