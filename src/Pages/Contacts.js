import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContactsComponent from "../Components/ContactsComponent";

import NavComponent from "../Components/NavComponent";

function Contacts({ details, setDetails }) {
  return (
    <ContactsPage>
      <NavComponent setDetails={setDetails} />
      <ContactsComponent details={details} setDetails={setDetails} />
    </ContactsPage>
  );
}

const ContactsPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export default Contacts;
