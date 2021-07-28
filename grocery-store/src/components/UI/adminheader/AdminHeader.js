import React from 'react'
import { useLocation } from 'react-router-dom';

import { AppBar, Toolbar, Grid, InputBase, IconButton } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const AdminHeader = () => {

  const classes = useStyles();

  const location = useLocation();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container
          alignItems="center">
          {location.pathname === '/admin' && (
            <Grid item>
              <InputBase
                placeholder="Search topics"
                className={classes.searchInput}
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
          )}
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;