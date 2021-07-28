import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useStyles from './styles';

const OrganizationFormUpdate = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    nameOrganization: Yup.string().required('Organization name is required'),
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
            <h2>Update Organization</h2>
          </Grid>
          <TextField
            id="nameOrganization"
            name="nameOrganization"
            label='Organization name'
            placeholder='Enter organization name'
            margin="dense"
            {...register('nameOrganization')}
            error={errors.nameOrganization ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.nameOrganization?.message}
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

export default OrganizationFormUpdate;