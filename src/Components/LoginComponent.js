import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import googleLogo from "../assets/google-logo.png";

function LoginComponent({ details, setDetails, personal, setPersonal }) {
  function listConnectionNames() {
    window.gapi.client.people.people.connections
      .list({
        resourceName: "people/me",
        pageSize: 500,
        personFields: "names,emailAddresses,coverPhotos,phoneNumbers,photos",
      })
      .then(function (response) {
        let result = response.result;
        setDetails(result);
      });
  }

  const userDetails = () => {
    console.log(1111111111);
    let profile = window.gapi.auth2.getAuthInstance().currentUser.get();
    setPersonal({
      name: profile.Hs.sd,
      email: profile.Hs.nt,
      photo: profile.Hs.jI,
    });
  };

  const login = () => {
    window.gapi.client
      .init({
        apikey: "AIzaSyBwqL8NaarxDj6ruvpEkekejX4jQmBQgc0",
        clientId:
          "1058139453928-21lt7pcenia6gl7eev3cb2ffl05v32un.apps.googleusercontent.com",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/people/v1/rest",
        ],
        scope: "https://www.googleapis.com/auth/contacts.readonly",
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            listConnectionNames();
            userDetails();
          });
      });
  };

  return (
    <LoginComp>
      <StyledButton onClick={login}>
        <img src={googleLogo} alt="google" />
        <div>Sign In</div>
      </StyledButton>
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

const StyledButton = styled(motion.button)`
  background-color: #0a45c2;
  outline: none;
  border: none;
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
