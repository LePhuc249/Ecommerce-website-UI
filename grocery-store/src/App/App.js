import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { Navbar, LoadingSpinner, Products, Cart, LoginForm, RegisterForm, ForgotPassword } from '../components';
import { BrandFormCreate, BrandFormUpdate } from '../components';
import { CouponsFormCreate, CouponsFormUpdate } from '../components';
import { CategoryFormCreate, CategoryFormUpdate } from '../components';
import { ProductFormCreate, ProductFormUpdate } from '../components';
import { OrganizationFormCreate, OrganizationFormUpdate } from '../components';
import { OrganizationAddressFormCreate, OrganizationAddressFormUpdate } from '../components';
import NotFound from '../pages/NotFound';
import { history } from "../helpers/history";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const cart = [
  {
    total_items: 3,
    line_items:
      [
        { id: '1', name: 'Macbook', media: 'https://cdn.tgdd.vn/Products/Images/44/231250/grey-1-org.jpg', line_total: '2000', quantity: 1 },
        { id: '2', name: 'Iphone 12', media: 'https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-den-1-org.jpg', line_total: '900', quantity: 1 },
        { id: '3', name: 'Iphone 12 Pro', media: 'https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-xanh-duong-1-org.jpg', line_total: '1200', quantity: 1 }
      ],
    subtotal: 4100
  }
];

function App() {

  // const [cart, setCart] = useState({});

  return (
    <Router history={history}>
      <div style={{ display: 'flex' }}>
        <ThemeProvider theme={theme}>
          <Navbar totalItems={cart.total_items} />
          <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
            <Switch>
              <Route path='/' exact>
                <Redirect to='/home' />
              </Route>
              <Route path='/home' exact>
                <Products />
              </Route>
              <Route path='/home/cart' >
                <Cart cart={cart} />
              </Route>
              <Route path='/home/login' >
                <LoginForm />
              </Route>
              <Route path='/home/register'>
                <RegisterForm />
              </Route>
              <Route path='/home/forgotpassword'>
                <ForgotPassword />
              </Route>
              <Route path='/admin' exact></Route>
              <Route path='/admin/account' exact></Route>
              <Route path='/admin/brand' exact></Route>
              <Route path='/admin/brand/create' exact>
                <BrandFormCreate />
              </Route>
              <Route path='/admin/brand/update' exact>
                <BrandFormUpdate />
              </Route>
              <Route path='/admin/category' exact></Route>
              <Route path='/admin/category/create' exact>
                <CategoryFormCreate />
              </Route>
              <Route path='/admin/category/update' exact>
                <CategoryFormUpdate />
              </Route>
              <Route path='/admin/coupons' exact></Route>
              <Route path='/admin/coupons/create' exact>
                <CouponsFormCreate />
              </Route>
              <Route path='/admin/coupons/update' exact>
                <CouponsFormUpdate />
              </Route>
              <Route path='/admin/organization' exact></Route>
              <Route path='/admin/organization/create' exact>
                <OrganizationFormCreate />
              </Route>
              <Route path='/admin/organization/update' exact>
                <OrganizationFormUpdate />
              </Route>
              <Route path='/admin/organizationaddress' exact></Route>
              <Route path='/admin/organizationaddress/create' exact>
                <OrganizationAddressFormCreate />
              </Route>
              <Route path='/admin/organizationaddress/update' exact>
                <OrganizationAddressFormUpdate />
              </Route>
              <Route path='/admin/product' exact></Route>
              <Route path='/admin/product/create' exact>
                <ProductFormCreate />
              </Route>
              <Route path='/admin/product/update' exact>
                <ProductFormUpdate />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
          <CssBaseline />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
