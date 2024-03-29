import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} />
    <App />
  </React.StrictMode>
);
export const server = `https://api.coingecko.com/api/v3`;
export const server_coin = `https://api.coingecko.com/api/v3/coins`;
// export const server = `https://api.coingecko.com/api/v3/coins/list?include_platform=true`;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
