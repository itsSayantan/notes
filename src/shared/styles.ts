import { css } from "styled-components";

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
