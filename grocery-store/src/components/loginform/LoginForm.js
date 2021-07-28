import React from 'react'
import { useDispatch } from "react-redux";


import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


import useStyles from './styles';

const LoginForm = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = ({ username, password }) => {
    reset();
  }

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align='center'>
          <Avatar className={classes.avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form className='mb-0 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          
        </form>
        <TextField
          id="username"
          name="username"
          label='Username'
          placeholder='Enter username'
          margin="dense"
          {...register('username')}
          error={errors.username ? true : false}
          fullWidth required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.username?.message}
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
          fullWidth required
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.password?.message}
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
          Sign in
        </Button>
        <Typography >
          <Link href="/home/forgotpassword" >
            Forgot password ?
          </Link>
        </Typography>
        <Typography > Do you have an account ?
          <Link href="/home/register" >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LoginForm;