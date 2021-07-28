import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

const LoginForm = () => {

  const classes = useStyles();

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align='center'>
          <Avatar className={classes.avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required />
        <TextField label='Full name' placeholder='Enter full name' fullWidth required />
        <TextField label='Email' placeholder='Enter email' type='email' fullWidth required />
        <TextField label='Phone' placeholder='Enter phone' fullWidth required />
        <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Check Infomation</Button>
        <Typography > Want to login ?
          <Link href="/home/login" >
            Sign In
          </Link>
        </Typography>
        <Typography > Want to register an account ?
          <Link href="/home/register" >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LoginForm;