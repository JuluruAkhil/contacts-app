import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContactsComponent from "../Components/ContactsComponent";

import NavComponent, { navAnimation } from "../Components/NavComponent";

function Contacts({ details, setDetails, personal, setPersonal }) {
  return (
    <ContactsPage>
      <NavComponent setDetails={setDetails} personal={personal} />
      <motion.div
        variants={navAnimation}
        initial="hidden"
        animate="show"
        className="white"
      ></motion.div>
      <ContactsComponent details={details} setDetails={setDetails} />
    </ContactsPage>
  );
}

const ContactsPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #fbfdfe;
  .white {
    position: fixed;
    top: 10vh;
    width: 100vw;
    height: 100px;
    background-color: #fbfdfe;
  }
`;

export default Contacts;
