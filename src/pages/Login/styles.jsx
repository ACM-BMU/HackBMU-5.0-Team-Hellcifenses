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
      font-weight: 600;
      color: var(--blue-color);
      text-decoration: none;
    }
  }
`;

export const Content = styled.div`
  width: 60%;
  margin-bottom: 20px;

  div:last-child {
    display: flex;
    justify-content: space-between;

    label {
      font-weight: 600;
      color: #b6b3b3bb;
      cursor: pointer;
      input {
        cursor: pointer;
        margin-right: 5px;
      }
    }

    a {
      color: var(--blue-color);
      text-decoration: none;
    }
  }
`;

export const Fields = styled.div`
  width: 100%;
  margin-bottom: 5px;

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
      font-size: 18px;
      font-weight: 300;
      color: #fff;
    }

    & + input {
      margin-top: 20px;
    }
  }
`;

export const BtnEnter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 60%;
  padding: 20px;
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
