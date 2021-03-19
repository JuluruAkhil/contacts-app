import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// import _ from "lodash";
import ContactCardComponent from "./ContactCardComponent";

function ContactsTableComponent({ details }) {
  const [parsedDetails, setParsedDetails] = useState(null);

  useEffect(() => {
    const connections = details.connections;
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
  }, [details.connections]);

  return (
    <ContactsTableCont>
      <div className="headings">
        <div id="name">Name</div>
        <div>Email</div>
        <div>PhoneNo</div>
      </div>
      {console.log(parsedDetails)}
      {console.log(details)}
      <div className="scroll">
        {parsedDetails &&
          parsedDetails.map((connection) => {
            return (
              <ContactCardComponent
                key={connection.name}
                connection={connection}
              />
            );
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
    justify-content: space-between;
    align-items: flex-start;
    color: #b0c6ff;
    div {
      flex-grow: 1;
    }
    #name {
      margin: 10px;
      margin-left: 46px;
    }
  }
  .scroll {
    padding-right: 12px;
    overflow-y: scroll;
  }
`;

export default ContactsTableComponent;
