import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  margin: 100px auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 50%;
  }

  & + div {
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  width: 45%;

  img {
    margin-bottom: 30px;
  }

  p {
    font-size: 32px;

    & + p {
      margin-top: 20px;
    }
  }
`;
