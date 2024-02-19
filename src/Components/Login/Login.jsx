import { Container, Grid, Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';

import { Context } from '../../';

const Login = () => {
  const {auth} = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid container
            style={{height: window.innerHeight - 50}}
            alignItems={"center"}
            justifyContent={"center"}
      >
        <Grid style={{width: 400, background: 'lightgray'}}
              container
              alignItems={"center"}
              justifyContent={"center"}>
          <Box p={5}>
            <Button onClick={login} variant={"outlined"} style={{ color: '#000' }} text>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
