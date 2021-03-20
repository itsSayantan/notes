import {
  FooterWrapper,
  VersionText,
  GithubLinkWrapper,
  GithubLink,
} from "./styles";

import { THEME } from "../../shared/constants";
import Imade from "../../assets/images/github-dark.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <VersionText>v1.0.0</VersionText>
      <GithubLinkWrapper backgroundImage={Image}>
        <GithubLink />
      </GithubLinkWrapper>
    </FooterWrapper>
  );
};

export default Footer;
