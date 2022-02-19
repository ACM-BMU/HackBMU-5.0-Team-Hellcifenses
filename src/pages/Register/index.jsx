import { Link } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Container, Fields, BtnRegister } from "./styles";

function Register() {
  return (
    <>
      <Header />
      <Container>
        <h1>Register</h1>
        <h2>Register on the site and have a better experience!</h2>
        <Fields>
          <input type="text" placeholder="Enter your username" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
        </Fields>
        <BtnRegister type="button">
          <ion-icon name="log-in-outline"></ion-icon>Register
        </BtnRegister>

        <p>
          Already have an account? click<Link to={"/login"}> login</Link>
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
