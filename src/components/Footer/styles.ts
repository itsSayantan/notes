import styled from "styled-components";

import { THEME } from "../../shared/constants";
import {
  AlignCenterSpaceBetween,
  BackgroundImageStyles,
} from "../../shared/styles";

import { GithubLinksWrapperProps } from "../../shared/types/props";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 50px;
  ${AlignCenterSpaceBetween}

  @media (min-width: 480px) {
    max-width: 1024px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

FooterWrapper.displayName = "FooterWrapper";

const VersionText = styled.div`
  color: ${THEME.color};
  font-size: 13px;
`;

VersionText.displayName = "VersionText";

const GithubLink = styled.a``;

GithubLink.displayName = "GithubLink";

const GithubLinkImage = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(assets/images/${(props: GithubLinksWrapperProps) =>
    props.backgroundImage});
  ${BackgroundImageStyles};
  cursor: pointer;
`;

GithubLinkImage.displayName = "GithubLinkImage";

export { FooterWrapper, VersionText, GithubLink, GithubLinkImage };
