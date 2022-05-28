import { ReactComponent as LandingImage } from "../../assets/svg-landing.svg";
import { ReactComponent as AppLogo } from "../../assets/logo-light.svg";

import Container from "../../components/Container";
import Button from "../../components/Button";
import "./style.css";

export default function LandingPage({ setIsLogged }) {
  return (
    <div className="landing">
      <Container horizontal noMarginMobile className="landing__container">
        <Container className="landing__panel">
          <AppLogo className="landing__logo logo--light" />
          <h1 className="landing__title">
            Centralize o controle das <span className="highlight">suas</span>{" "}
            finanças
          </h1>
          <h2 className="landing__subtitle">De forma rápida e segura</h2>
          <Button primary extend onClick={() => setIsLogged(true)}>
            Iniciar
          </Button>
        </Container>
        <div className="landing__image">
          <LandingImage />
        </div>
      </Container>
    </div>
  );
}
