import React, { useState } from "react";

import classes from './styles/StepsProcess.module.scss';

import FirstStep from '../firstStep/FirstStep';
import SecondStep from '../secondStep/SecondStep';
import ThirdStep from '../thirdStep/ThirdStep';
import FourthStep from '../fourthStep/FourthStep';
import FifthStep from '../fifthStep/FifthStep';
import SixthStep from '../sixthStep/SixthStep';
// import FinalReview from "../finalReview/FinalReview";
// import FinishedRegisteration from '../finishedRegisteration/FinishedRegisteration';
import Header from "../../header/Header";

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

import dashboardIcon from "../../../assets/applyForm/vuesax-bold-grid-3.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const steps = [
    {
        label: 'Step 1',
        description: `Personal Information`,
    },
    {
        label: 'Step2',
        description: 'Program request',
    },
    {
        label: 'Step 3',
        description: `Occupational background`,
    },
    {
        label: 'Step 4',
        description: `Supporting documents`,
    },
    {
        label: 'Step 5',
        description: `Financial Status`,
    },
    {
        label: 'Step 6',
        description: `Agreement`,
    },
    // {
    //     label: 'Step 7',
    //     description: `Final review`,
    // },
];

const stepLableIcon = ({ active = false, compelete = false }) => {
    return (
        <div>
            {active ?
                <TripOriginIcon className={classes.activeIcon} />
                : compelete ?
                    <CheckCircleIcon className={classes.completeIcon} />
                    :
                    <TripOriginIcon className={classes.defaultIcon} />
            }
        </div>
    )
}


const StepsProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [sliderValue, setSliderValue] = useState(7);
    const [stepsValidate, setStepsValidate] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });
    const [finishRegister, setFinishRegister] = useState(false);
    const [stepDesc, setStepDesc] = useState(`Personal Information`)

    const stepContent = (step) => {
        switch (step) {
            case 0:
                return <FirstStep />;
                break;
            case 1:
                return <SecondStep />;
                break;
            case 2:
                return <ThirdStep />;
                break;
            case 3:
                return <FourthStep />;
                break;
            case 4:
                return <FifthStep />;
                break;
            case 5:
                return <SixthStep />;
                break;
        }
    };


    const totalSteps = () => {
        return steps.length;
    };

    const SetFalseValidateHandler = (nextStep = false) => {
        let stateValidateVariable = { ...stepsValidate };
        stateValidateVariable[activeStep] = false;
        setStepsValidate({ ...stateValidateVariable });
        if (nextStep) {
            getNextStep();
        }
    };

    const completedSteps = () => {
        return activeStep === steps.length;
    };

    const isFirstStep = () => {
        return activeStep === 0;
    }

    const isLastStep = () => {
        return activeStep === totalSteps();
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps() - 1;
    };

    const handleNext = () => {
        // let stateValidateVariable = { ...stepsValidate };
        // stateValidateVariable[activeStep] = true;
        // setStepsValidate({ ...stateValidateVariable });
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderValue(sliderValue - 1)
    };

    const getNextStep = (step) => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderValue(sliderValue - 1)
        setStepDesc(step)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderValue(sliderValue + 1)
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleFinishPage = () => {
        setFinishRegister(true)
    };


    return (
        <>
            <Box>
                <Header
                    icon={<LazyLoadImage
                        style={{
                            width: "1.4rem",
                            display: "flex",
                            alignItems: "center",
                            padding: "0.35rem",
                            filter: " brightness(0) invert(1) "

                        }}
                        src={dashboardIcon}
                    />}
                    title="New Application"
                />
                <Grid container xs={12} className={classes.stepperBackground}  >
                    <Grid className={classes.stepper} item xs={12}>
                        <Stepper alternativeLabel
                            sx={{
                                ".MuiStepConnector-lineHorizontal": {
                                    color: "#f8f7fa",
                                    height: "0.5rem"
                                },
                                ".css-z7uhs0-MuiStepConnector-line": {
                                    borderTopWidth: "0.15rem",
                                    color: " #a5a0b7",
                                },
                                ".css-zpcwqm-MuiStepConnector-root ": {
                                    left: "calc(-50% + 10px)",
                                    right: " calc(50% + 10px)",
                                }
                            }}
                            activeStep={activeStep}>
                            {steps.map((step, index) => {
                                const stepProps = {};
                                const labelProps = {};

                                return (
                                    <>
                                        <Step key={step.label} {...stepProps} >
                                            {console.log(labelProps)}
                                            <StepLabel
                                                StepIconComponent={() => stepLableIcon({
                                                    active: activeStep === index,
                                                    complete: activeStep > index,
                                                    stepNumber: index + 1
                                                })}  {...labelProps}>
                                                {step.description}
                                            </StepLabel>
                                        </Step>
                                    </>
                                )
                            })}
                        </Stepper>
                    </Grid>
                </Grid>
                <Box>
                    {stepContent(activeStep)}
                </Box>

                {steps.map((step, index) => (
                    <Grid container sx={{ display: "flex", flexDirection: "row" }} spacing={0} xs={12} className={classes.submitButtons} >
                        {index === activeStep - 1 ?
                            (
                                <Grid item xs={6}>
                                    <Button variant="outlined" sx={{ marginLeft: "auto", }} className={classes.handleBackButton} onClick={handleBack}>
                                        {step.description}
                                    </Button>
                                </Grid>
                            ) : index === activeStep + 1 ?
                                (
                                    <Button sx={{ marginBottom: "auto" }} className={classes.handleNextButton} onClick={handleNext}>
                                        {step.description}
                                    </Button>
                                ) : null}
                    </Grid>
                ))}
            </Box>
        </>
    );
};

export default StepsProcess;