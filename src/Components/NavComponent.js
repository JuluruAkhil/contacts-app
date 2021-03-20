import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import testPerson from "../assets/test_person_image.jpeg";

function NavComponent({ setDetails, personal }) {
  const logout = () => {
    window.gapi.client
      .init({
        apikey: "AIzaSyBwqL8NaarxDj6ruvpEkekejX4jQmBQgc0",
        clientId:
          "1058139453928-21lt7pcenia6gl7eev3cb2ffl05v32un.apps.googleusercontent.com",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/people/v1/rest",
        ],
        scope: "https://www.googleapis.com/auth/contacts.readonly",
      })
      .then(() => {
        window.gapi.auth2
          .getAuthInstance()
          .signOut()
          .then(() => {
            setDetails(null);
          });
      });
  };

  return (
    <Nav>
      <User>
        <Photo>
          <img src={personal.photo} alt="profile" />
        </Photo>

        <Details>
          <h2>{personal.name}</h2>
          <p>{personal.email}</p>
        </Details>
      </User>
      <div className="logout" onClick={logout}>
        <svg
          width="34"
          height="32"
          viewBox="0 0 34 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 15.9377H23.4052"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.0674 21.2723L23.402 15.9378L18.0674 10.6032"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.63275 22.4757C7.65476 28.684 14.5381 32.0118 21.2807 30.5244C28.0233 29.0369 32.8676 23.1219 32.9971 16.2184C33.1266 9.31496 28.5075 3.22243 21.8255 1.48315C15.1434 -0.256124 8.14011 2.81121 4.88739 8.90174"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.div)`
  /* position: fixed;
  width: 100vw;
  height: 78px;
  left: 0px;
  top: 0px; */
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(90.21deg, #053ed1 0%, #0f4eac 100%);

  svg {
    margin-right: 20px;
  }
`;

const User = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-left: 52px;
  padding-right: 12px;
  padding-bottom: 12px;
  div {
    img {
      width: 54px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #ffffff;
    }
  }
`;

const Photo = styled(motion.div)`
  img {
    transform: translateX(1px) translateY(1px);
    width: 54px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #ffffff;
  }
  width: 58px;
  height: 58px;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;

const Details = styled(motion.div)`
  padding-left: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.08em;

    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.08em;

    color: #ffffff;
  }
`;

export default NavComponent;
