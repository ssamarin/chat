import React from 'react';

import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';

const Navbar = () => {
  const user = true;
  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant={"dense"}>
        <Grid container justifyContent={"flex-end"}>
          {user ?
                <Button style={{ color: '#000' }} variant={"outlined"}>Выйти</Button>
                :
                <NavLink to={LOGIN_ROUTE}>
                  <Button style={{ color: '#000' }} variant={"outlined"}>Логин</Button>
                </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
