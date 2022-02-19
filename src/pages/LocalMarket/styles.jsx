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

    h1 {
      font-size: 26px;
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

export const Companies = styled.div`
  width: 90%;
  margin: 100px auto;
`;

export const Company = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid var(--green-color);
  border-radius: 10px;

  & + div {
    margin-top: 40px;
  }
`;

export const CompanyInfos = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 150px;
  }

  p {
    width: 90%;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    margin: 20px 0;
  }

  strong {
    text-transform: capitalize;
    cursor: pointer;
    font-size: 18px;
    color: var(--orange-color);
    border-bottom: 1px solid var(--green-color);
  }
`;

export const CompanyProducts = styled.div`
  width: 33.33%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  row-gap: 10px;

  div {
    cursor: pointer;
    img {
      border: 1px solid var(--orange-color);
      border-radius: 10px;
      width: 150px;
      height: 100px;
    }
  }

  a {
    width: 50px;
    align-self: flex-end;
    text-align: right;
    text-decoration: none;
    color: var(--orange-color);
    font-weight: 700;
    font-size: 18px;
  }
`;

export const CompanyDescription = styled.p`
  width: 33.33%;
  text-align: center;
  font-size: 22px;
`;
