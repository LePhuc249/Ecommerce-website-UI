import React, { Fragment } from 'react'

import { Button } from '@material-ui/core';

import useStyles from './styles';

const Admin = () => {

  const classes = useStyles();

  return (
    <Fragment>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/account">
        Account Manager
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/brand">
        Brand Manager
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/category">
        Category Manager
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/coupons">
        Coupons Manager
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/organization">
        Organization Manager
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/organizationaddress">
        Organization Address Manager
      </Button>
      <Button className={classes.AddButton} variant="contained" color="primary" href="/admin/product">
        Product Manager
      </Button>
    </Fragment>
  );
}

export default Admin;