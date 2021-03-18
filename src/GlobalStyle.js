import { createGlobalStyle } from "styled-components";
import background from "./assets/Background.png";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Poppins', sans-serif;
}

.App {
  background-image: url(${background});
  background-size: 100%;
}

h2 h3 p {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
