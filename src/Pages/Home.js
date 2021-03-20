import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import LoginComponent from "../Components/LoginComponent";

function Home({ details, setDetails, personal, setPersonal }) {
  return (
    <LoginPage>
      <LoginComponent
        details={details}
        setDetails={setDetails}
        personal={personal}
        setPersonal={setPersonal}
      />
    </LoginPage>
  );
}

const LoginPage = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #eff7f9; */
  min-height: 100vh;
`;

export default Home;
