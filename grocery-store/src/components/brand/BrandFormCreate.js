import React, { Fragment } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useStyles from './styles';

const BrandFormCreate = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Brand name is required')
      .min(5, 'Brand name must be at least 5 characters')
      .max(50, 'Brand name must not exceed 50 characters'),
    organizationId: Yup.number()
      .integer()
      .required('Organization brand is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Fragment>
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align='center'>
            <h2>Create new Brand</h2>
          </Grid>
          <TextField
            id="name"
            name="name"
            label='Brand Name'
            placeholder='Enter brand name'
            margin="dense"
            {...register('name')}
            error={errors.name ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.name?.message}
          </Typography>
          <TextField
            id="organizationId"
            name="organizationId"
            label='Organization'
            placeholder='Enter organization'
            margin="dense"
            {...register('organizationId')}
            error={errors.organizationId ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.organizationId?.message}
          </Typography>
          <br />
          <Button
            type='submit'
            color='primary'
            variant="contained"
            className={classes.btnstyle}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default BrandFormCreate;