import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import Beatriz from "../../assets/img/beatriz.png";
import Davyson from "../../assets/img/davyson.png";
import Dhruvil from "../../assets/img/dhruvil.png";
import Vitor from "../../assets/img/vitor.png";

import { Container, Founder, Infos, Flag } from "./styles";
import BrazilFlag from "../../assets/img/brazil-flag.png";
import IndiaFlag from "../../assets/img/india-flag.png";

function Founders() {
  return (
    <>
      <Header />
      <Container>
        <Founder>
          <div>
            <img src={Beatriz} alt="Founder Beatriz" />
            <Infos>
              <h1>Beatriz Karoline</h1>
              <p>UI/UX Designer</p>
            </Infos>
          </div>

          <Flag src={BrazilFlag} alt="Brazil Flag" />
        </Founder>

        <Founder>
          <div>
            <img src={Davyson} alt="Founder Davyson" />
            <Infos>
              <h1>Davyson William</h1>
              <p>Developer Front-end</p>
            </Infos>
          </div>
          <Flag src={BrazilFlag} alt="Brazil Flag" />
        </Founder>

        <Founder>
          <div>
            <img src={Dhruvil} alt="Founder Dhruvil" />
            <Infos>
              <h1 orange="">Dhruvil Raval</h1>
              <p>Developer Front-end and Designer</p>
            </Infos>
          </div>
          <Flag src={IndiaFlag} alt="India Flag" />
        </Founder>

        <Founder>
          <div>
            <img src={Vitor} alt="Founder Vitor" />
            <Infos>
              <h1>Vitor Verçosa</h1>
              <p>Idea Developer</p>
            </Infos>
          </div>
          <Flag src={BrazilFlag} alt="Brazil Flag" />
        </Founder>
      </Container>
      <Footer />
    </>
  );
}

export default Founders;
