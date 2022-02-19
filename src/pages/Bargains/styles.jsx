import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 80%;
  margin: 50px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
    }
  }
`;

export const Search = styled.label`
  position: relative;
  width: 400px;
  height: 60px;
  display: flex;

  input[type="text"] {
    width: 100%;
    height: 60px;
    padding: 15px 20px;
    font-size: 20px;
    font-weight: 700;

    background: #f2f2f2;
    border: 1px solid var(--orange-color);
    color: var(--orange-color);
    outline: none;

    border-radius: 40px;

    &::placeholder {
      font-weight: 400;
      color: var(--orange-color);
    }
  }

  ion-icon {
    padding: 10px;
    background: var(--orange-color);
    color: #f2f2f2;
    border-radius: 50%;
    position: absolute;
    width: 35px;
    height: 40px;
    right: 1px;
  }
`;

export const Main = styled.main`
  margin: 100px auto;
  width: 80%;
  max-width: 1440px;
  section {
    & + section {
      margin-top: 20px;
    }
    h2 {
      margin-bottom: 15px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 10px;
    background: var(--green-color);
    text-decoration: none;
    img {
      width: 300px;
      height: 200px;
    }

    button {
      margin-top: 10px;
      background: none;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }
`;
