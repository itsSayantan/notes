import {
  FooterWrapper,
  VersionText,
  GithubLink,
  GithubLinkImage,
} from "./styles";

import { THEME } from "../../shared/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <VersionText>v1.0.0</VersionText>
      <GithubLink target="_blank" href="https://github.com/itsSayantan/notes">
        <GithubLinkImage backgroundImage={THEME.githubLogoName} />
      </GithubLink>
    </FooterWrapper>
  );
};

export default Footer;
