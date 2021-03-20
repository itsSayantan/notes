import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: brown;
  margin: 0 auto;

  @media (min-width: 480px) {
    max-width: 1024px;
  }
`;

HomeWrapper.displayName = "HomeWrapper";

export { HomeWrapper };
