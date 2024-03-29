import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Button } from '@mui/material';

import { LOGIN_ROUTE } from '../../utils/consts';
import { Context } from '../..';

const Navbar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant={"dense"}>
        <Grid container justifyContent={"flex-end"}>
          {user ?
                <Button onClick={() => auth.signOut()} style={{ color: '#000' }} variant={"outlined"}>Выйти</Button>
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
