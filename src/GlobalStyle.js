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
  overflow: hidden;
}

h2 h3 p {
  margin: 0;
  padding: 0;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transperent;
}

*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: #F4F7FF;
}

*::-webkit-scrollbar-thumb {
  background-color: #053ED1;;
  border-radius: 4px;
  border: transparent;
}
`;

export default GlobalStyle;
