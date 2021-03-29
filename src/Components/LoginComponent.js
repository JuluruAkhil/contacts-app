import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import googleLogo from '../assets/google-logo.png';

function LoginComponent({
  details,
  setDetails,
  personal,
  setPersonal,
  toast,
  setToast,
}) {
  const history = useHistory();
  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('code');
    if (foo !== null) {
      responseGoogle(foo);
      setToast('success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginAnimation = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
  };

  const responseGoogle = (code) => {
    console.log(code);
    axios
      .get(`http://142.93.220.167:8000/callback?code=${code}`)
      .then((res) => {
        console.log(res.data);

        if (res.data.contacts.length > 1) {
          setDetails(res.data.contacts);
          localStorage.setItem('details', JSON.stringify(res.data.contacts));
          setPersonal(res.data.personal);
          localStorage.setItem('personal', JSON.stringify(res.data.personal));
        } else {
          history.push('/');
          setDetails(undefined);
          setPersonal(undefined);
          setToast('warning');
          localStorage.removeItem('details');
          localStorage.removeItem('personal');
        }
      });
  };

  return (
    <>
      {toast === 'hidden' ? (
        <LoginComp variants={loginAnimation} initial="hidden" animate="show">
          <StyledButton href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts.readonly%20email%20profile&response_type=code&client_id=652050846854-i6vm9mivl8uva574pbr7sps4q5fd3fg6.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5500%2F">
            <img src={googleLogo} alt="google" />
            <div>Sign In</div>
          </StyledButton>
        </LoginComp>
      ) : (
        ''
      )}
    </>
  );
}

const LoginComp = styled(motion.div)`
  background-color: white;
  max-height: 60vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    width: 80vw;
  }
`;

const StyledButton = styled(motion.a)`
  text-decoration: none;
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
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export default LoginComponent;
