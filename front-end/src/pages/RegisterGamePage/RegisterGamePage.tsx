import {
  Grid, Container, Typography, Button, TextField, Toolbar, Select, MenuItem, Checkbox, Box,
} from '@material-ui/core';
import {
  Formik, Form, Field, ErrorMessage, FormikProps, useFormik,
} from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useStyles } from './Style';

const RegisterGamePage = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      year: new Date(),
      console: '',
      completed: false,
      dateOfCompletion: new Date(),
      personalNotes: '',
    },

    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('Required').max(100, 'Maximum title length is 100 characters!'),
      year: Yup.date()
        .required('Required').typeError('Please enter a valid date'),
      console: Yup.string()
        .required('Required'),
      completed: Yup.boolean(),
      dateOfCompletion: Yup.date()
        .typeError('Please enter a valid date'),
      personalNotes: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Toolbar />
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Typography variant="h6">Register a new game in the catalog</Typography>
            <Typography variant="caption">Fill the form to add a new game</Typography>

            <form autoComplete="off" onSubmit={formik.handleSubmit} className={classes.spacing}>
              <TextField
                className={classes.spacing}
                name="title"
                label="Title"
                required
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.title)}
                helperText={formik.errors.title}
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className={classes.spacing}
                  margin="normal"
                  id="date-picker-dialog"
                  name="year"
                  label="Game Year"
                  fullWidth
                  format="yyy/MM/dd"
                  minDate="1970-11-01"
                  maxDate="2022-01-01"
                  value={formik.values.year}
                  error={Boolean(
                    formik.errors.year,
                  )}
                  helperText={formik.errors.year}
                  onChange={(date) => {
                    formik.setFieldValue(
                      'year',
                      date,
                    );
                  }}
                  required
                />
              </MuiPickersUtilsProvider>

              <TextField
                className={classes.spacing}
                name="console"
                label="Console"
                fullWidth
                required
                select
                value={formik.values.console}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.console)}
                helperText={formik.errors.console}
              >
                <MenuItem value="PS2">PS2</MenuItem>
                <MenuItem value="XBOX ONE">XBOX ONE</MenuItem>
                <MenuItem value="PS4">PS4</MenuItem>
                <MenuItem value="NINTENDO SWITCH">NINTENDO SWITCH</MenuItem>
                <MenuItem value="PS5">PS5</MenuItem>
                <MenuItem value="PC">PC</MenuItem>
              </TextField>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.spacing}
              >
                <Typography variant="h6">Have you completed this game?</Typography>
                <Checkbox
                  name="completed"
                  value={formik.values.completed}
                  onChange={formik.handleChange}
                  color="primary"
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className={classes.spacing}
                  margin="normal"
                  id="date-picker-dialog"
                  name="dateOfCompletion"
                  label="Date Of Completion"
                  disabled={!formik.values.completed}
                  fullWidth
                  format="yyy/MM/dd"
                  minDate="1970-11-01"
                  maxDate="2022-01-01"
                  value={formik.values.dateOfCompletion}
                  error={Boolean(
                    formik.errors.dateOfCompletion,
                  )}
                  helperText={formik.errors.dateOfCompletion}
                  onChange={(date) => {
                    formik.setFieldValue(
                      'dateOfCompletion',
                      date,
                    );
                  }}
                />
              </MuiPickersUtilsProvider>
              <TextField
                className={classes.spacing}
                name="personalNotes"
                label="Personal Notes"
                required
                fullWidth
                value={formik.values.personalNotes}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.personalNotes)}
                helperText={formik.errors.personalNotes}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default RegisterGamePage;
