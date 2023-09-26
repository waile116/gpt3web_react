import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
  return (
    <ul className="gpt3__brand section__padding">
      <li>
        <img src={google} alt="google" />
      </li>
      <li>
        <img src={slack} alt="slack" />
      </li>
      <li>
        <img src={atlassian} alt="atlassian" />
      </li>
      <li>
        <img src={dropbox} alt="dropbox" />
      </li>
      <li>
        <img src={shopify} alt="shopify" />
      </li>
    </ul>
  );
};

export default Brand;
