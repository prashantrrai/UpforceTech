import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {
  bloodGroupOptions,
  maritalStatusOptions,
} from "../utils/InitialStates";

export const UserInformation = ({ formik }) => {
  const { handleChange, values, handleSubmit, errors } = formik;
  const {
    firstName,
    middleName,
    lastName,
    mobile,
    email,
    birthday,
    age,
    bloodGroup,
    height,
    weight,
    gender,
    maritalStatus,
  } = values;
  return (
    <form onSubmit={handleSubmit} className="form">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            error={errors.firstName}
            helperText={errors.firstName}
            label="First Name"
            variant="outlined"
            name="firstName"
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z]*$/.test(inputValue) || inputValue === '') {
                handleChange(e);
              }
            }}
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            error={errors.middleName}
            helperText={errors.middleName}
            label="Middle Name"
            variant="outlined"
            name="middleName"
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z]*$/.test(inputValue) || inputValue === '') {
                handleChange(e);
              }
            }}
            value={middleName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            error={errors.lastName}
            helperText={errors.lastName}
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^[a-zA-Z]*$/.test(inputValue) || inputValue === '') {
                handleChange(e);
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mobile No."
            variant="outlined"
            type="tel"
            name="mobile"
            value={mobile}
            error={errors.mobile}
            helperText={errors.mobile}
            onChange={handleChange}
            inputProps={{
              pattern: "[0-9]{10}",
              title: "Mobile number should have exactly 10 digits",
              maxLength: 10,
              onKeyPress: (e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            error={errors.email}
            helperText={errors.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Birthday"
            variant="outlined"
            type="date"
            name="birthday"
            value={birthday}
            error={errors.birthday}
            helperText={errors.birthday}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            type="tel"
            name="age"
            value={age}
            error={errors.age}
            helperText={errors.age}
            onChange={handleChange}
            inputProps={{
              pattern: "[0-9]{2}",
              maxLength: 2,
              onKeyPress: (e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined" error={errors.bloodGroup}>
            <InputLabel htmlFor="bloodGroup">Blood Group</InputLabel>
            <Select
              labelId="bloodGroup-label"
              id="bloodGroup"
              name="bloodGroup"
              value={bloodGroup}
              onChange={handleChange}
              label="bloodGroup"
            >
              {bloodGroupOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.bloodGroup}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Height (cm)"
            variant="outlined"
            type="text"
            name="height"
            value={height}
            error={errors.height}
            helperText={errors.height}
            onChange={handleChange}
            inputProps={{
              pattern: "[0-9]{3}",
              maxLength: 3,
              onKeyPress: (e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Weight (Kg)"
            variant="outlined"
            type="text"
            name="weight"
            value={weight}
            error={errors.weight}
            helperText={errors.weight}
            onChange={handleChange}
            inputProps={{
              pattern: "[0-9]{2}",
              maxLength: 2,
              onKeyPress: (e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset" error={errors.gender}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={gender}
              error={errors.gender}
              helperText={errors.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset" error={errors.maritalStatus}>
            <FormLabel component="legend">Marital Status</FormLabel>
            <RadioGroup
              name="maritalStatus"
              error={errors.maritalStatus}
              helperText={errors.maritalStatus}
              value={maritalStatus}
              onChange={handleChange}
              row
            >
              {maritalStatusOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option.charAt(0).toUpperCase() + option.slice(1)} // Capitalize the label
                />
              ))}
            </RadioGroup>
            <FormHelperText>{errors.maritalStatus}</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};
