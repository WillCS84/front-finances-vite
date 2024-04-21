import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

--default-text: #333;
--default-bg: #f5f5f5;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--default-bg);
  font-size: 14px;
  color: var(--default-text);
  font-family: sans-serif;
}
`;
