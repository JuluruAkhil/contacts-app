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
        console.log(result);
        if (result.connections === undefined) {
          console.log("hello");
        } else {
          setDetails(result);
        }
      });
  }

  const userDetails = () => {
    console.log(1111111111);
    let profile = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getBasicProfile();
    setPersonal({
      name: profile.getName(),
      email: profile.getEmail(),
      photo: profile.getImageUrl(),
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

  const loginAnimation = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <LoginComp variants={loginAnimation} initial="hidden" animate="show">
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
  padding: 10px;
  cursor: pointer;
  img {
    width: 28px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 15px;
  }
  &:hover {
    background-color: black;
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.7);
  }
  transition: all 0.5s;
`;

export default LoginComponent;
