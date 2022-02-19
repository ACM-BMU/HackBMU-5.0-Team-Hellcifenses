import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 200px auto;
`;

export const Founder = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  padding-bottom: 40px;

  & + div {
    margin-top: 100px;
  }

  div:first-child {
    width: 50%;
    height: 100%;
    img {
      border-radius: 20px 0;
      width: 60%;
      height: 450px;
    }
  }
`;

export const Infos = styled.div`
  width: 60%;

  h1 {
    text-transform: uppercase;
    font-size: 36px;
    color: ${(props) =>
      props.orange ? "var(--orange-color)" : "var(--green-color)"};
  }
  p {
    font-size: 24px;
    color: #000;
  }
`;

export const Flag = styled.img`
  width: 50%;
  height: 100%;
`;
