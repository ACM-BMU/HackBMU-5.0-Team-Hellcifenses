import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Container, Content, Fields, BtnEnter } from "./styles";

function Login() {
  return (
    <>
      <Header />
      <Container>
        <h1>Sign in</h1>
        <h2>Log into your account for a better experience.</h2>
        <Content>
          <Fields>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </Fields>
          <div>
            <label for="remember">
              <input type="checkbox" id="remember" />
              Remember user
            </label>
            <a href="#"> Forgot password?</a>
          </div>
        </Content>
        <BtnEnter type="button">
          <ion-icon name="log-in-outline"></ion-icon>
          Enter
        </BtnEnter>
        <p>
          Don't have an account?{" "}
          <Link to={"/register"}>Create a New Account</Link>
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
