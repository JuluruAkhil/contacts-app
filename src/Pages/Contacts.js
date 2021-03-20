import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContactsComponent from "../Components/ContactsComponent";

import NavComponent from "../Components/NavComponent";

function Contacts({ details, setDetails, personal, setPersonal }) {
  return (
    <ContactsPage>
      <NavComponent setDetails={setDetails} personal={personal} />
      <ContactsComponent details={details} setDetails={setDetails} />
    </ContactsPage>
  );
}

const ContactsPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #fbfdfe;
`;

export default Contacts;
