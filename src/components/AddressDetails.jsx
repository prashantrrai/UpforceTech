import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";
import {
  cityOptions,
  countryOptions,
  stateOptions,
} from "../utils/InitialStates";

export const AddressDetails = ({ formik }) => {
  const { handleChange, values, handleSubmit, errors } = formik;
  const { address1, address2, city, state, country, pincode } = values;

  return (
    <form onSubmit={handleSubmit} className="form">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address Line 1"
            variant="outlined"
            name="address1"
            error={errors.address1}
            helperText={errors.address1}
            value={address1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address Line 2"
            variant="outlined"
            name="address2"
            value={address2}
            error={errors.address2}
            helperText={errors.address2}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" error={errors.city}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Select
              labelId="city-label"
              id="city"
              name="city"
              value={city}
              onChange={handleChange}
              label="City"
            >
              {cityOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.city}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" error={errors.state}>
            <InputLabel htmlFor="state">State</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              name="state"
              value={state}
              onChange={handleChange}
              label="state"
            >
              {stateOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.state}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" error={errors.country}>
            <InputLabel htmlFor="country">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              name="country"
              value={country}
              onChange={handleChange}
              label="country"
            >
              {countryOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.country}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Pincode"
            variant="outlined"
            type="tel"
            name="pincode"
            value={pincode}
            error={errors.pincode}
            helperText={errors.pincode}
            onChange={handleChange}
            inputProps={{
              pattern: "[0-9]{6}",
              maxLength: 6,
              onKeyPress: (e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              },
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};
export default AddressDetails;
