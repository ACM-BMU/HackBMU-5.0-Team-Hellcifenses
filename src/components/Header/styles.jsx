import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--green-color);
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 180px;
    height: 30px;
  }
`;

export const Nav = styled.nav`
  width: 40%;
  ul {
    display: flex;
    justify-content: space-between;

    li {
      height: 24px;
      margin: 0;
      padding: 0;
      list-style: none;

      a {
        font-size: 18px;
        font-weight: 500;
        color: var(--green-color);
        text-decoration: none;
        border-bottom: none;
        transition: all 0.4s;
        cursor: pointer;

        &:hover {
          font-weight: 700;
          font-size: 23px;
          color: var(--orange-color);
          border-bottom: 1px solid var(--orange-color);
        }
      }
    }
  }
`;

export const MenuNavBar = styled.div`
  position: relative;

  width: 100px;
  height: 100px;

  line-height: 60px;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
  }

  &:hover ul {
    transition: transform 0.4s, z-index 0s 0.5s;
    transform: scale(1);
    z-index: 1;
  }

  &:hover ul li {
    transition: all 0.7s;
  }

  &:hover ul li:nth-child(1) {
    transition-delay: 0.04s;
    transform: rotate(0deg);
  }

  &:hover ul li:nth-child(2) {
    transition-delay: 0.08s;
    transform: rotate(-30deg);
  }

  &:hover ul li:nth-child(3) {
    transition-delay: 0.12s;
    transform: rotate(-60deg);
  }

  ul {
    position: absolute;
    top: 0;

    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    cursor: default;

    transform: scale(0);
    transition: transform 1.5s;
    z-index: 1;

    li {
      position: absolute;
      top: -15px;
      left: -25px;
      transform-origin: 80px 65px;
      transition: all 0.5s 0.1s;

      a {
        font-size: 19px;
        position: absolute;
        color: #000;
      }
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    height: 50px;
  }
  button {
  }
`;
