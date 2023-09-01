import * as Yup from "yup";
import { maritalStatusOptions } from "./InitialStates";

export const UserInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobile: Yup.string()
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .length(10, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  email: Yup.string().email("Invalid email address").required(),
  birthday: Yup.date()
    .nullable()
    .max(new Date(), "Birthday cannot be in the future")
    .required("Birthday is required"),
  age: Yup.number()
    .integer()
    .min(0, "Age cannot be negative")
    .required("Age is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
  height: Yup.number()
    .min(0, "Height cannot be negative")
    .required("Height is required"),
  weight: Yup.number()
    .min(0, "Weight cannot be negative")
    .required("Weight is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female"], "Invalid gender")
    .required("Gender is required"),
  maritalStatus: Yup.string()
    .oneOf([...maritalStatusOptions], "Invalid marital status")
    .required("Marital Status is required"),
});

export const AddressDetailsSchema = Yup.object().shape({
  address1: Yup.string().required("Address Line 1 is required"),
  address2: Yup.string().required("Address Line 2 is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  pincode: Yup.string()
    .matches(/^\d+$/, "Pin code must contain only digits")
    .length(6, "Pin code must be exactly 6 digits")
    .required("Pin code is required"),
});
