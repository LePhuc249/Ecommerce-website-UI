import React, { Fragment, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact>
              <Home />
            </Route>
            <Route path='/login' >
              <Login />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
