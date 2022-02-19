import Linkedin from "../../assets/img/linkedin-logo.png";
import Facebook from "../../assets/img/facebook-logo.png";
import Twitter from "../../assets/img/twitter-logo.png";
import Instagram from "../../assets/img/instagram-logo.png";
import Youtube from "../../assets/img/youtube-logo.png";

import { FooterContainer, Wrapper } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <p>All rights reserved</p>
        <div>
          <a
            href="https://www.linkedin.com/in/project-bombargain-a800a1232/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Linkedin} alt="linkedin logo in color green" />
          </a>
          <a
            href="https://www.facebook.com/Bombargain-110539491557893"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Facebook} alt="facebook logo in color green" />
          </a>
          <a
            href="https://twitter.com/bombargain"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Twitter} alt="twitter logo in color green" />
          </a>
          <a
            href="https://www.instagram.com/bombargain/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Instagram} alt="instagram logo in color green" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8f5MsDHta4Zvr7MJdZH2kA"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Youtube} alt="youtube logo in color green" />
          </a>
        </div>
      </Wrapper>
    </FooterContainer>
  );
}
