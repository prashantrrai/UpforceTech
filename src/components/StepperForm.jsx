import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MuiStepper from "@mui/material/Stepper";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  addressDetailsFormInitialValues,
  userInfoFormInitialValues,
} from "../utils/InitialStates";
import {
  AddressDetailsSchema,
  UserInfoSchema,
} from "../utils/ValidationSchema";
import AddressDetails from "./AddressDetails";
import ThankYou from "./ThankYou";
import { UserInformation } from "./UserInformation";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "THANK YOU"];

function validateStep(schema, formikInstance, callback) {
  if (schema.isValidSync(formikInstance.values)) {
    callback();
  } else {
    formikInstance.validateForm();
  }
}

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const userInfoFormik = useFormik({
    initialValues: { ...userInfoFormInitialValues },
    validationSchema: UserInfoSchema,
  });

  const addressDetailsFormik = useFormik({
    initialValues: { ...addressDetailsFormInitialValues },
    validationSchema: AddressDetailsSchema,
  });

  const handleNext = () => {
    if (activeStep === 0) {
      validateStep(UserInfoSchema, userInfoFormik, () => {
        setActiveStep((prevStep) => prevStep + 1);
        setFormData((prevState) => ({
          ...prevState,
          ...userInfoFormik.values,
        }));
      });
    }
    if (activeStep === 1) {
      validateStep(AddressDetailsSchema, addressDetailsFormik, () => {
        setActiveStep((prevStep) => prevStep + 1);
        setFormData((prevState) => ({
          ...prevState,
          ...addressDetailsFormik.values,
        }));
      });
    }
  };

  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  return (
    <div className="container">
      <div className="stepper">
        <Box sx={{ width: "100%" }}>
          <MuiStepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </MuiStepper>
        </Box>
      </div>
      <div className="steps-container">
        <Grid container spacing={2}>
          <>
            {activeStep === 0 && <UserInformation formik={userInfoFormik} />}
            {activeStep === 1 && (
              <AddressDetails formik={addressDetailsFormik} />
            )}
            {activeStep === 2 && <ThankYou formData={formData} />}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBack}
                className="back-btn"
                disabled={activeStep === 0 || activeStep === steps.length - 1}
              >
                Back
              </Button>
              {activeStep < steps.length - 1 && (
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Grid>
          </>
        </Grid>
      </div>
    </div>
  );
}

export default StepperForm;
