import styled from "styled-components";

import { THEME } from "../../shared/constants";
import { Center } from "../../shared/styles";

import { GithubLinksWrapperProps } from "../../shared/types/props";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 50px;
  ${Center}

  @media (min-width: 480px) {
    max-width: 1024px;
  }
`;

FooterWrapper.displayName = "FooterWrapper";

const VersionText = styled.div`
  color: ${THEME.color};
  font-size: 13px;
  padding: 10px;
`;

VersionText.displayName = "VersionText";

const GithubLinkWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props: GithubLinksWrapperProps) =>
    props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

GithubLinkWrapper.displayName = "GithubLinkWrapper";

const GithubLink = styled.a``;

GithubLink.displayName = "GithubLink";

export { FooterWrapper, VersionText, GithubLinkWrapper, GithubLink };
