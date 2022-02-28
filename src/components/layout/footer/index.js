import { Container } from "react-bootstrap";
import "./style.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <Container>Copyright ©{new Date().getFullYear()} Todo-App</Container>
    </div>
  );
}

export default Footer;
