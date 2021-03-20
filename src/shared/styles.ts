import { css } from "styled-components";

import { THEME } from "./constants";

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NeumorphicAllStyles = css`
  background: ${THEME.background};
  box-shadow: ${THEME.boxShadow};
`;
