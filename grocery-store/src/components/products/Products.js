import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'Macbook', price: '2000', media: 'https://cdn.tgdd.vn/Products/Images/44/231250/grey-1-org.jpg', description: 'Macbook M1' },
  { id: 2, name: 'Iphone 6', price: '300', media: 'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-up-1-org.jpg', description: 'Iphone 6' },
  { id: 3, name: 'Iphone 7', price: '400', media: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-vangdong-1-5-org.jpg', description: 'Iphone 7' },
  { id: 4, name: 'Iphone 8', price: '500', media: 'https://cdn.tgdd.vn/Products/Images/42/114112/iphone-8-256gb-1-1-org.jpg', description: 'Iphone 8' },
  { id: 5, name: 'Iphone X', price: '700', media: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-mau-den-1-4-org.jpg', description: 'Iphone X' },
  { id: 6, name: 'Iphone Xs', price: '800', media: 'https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-vang-1-1-org.jpg', description: 'Iphone Xs' },
  { id: 7, name: 'Iphone 11', price: '900', media: 'https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-den-1-1-org.jpg', description: 'Iphone 11' },
  { id: 8, name: 'Iphone 12', price: '1000', media: 'https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-den-1-org.jpg', description: 'Iphone 12' },
  { id: 9, name: 'Iphone 12 Pro', price: '1200', media: 'https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-xanh-duong-1-org.jpg', description: 'Iphone 12 Pro' }
];

const Products = () => {

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;