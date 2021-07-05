import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          Grocery Store
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to='/home' activeClassName={classes.active}>View Cart</NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName={classes.active}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainNavigation;