import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Poppins', sans-serif;
}

.App {
  background-size: 100%;
  overflow: hidden;
}

h2 h3 p {
  margin: 0;
  padding: 0;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #053ED1 #F4F7FF;
}


*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: #F4F7FF;
}

*::-webkit-scrollbar-thumb {
  background-color: #053ED1;
  border-radius: 4px;
  border: transparent;
}
html, body { margin:0; padding:0; overflow:hidden }
`;

export default GlobalStyle;
