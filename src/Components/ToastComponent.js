import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function ToastComponent({ children }) {
  return <Toast>{children}</Toast>;
}

const Toast = styled(motion.div)`
  position: absolute;
  top: 5%;

  .alert {
    width: 30vw;
    margin: 20px auto;
    padding: 30px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
    @media screen and (max-width: 480px) {
      width: 80vw;
    }
  }

  .success-alert {
    $accentColor: darken(#a8f0c6, 50);
    background-color: hsl(145, 71%, 80%);
    border-left: 5px solid hsl(145, 71%, 30%);
  }

  .warning-alert {
    $accentColor: darken(#a8f0c6, 50);
    background-color: hsl(38, 100%, 77%);
    border-left: 5px solid hsl(38, 100%, 27%);
  }
`;

export default ToastComponent;
