import { Link } from "react-router-dom";

import Flower from "../../assets/img/flower.png";
import Logo from "../../assets/img/logo.png";

import { Container, Wrapper, Nav, MenuNavBar } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Wrapper>
          <img src={Logo} alt="Logo Bombargain" />
          <Nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/bargains"}>Bargains</Link>
              </li>
              <li>
                <Link to={"/local-market"}>Local market</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About us</Link>
              </li>
              <li>
                <Link to={"/founders"}>Founders</Link>
              </li>
            </ul>
          </Nav>
          <MenuNavBar>
            <img src={Flower} alt="Flower" />
            <ul>
              <li>
                <Link to={"/login"}>
                  <ion-icon name="person-circle-outline"></ion-icon>
                </Link>
              </li>
              <li>
                <a href="#close">
                  <ion-icon name="close-circle-outline"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#settings">
                  <ion-icon name="settings-outline"></ion-icon>
                </a>
              </li>
            </ul>
          </MenuNavBar>
        </Wrapper>
      </Container>
    </>
  );
}
