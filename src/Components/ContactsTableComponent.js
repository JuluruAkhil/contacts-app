import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ContactCardComponent from './ContactCardComponent';

function ContactsTableComponent({ details }) {
  return (
    <ContactsTableCont>
      <div className="headings">
        <div id="name">NAME</div>
        <div id="email">EMAIL</div>
        <div id="phone">PHONE NUMBER</div>
      </div>
      <div className="scroll">
        {details &&
          details.map((connection, key) => {
            return <ContactCardComponent key={key} connection={connection} />;
          })}
      </div>
    </ContactsTableCont>
  );
}

const ContactsTableCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .headings {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #b0c6ff;
    #name {
      width: 28vw;
      padding-left: 60px;
    }
    #email {
      width: 27vw;
    }
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
  .scroll {
    padding-right: 12px;
    padding-top: 10px;
    padding-left: 12px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export default ContactsTableComponent;
