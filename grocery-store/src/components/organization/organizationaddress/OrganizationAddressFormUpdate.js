import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useStyles from './styles';

const OrganizationAddressFormUpdate = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    idOrganization: Yup.string().required('Organization id is required'),
    addressOrganization: Yup.string().required('Organization addressOrganization is required'),
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
    <div>
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align='center'>
            <h2>Create new Organization Address</h2>
          </Grid>
          <TextField
            id="idOrganization"
            name="idOrganization"
            label='Organization id'
            placeholder='Enter organization id'
            margin="dense"
            {...register('idOrganization')}
            error={errors.idOrganization ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.idOrganization?.message}
          </Typography>
          <TextField
            id="addressOrganization"
            name="addressOrganization"
            label='Organization address'
            placeholder='Enter organization address'
            fullWidth
            required
            margin="dense"
            {...register('addressOrganization')}
            error={errors.addressOrganization ? true : false}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.addressOrganization?.message}
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
    </div>
  );
}

export default OrganizationAddressFormUpdate;