import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function ContactCardComponent({ connection }) {
  const randomColour = () => {
    const colors = [
      "#FF0000",
      "#FAFF00",
      "#0075FF",
      "#9E00FF",
      "#FF00A8",
      "#FF9900",
      "#001AFF",
    ];
    return colors[Math.floor(Math.random() * (colors.length - 1))];
  };

  return (
    <ContactCardCont>
      <div className="name-img">
        <img
          src={connection.photo ? connection.photo : ""}
          alt="Profile Pic"
          style={{ borderColor: randomColour() }}
        />
        {/* <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.11784 0.268746L9.10684 4.24575L12.9328 4.62875C13.1192 4.64699 13.2782 4.77105 13.3413 4.9473C13.4044 5.12356 13.3602 5.32039 13.2278 5.45275L10.0748 8.60475L11.2438 12.8877C11.2937 13.072 11.2308 13.2684 11.0832 13.3894C10.9356 13.5105 10.7308 13.5337 10.5598 13.4487L6.68484 11.5107L2.80984 13.4507C2.639 13.5361 2.43397 13.5129 2.28641 13.3917C2.13885 13.2705 2.07634 13.0739 2.12684 12.8897L3.29484 8.60475L0.141839 5.45075C0.00943774 5.3184 -0.0347645 5.12156 0.0283358 4.9453C0.0914362 4.76905 0.250522 4.64499 0.436839 4.62675L4.26284 4.24375L6.25184 0.266746C6.33416 0.102856 6.50205 -0.000422269 6.68546 1.2979e-06C6.86886 0.000424865 7.03627 0.104478 7.11784 0.268746Z"
            fill="#FFD600"
          />
        </svg> */}
        <div>{connection.name}</div>
      </div>
      <div className="email">
        {connection.emailAddress ? connection.emailAddress : ""}
      </div>
      <div className="phone">
        {connection.phoneNumber ? connection.phoneNumber : ""}
      </div>
    </ContactCardCont>
  );
}

const ContactCardCont = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(5, 62, 209, 0.14);
  border-radius: 8px;
  z-index: 0;
  .name-img {
    display: flex;
    width: 40vw;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      left: 78px;
      top: 30px;
      z-index: 1;
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      margin: 10px;
      margin-left: 46px;
      border: 1px solid;
      z-index: 2;
    }
  }
  .email {
    width: 40vw;
  }
  .phone {
    width: 20vw;
  }
  &:hover {
    background: #ffffff;
    border: 1px solid #4eb4ff;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
    border-radius: 8px;
  }
  margin-bottom: 10px;
`;

export default ContactCardComponent;
