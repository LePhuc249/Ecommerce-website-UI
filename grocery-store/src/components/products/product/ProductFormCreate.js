import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useStyles from './styles2';

const ProductFormCreate = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    nameProduct: Yup.string().required('Product name is required'),
    sdescriptionProduct: Yup.string().required('Product short description is required'),
    descriptionProduct: Yup.string().required('Product description is required'),
    priceProduct: Yup.string().required('Product price is required'),
    brandProduct: Yup.string().required('Product brand is required'),
    quantityProduct: Yup.string().required('Product quantity is required'),
    categoryProduct: Yup.string().required('Product category is required'),
    counterProduct: Yup.string().required('Product counter is required'),
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
            <h2>Create new Product</h2>
          </Grid>
          <TextField
            id="nameProduct"
            name="nameProduct"
            label='Product name'
            placeholder='Enter product name'
            margin="dense"
            {...register('nameProduct')}
            error={errors.nameProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.nameProduct?.message}
          </Typography>
          <TextField
            id="sdescriptionProduct"
            name="sdescriptionProduct"
            label='Product short description'
            placeholder='Enter product short description'
            margin="dense"
            {...register('sdescriptionProduct')}
            error={errors.sdescriptionProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.sdescriptionProduct?.message}
          </Typography>
          <TextField
            id="descriptionProduct"
            name="descriptionProduct"
            label='Product description'
            placeholder='Enter product description'
            margin="dense"
            {...register('descriptionProduct')}
            error={errors.descriptionProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.descriptionProduct?.message}
          </Typography>
          <TextField
            id="priceProduct"
            name="priceProduct"
            label='Product price'
            placeholder='Enter product price'
            margin="dense"
            {...register('priceProduct')}
            error={errors.priceProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.priceProduct?.message}
          </Typography>
          <TextField
            id="brandProduct"
            name="brandProduct"
            label='Product brand'
            placeholder='Enter product brand'
            margin="dense"
            {...register('brandProduct')}
            error={errors.brandProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.brandProduct?.message}
          </Typography>
          <TextField
            id="quantityProduct"
            name="quantityProduct"
            label='Product quantity'
            placeholder='Enter product quantity'
            margin="dense"
            {...register('quantityProduct')}
            error={errors.quantityProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.quantityProduct?.message}
          </Typography>
          <TextField
            id="categoryProduct"
            name="categoryProduct"
            label='Product category'
            placeholder='Enter product category'
            margin="dense"
            {...register('categoryProduct')}
            error={errors.categoryProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.categoryProduct?.message}
          </Typography>
          <TextField
            id="counterProduct"
            name="counterProduct"
            label='Product counter'
            placeholder='Enter product counter'
            margin="dense"
            {...register('counterProduct')}
            error={errors.counterProduct ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.counterProduct?.message}
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

export default ProductFormCreate;