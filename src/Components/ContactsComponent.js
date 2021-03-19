import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContactsTableComponent from "./ContactsTableComponent";

function ContactsComponent({ details, setDetails }) {
  return (
    <ContactsComp>
      <ContactsCont>
        <TitleCont>
          <div className="title">Contacts</div>
          <div className="noContacts">({details.totalItems})</div>
        </TitleCont>
        <ContactsTableComponent details={details} />
      </ContactsCont>
    </ContactsComp>
  );
}

const ContactsComp = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ContactsCont = styled(motion.div)`
  height: 80vh;
  width: 70%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
`;

const TitleCont = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  color: #053ed1;
  .title {
    font-weight: 600;
    font-size: 26px;
    line-height: 30px;
  }
  .noContacts {
    font-size: 16px;
    line-height: 24px;
    margin-left: 10px;
  }
`;

export default ContactsComponent;
