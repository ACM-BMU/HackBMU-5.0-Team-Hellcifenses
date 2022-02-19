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

export const Products = styled.div`
  width: 80%;
  margin: 100px auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, auto);
  row-gap: 40px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  padding-bottom: 20px;
  background: #f2f2f2;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  img {
    width: 350px;
    height: 200px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    background: none;
    border: none;
    width: 130px;
    color: var(--blue-color);
    font-weight: 300;
  }
`;

export const ProductContent = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;

  strong {
    display: flex;
    align-items: center;
    flex-direction: column;

    font-size: 20px;
    line-height: 30px;

    &:nth-child(1) {
      text-transform: uppercase;
    }
    span {
      font-weight: 500;
      text-transform: lowercase;
      font-size: 18px;
      color: ${(props) => (props.color === true ? "#00CC39" : "#FF0000")};
    }
  }
`;
