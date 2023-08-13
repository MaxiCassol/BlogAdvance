import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Design by <b>Maximiliano Cassol</b>
      </span>
      <a href="https://twitter.com/MaxPerspectiv3/" title="Link to Twitter Profile">
            <img src="https://graffica.ams3.digitaloceanspaces.com/2023/07/rQYXqS5v-F1ySdm9WYAIbjHo-1024x1024.jpeg"  alt="Twitter"/>
          </a>

    </footer>
  );
};

export default Footer;
