import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useStyles from './styles';

const CategoryFormCreate = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Category name is required')
      .min(5, 'Category name must be at least 5 characters')
      .max(20, 'Category name must not exceed 20 characters'),
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
            <h2>Create new Category</h2>
          </Grid>
          <TextField
            id="name"
            name="name"
            label='Category Name'
            placeholder='Enter category name'
            margin="dense"
            {...register('name')}
            error={errors.name ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.name?.message}
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

export default CategoryFormCreate;