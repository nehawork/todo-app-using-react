import { Navbar, Container} from 'react-bootstrap';
import logo from '../../../logo.svg';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Todo-App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
