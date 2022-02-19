import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 100px auto;
  h1 {
    font-size: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    img {
      margin-left: 20px;
      width: 350px;
      height: 100px;
    }
  }

  p {
    border-radius: 10px;
    padding: 30px;
    width: 70%;
    margin: 0 auto;
    font-size: 32px;
    font-weight: 700;
    text-align: center;

    & + p {
      margin-top: 50px;
    }

    &:nth-child(1n) {
      color: var(--orange-color);
    }

    /*  &:nth-child(2n) {
      color: var(--green-color);
    } */
  }
`;
