import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const navAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
    <Nav variants={navAnimation} initial="hidden" animate="show">
      <svg
        className="photo-svg"
        width="197"
        height="78"
        viewBox="0 0 197 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          d="M179.968 -45.7106C199.956 -3.09177 217.394 82.0419 131.931 122.123C89.3579 142.089 0.937119 99 0.937352 60.7641C0.937352 32.9115 13.3891 32.4124 55.9619 12.4464C98.5348 -7.51964 159.98 -88.3295 179.968 -45.7106Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-7.97052"
            y1="19.3265"
            x2="172.153"
            y2="-64.0925"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#097AFF" />
            <stop offset="1" stop-color="#0041E8" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="logout-svg"
        width="201"
        height="78"
        viewBox="0 0 201 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          d="M199.949 -45.7106C219.937 -3.09177 237.376 82.0419 151.912 122.123C109.339 142.089 20.9183 99 20.9186 60.7641C20.9186 32.9115 33.3703 32.4124 75.9431 12.4464C118.516 -7.51964 179.962 -88.3295 199.949 -45.7106Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.0107"
            y1="19.3265"
            x2="192.134"
            y2="-64.0925"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#097AFF" />
            <stop offset="1" stop-color="#0041E8" />
          </linearGradient>
        </defs>
      </svg>

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
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(90.21deg, #053ed1 0%, #0f4eac 100%);
  .photo-svg {
    position: fixed;
    z-index: 0;
  }
  .logout-svg {
    position: absolute;
    width: 209.95px;
    height: 152.48px;
    right: -5vw;
    top: -5vw;
    z-index: 0;
    @media screen and (max-width: 480px) {
      display: none;
    }
  }
  .logout {
    margin-right: 20px;
    width: 40px;
    border-radius: 50%;
    svg {
      transform: translateX(3px) translateY(3px);
    }
    &:hover {
      background-color: black;
    }
    transition: all 0.5s;
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
  @media screen and (max-width: 480px) {
    padding-left: 24px;
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
  z-index: 3;
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
