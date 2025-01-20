import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Checkbox, Chip } from '@mui/material';

const steps = ['Introductory video', 'Are you an actor/movie professional'];

export default function HorizontalLinearStepper({ setOpen, video }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [checked, setChecked] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (activeStep === 1) {
      window.open('https://app.myreeldream.ai/')
      setOpen(false)
    }
    else if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {
            activeStep === 0 ? <>
              <video width="100%" height="315" style={{ borderRadius: '5px' }} autoPlay>
                <source src={video} type="video/mp4" />
              </video>
            </> : <>
              <Typography variant='h5' sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Poppins', margin: '0', padding: '0', padding: '5%', fontSize: { md: '1.2rem', sm: '1rem', xs: '1rem' } }}><strong style={{ color: '#3770FF' }}>Start Your Journey and Unlock Opportunities</strong><br /> Join the Spotlight as an aspiring talent or Collaborate with the Best as a movie professional</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button
                >
                  <Checkbox
                    checked={checked}
                    size='small'
                    onChange={() => {
                      setChecked(!checked)
                      setChecked2(false)
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />Aspiring talent</Button>
                <Button >
                  <Checkbox
                    checked={checked2}
                    size='small'
                    onChange={() => {
                      setChecked2(!checked2)
                      setChecked(false)
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />Movie professional</Button>
              </Box>
              {
                checked ? <Alert sx={{ marginTop: '5%' }} severity="info">Elevate Your Career: Connect with Aspiring Talents and Expand Your Reach to Movie Buyers, Distributors, and Producers.</Alert> : checked2 ? <Alert sx={{ marginTop: '5%' }} severity="info">Sell your services to aspiring artists and or to movie buyers, distributors, productors</Alert> : ""
              }
            </>
          }
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Button onClick={handleNext} disabled={activeStep === steps.length - 1 && !checked && !checked2}>
              {activeStep === steps.length - 1 ? 'Proceed' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}