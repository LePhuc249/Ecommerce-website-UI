import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import useStyles from './styles';

const CouponsFormCreate = () => {

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    code: Yup.string().required('Coupons code is required'),
    discountAmount: Yup.number().required('Coupons discount amount is required'),
    productDiscount: Yup.string().required('Coupons product discount is required'),
    description: Yup.string().required('Coupons discription is required'),
    expirationDate: Yup.string().required('Coupons expiration date is required'),
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
            <h2>Create new Coupon</h2>
          </Grid>
          <TextField
            id="code"
            name="code"
            label='Coupon Code'
            placeholder='Enter coupon code'
            margin="dense"
            {...register('code')}
            error={errors.code ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.code?.message}
          </Typography>
          <TextField
            id="discountAmount"
            name="discountAmount"
            label='Discount amount'
            placeholder='Enter discount amount'
            margin="dense"
            {...register('discountAmount')}
            error={errors.discountAmount ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.discountAmount?.message}
          </Typography>
          <TextField
            id="productDiscount"
            name="productDiscount"
            label='Product discount'
            placeholder='Enter product discount'
            margin="dense"
            {...register('productDiscount')}
            error={errors.productDiscount ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.productDiscount?.message}
          </Typography>
          <TextField
            id="description"
            name="description"
            label='Description'
            placeholder='Enter description'
            margin="dense"
            {...register('description')}
            error={errors.description ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.description?.message}
          </Typography>
          <TextField
            id="expirationDate"
            name="expirationDate"
            label='Expiration date'
            placeholder='Enter expiration date'
            margin="dense"
            {...register('expirationDate')}
            error={errors.expirationDate ? true : false}
            fullWidth
            required
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.expirationDate?.message}
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

export default CouponsFormCreate;