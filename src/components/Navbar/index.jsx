import { ReactComponent as AppLogo } from "../../assets/logo-dark.svg";
import Container from "../Container";
import "./style.css";

export default function Navbar({ children }) {
  return (
    <header className="navbar">
      <Container className="navbar__container" horizontal>
        <AppLogo className="navbar__logo" />

        <nav className="navbar__actions">{children}</nav>
      </Container>
    </header>
  );
}
