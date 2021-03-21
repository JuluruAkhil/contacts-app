import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import LoginComponent from "../Components/LoginComponent";
import ToastComponent from "../Components/ToastComponent";

function Home({ details, setDetails, personal, setPersonal }) {
  const [toast, setToast] = useState("hidden");
  const toastComp = useRef(null);

  useEffect(() => {
    if (toast === "warning") {
      toastComp.current.className = "alert warning-alert";
      toastComp.current.textContent =
        "Please Login with an account having contacts.";
      toastComp.current.style = { display: "block" };
      setTimeout(() => {
        toastComp.current.style = { display: "none" };
        setToast("hidden");
      }, 5000);
    } else if (toast === "success") {
      toastComp.current.className = "alert success-alert";
      toastComp.current.textContent = "Logged In. Loading...";
      toastComp.current.style = { display: "block" };
      setTimeout(() => {
        toastComp.current.style = { display: "none" };
        setToast("hidden");
      }, 5000);
    }
  }, [toast]);

  return (
    <LoginPage>
      {toast !== "hidden" && (
        <ToastComponent>
          <h3 className="" ref={toastComp} style={{ display: "none" }}>
            h
          </h3>
        </ToastComponent>
      )}
      <LoginComponent
        details={details}
        setDetails={setDetails}
        personal={personal}
        setPersonal={setPersonal}
        toast={toast}
        setToast={setToast}
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
