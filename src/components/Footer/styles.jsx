import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--green-color);
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    a {
      & + a {
        margin-left: 30px;
      }
    }
  }
`;
