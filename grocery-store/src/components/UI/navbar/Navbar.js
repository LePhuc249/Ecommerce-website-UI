import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import logo from '../../../assets/Logo.png';

import Admin from '../../admin/Admin';
import Account from '../../account/Account';
import SideMenu from '../sidemenu/SideMenu';
import BrandView from '../../brand/BrandView';
import CouponsView from '../../coupons/CouponsView';
import AdminHeader from '../adminheader/AdminHeader';
import CategoryView from '../../category/CategoryView';
import ProductView from '../../products/product/ProductView';
import OrganizationView from '../../organization/OrganizationView';
import OrganizationAddressView from '../../organization/organizationaddress/OrganizationAddressView';


import useStyles from './styles';

const Navbar = ({ totalItems }) => {

  const classes = useStyles();

  const location = useLocation();

  return (
    <>
      {location.pathname.indexOf('home') > -1 && (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
              <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
            </Typography>
            <div className={classes.grow} />
            {location.pathname === '/home' && (
              <div className={classes.button}>
                <IconButton component={Link} to="/home/cart" aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
            {location.pathname === '/home' && (
              <div className={classes.button}>
                <IconButton component={Link} to="/home/login" aria-label="Login page" color="inherit">
                  <Badge color="secondary">
                    <PowerSettingsNewIcon />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      )}
      {location.pathname.indexOf('admin') > -1 && (
        <>
          <SideMenu />
          {location.pathname === '/admin' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin' && (
                <Admin />
              )}
            </div>
          )}
          {location.pathname === '/admin/account' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/account' && (
                <Account />
              )}
            </div>
          )}
          {location.pathname === '/admin/brand' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/brand' && (
                <BrandView />
              )}
            </div>
          )}
          {location.pathname === '/admin/category' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/category' && (
                <CategoryView />
              )}
            </div>
          )}
          {location.pathname === '/admin/coupons' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/coupons' && (
                <CouponsView />
              )}
            </div>
          )}
          {location.pathname === '/admin/organization' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/organization' && (
                <OrganizationView />
              )}
            </div>
          )}
          {location.pathname === '/admin/organizationaddress' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/organizationaddress' && (
                <OrganizationAddressView />
              )}
            </div>
          )}
          {location.pathname === '/admin/product' && (
            <div className={classes.appMain}>
              <AdminHeader />
              {location.pathname === '/admin/product' && (
                <ProductView />
              )}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Navbar;