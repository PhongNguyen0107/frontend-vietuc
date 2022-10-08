import React from "react";
import styled from "styled-components"
import SlackLogo from "shared/assets/images/logo-slack.png"
import {Button} from "@mui/material";
import {auth, provider} from "config/firebase";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Redirect, useHistory} from "react-router-dom";
import {ROUTE_NAME} from "routes/router.constant";
import {useAuthState} from "react-firebase-hooks/auth";


const LoginPage = (props) => {
  const history = useHistory();
  const [user] = useAuthState(auth);

  // refs: https://firebase.google.com/docs/auth/web/google-signin
  const onSignInWithGGAccount = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('log::19 signInWithPopup user', user, token)
        if(user && token) history.push(ROUTE_NAME.HOME)
      }).catch((error) => {
      // Handle Errors here.
      console.log('log::22 signInWithPopup: error case: ', error)
    });
  }

  if(user) return <Redirect to={ROUTE_NAME.HOME}/>

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={SlackLogo} alt="Slack Logo"/>
        <h1>Sign in</h1>
        {/*refs: https://mui.com/material-ui/react-button/*/}
        <Button onClick={onSignInWithGGAccount}>Sign in with google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};
export default LoginPage;

const LoginContainer = styled.div`
  background-color: #fafafa;
  height: 100vh;
  display: grid;
`

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  
  > button {
    background: green;
    color: white;
  }
`