import styled from "styled-components";
import { THEME } from "../../shared/constants";
import { Center } from "../../shared/styles";
import { LoadingWrapperProps } from "../../shared/types/props";

const LoadingWrapper = styled.div`
  background-color: ${THEME.backgroundColor};
  z-index: ${(props: LoadingWrapperProps) => (props.zIndex ? props.zIndex : 2)};
  ${Center};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

LoadingWrapper.displayName = "LoadingWrapper";

const LoadingBox = styled.div`
  max-width: 250px;
  word-break: break-all;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  background: ${THEME.background};
  box-shadow: ${THEME.boxShadow};
  border-radius: 10px;
`;

LoadingBox.displayName = "LoadingBox";

export { LoadingWrapper, LoadingBox };
