import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  padding: 50px 0;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 480px) {
    max-width: 1024px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

HomeWrapper.displayName = "HomeWrapper";

export { HomeWrapper };
