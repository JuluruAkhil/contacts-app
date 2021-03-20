import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// import _ from "lodash";
import ContactCardComponent from "./ContactCardComponent";

function ContactsTableComponent({ details }) {
  const [parsedDetails, setParsedDetails] = useState(null);

  useEffect(() => {
    if (details !== null) {
      const connections = details.connections;
      console.log(details);
      let newDetails = [];
      connections.forEach((connection) => {
        let newConnection = {};
        if (connection.names) {
          newConnection.name = connection.names[0].displayName;
        }
        if (connection.phoneNumbers) {
          if (connection.phoneNumbers[0].value.split(" ").join("")[0] === "+") {
            newConnection.phoneNumber = connection.phoneNumbers[0].value
              .split(" ")
              .join("")
              .substring(3);
          } else {
            newConnection.phoneNumber = connection.phoneNumbers[0].value
              .split(" ")
              .join("");
          }
        }
        if (connection.photos) {
          newConnection.photo = connection.photos[0].url;
        }
        if (connection.emailAddresses) {
          newConnection.emailAddress = connection.emailAddresses[0].value;
        }
        newDetails.push(newConnection);
      });
      setParsedDetails(newDetails);
    }
  }, [details, details.connections]);

  return (
    <ContactsTableCont>
      <div className="headings">
        <div id="name">NAME</div>
        <div id="email">EMAIL</div>
        <div id="phone">PHONE NUMBER</div>
      </div>
      <div className="scroll">
        {parsedDetails &&
          parsedDetails.map((connection, key) => {
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
    #phonw {
      width: 20vw;
    }
  }
  .scroll {
    padding-right: 12px;
    padding-top: 10px;
    padding-left: 12px;
    overflow-y: scroll;
  }
`;

export default ContactsTableComponent;
