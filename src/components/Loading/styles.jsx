import styled from "styled-components";

export const LoadingContainer = styled.div`
  margin: 20% auto;
  border: 8px solid #f2f2f2;
  border-radius: 50%;
  border-top: 8px solid var(--orange-color);
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
