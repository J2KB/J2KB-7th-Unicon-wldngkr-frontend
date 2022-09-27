import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import Layout from "@components/Auth/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Layout>
        <App />
      </Layout>
    </RecoilRoot>
  </React.StrictMode>,
);
