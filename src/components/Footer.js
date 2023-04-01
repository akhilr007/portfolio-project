import React from "react";
import { LinkedIn, Twitter, Email, GitHub } from "@mui/icons-material";
import "../styles/Footer.css";
import { IconButton } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton
          aria-label="www.linkedin.com"
          onClick={() =>
            window.open("https://www.linkedin.com/in/rajan-akhil/", "__blank")
          }
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          aria-label="www.twitter.com"
          onClick={() =>
            window.open("https://twitter.com/__AKHIL__07", "__blank")
          }
        >
          <Twitter />
        </IconButton>
        <IconButton
          aria-label="www.github.com"
          onClick={() => window.open("https://github.com/akhilr007", "__blank")}
        >
          <GitHub />
        </IconButton>
        <IconButton
          aria-label="www.gmail.com"
          onClick={() =>
            window.open("mailto:rajanakhil07@gmail.com", "__blank")
          }
        >
          <Email />
        </IconButton>
      </div>
      <p>&copy; 2023</p>
    </div>
  );
}

export default Footer;
