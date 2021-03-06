import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContactsTableComponent from "./ContactsTableComponent";

const contactsAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ContactsComponent({ details, setDetails }) {
  return (
    <ContactsComp>
      <ContactsCont
        variants={contactsAnimation}
        initial="hidden"
        animate="show"
      >
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
  z-index: 5;
`;

const ContactsCont = styled(motion.div)`
  height: 85vh;
  width: 70%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const TitleCont = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  color: #053ed1;
  .title {
    font-weight: 600;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.08em;
  }
  .noContacts {
    font-size: 16px;
    line-height: 24px;
    margin-left: 10px;
  }
  margin-bottom: 15px;
  margin-left: 15px;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export default ContactsComponent;
