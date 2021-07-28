import React from 'react'

import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


import useStyles from './styles';

const RegisterForm = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Username is required')
      .min(5, 'Username must be at least 5 characters')
      .max(30, 'Username must not exceed 30 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(5, 'Password must be at least 5 characters')
      .max(100, 'Password must not exceed 100 characters'),
    repassword: Yup.string().required('Password re-type is required').oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    fullName: Yup.string()
      .required('Fullname is required')
      .min(5, 'Fullname must be at least 5 characters')
      .max(50, 'Fullname must not exceed 50 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid')
      .min(5, 'Email must be at least 5 characters')
      .max(50, 'Email must not exceed 50 characters'),
    phone: Yup.string()
      .required('Phone is required')
      .min(10, 'Phone must be at least 10 characters')
      .max(15, 'Phone must not exceed 15 characters'),
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
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align='center'>
          <Avatar className={classes.avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Register Form</h2>
        </Grid>
        <TextField
          id="userName"
          name="userName"
          label='Username'
          placeholder='Enter username'
          margin="dense"
          {...register('userName')}
          error={errors.userName ? true : false}
          fullWidth
          required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.userName?.message}
        </Typography>
        <TextField
          id="password"
          name="password"
          label='Password'
          placeholder='Enter password'
          type='password'
          margin="dense"
          {...register('password')}
          error={errors.password ? true : false}
          fullWidth
          required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.password?.message}
        </Typography>
        <TextField
          id="repassword"
          name="repassword"
          label='Re-type Password'
          placeholder='Re-type password'
          type='password'
          margin="dense"
          {...register('repassword')}
          error={errors.repassword ? true : false}
          fullWidth
          required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.repassword?.message}
        </Typography>
        <TextField
          id="fullName"
          name="fullName"
          label='Full name'
          placeholder='Enter full name'
          margin="dense"
          {...register('fullName')}
          error={errors.fullName ? true : false}
          fullWidth
          required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.fullName?.message}
        </Typography>
        <TextField
          id="email"
          name="email"
          label='Email'
          placeholder='Enter email'
          type='email'
          margin="dense"
          {...register('email')}
          error={errors.email ? true : false}
          fullWidth
          required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.email?.message}
        </Typography>
        <TextField
          id="phone"
          name="phone"
          label='Phone'
          placeholder='Enter phone'
          margin="dense"
          {...register('phone')}
          error={errors.phone ? true : false}
          fullWidth
          required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.phone?.message}
        </Typography>
        <br />
        <Button
          type='submit'
          color='primary'
          variant="contained"
          className={classes.btnstyle}
          onClick={handleSubmit(onSubmit)}
          fullWidth
        >
          Register Account
        </Button>
        <Button color='primary' variant="contained" className={classes.btnstyle} fullWidth>Reset Form</Button>
        <Typography > Already have an account ?
          <Link href="/home/login" >
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default RegisterForm;