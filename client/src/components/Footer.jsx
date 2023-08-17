import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  // footer used instead an about tag
  
  return (
    <footer>
      <a href="#top" class="back-to-top" title="Back to Top">
        <img src={Logo} alt="" />
      </a>      
      <span>
        Design by <b>Maximiliano Cassol</b>        
      </span>
      {/* <a href="https://api.whatsapp.com/send?phone=541165516999" class="whatsapp" title="Back to Top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="whatsapp" />
      </a>
      <a href="https://github.com/MaxiCassol/MaxiCassol/" title="Link to Github Profile">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg" class="footer__social-image" width="70px" alt="Github"/>
      </a>
      <a href="https://www.linkedin.com/in/maximilianocassol/?locale=en_US" title="Link to Linkedin Profile">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin" />
      </a>
      <a href="https://twitter.com/MaxPerspectiv3/" title="Link to Twitter Profile">
        <img src="https://graffica.ams3.digitaloceanspaces.com/2023/07/rQYXqS5v-F1ySdm9WYAIbjHo-1024x1024.jpeg"  alt="Twitter"/>
      </a> */}
    </footer>
  );
};

export default Footer;
