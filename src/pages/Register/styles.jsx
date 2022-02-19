import styled from "styled-components";

export const Container = styled.div`
  margin: 210px auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--orange-color);
  border-radius: 15px;
  padding: 40px;

  h1 {
    margin: 30px 0;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 60px;
  }

  p {
    margin-top: 30px;
    font-size: 18px;
    a {
      color: var(--blue-color);
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export const Fields = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input {
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background: var(--orange-color);
    color: #fff;
    font-size: 18px;
    font-weight: 600;

    &::placeholder {
      color: #fff;
      font-weight: 300;
    }

    & + input {
      margin-top: 10px;
    }
  }
`;

export const BtnRegister = styled.button`
  width: 60%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue-color);
  color: var(--orange-color);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  border-radius: 5px;
  border: none;

  ion-icon {
    font-size: 22px;
    margin-right: 10px;
  }
`;
