import styled, { css } from "styled-components";

import { THEME } from "./constants";

export const Flex = css`
  display: flex;
`;

export const JCC = css`
  ${Flex}
  justify-content: center;
`;

export const AIC = css`
  ${Flex}
  align-items: center;
`;

export const Center = css`
  ${JCC}
  align-items: center;
`;

export const SpaceBetween = css`
  ${Flex}
  justify-content: space-between;
`;

export const AlignCenterSpaceBetween = css`
  ${AIC}
  justify-content: space-between;
`;

export const NeumorphicAllStyles = css`
  background: ${THEME.background};
  box-shadow: ${THEME.boxShadow};
`;

export const BackgroundImageStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Button = styled.button`
  padding: 10px;
  color: ${THEME.color};
  border-radius: 8px;
  outline: none;
  border: 0;
  cursor: pointer;
  ${NeumorphicAllStyles};
  ${Center};

  &:active {
    box-shadow: ${THEME.flippedBoxShadow};
  }
`;

Button.displayName = "Button";

export { Button };
