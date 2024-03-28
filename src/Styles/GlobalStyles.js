import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-900: rgb(74, 109, 255);
      --color-primary-800: rgb(92, 124, 255);
      --color-primary-700: rgb(110, 138, 255);
      --color-primary-600: rgb(128, 153, 255);
      --color-primary-500: rgb(146, 167, 255);
      --color-primary-400: rgb(164, 182, 255);
      --color-primary-300: rgb(183, 197, 255);
      --color-primary-200: rgb(201, 211, 255);
      --color-primary-100:rgb(219, 226, 255);
      --color-primary-50: rgb(228, 233, 255);

      --border-radius-tiny: 3px;
      --border-radius-sm: 5px;
      --border-radius-md: 7px;
      --border-radius-lg: 9px;

      --color-success: rgb(0 , 192 , 115);
      --color-warning: rgb(255 , 153 , 0);
      --color-error: rgb(255,71 , 87);
      --color-red-500: rgb(239, 68 , 68);
      --color-red-300: rgb(252, 165 , 165);
}
html{
  font-size: 62.5%; // 10px
}
button {
  cursor: pointer;
}
a{
  text-decoration: none;
}
`
export default GlobalStyle 
