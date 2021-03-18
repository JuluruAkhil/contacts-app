import React from "react";
import GoogleLogin from "react-google-login";
import { motion } from "framer-motion";
import styled from "styled-components";

import googleLogo from "../assets/google-logo.png";

function LoginComponent() {
  const responseGoogle = (res) => {
    console.log(res);
  };

  return (
    <LoginComp>
      <GoogleLogin
        render={() => (
          <StyledButton>
            <img src={googleLogo} alt="google" />
            <div>Sign In</div>
          </StyledButton>
        )}
        clientId="1019792659480-v1lvsoqi495r5u4qclg70eothoorob5h.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        scope="https://www.googleapis.com/auth/contacts.readonly email profile"
      />
    </LoginComp>
  );
}

const LoginComp = styled(motion.div)`
  background-color: white;
  height: 60vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
  border-radius: 10px;
`;

const StyledButton = styled(motion.div)`
  background-color: #0a45c2;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  margin: 40px;
  width: 50%;
  text-align: center;
  padding: 15px;
  img {
    width: 32px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 30px;
  }
`;

export default LoginComponent;
