import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
  return (
    <>
      <Container fluid className="pb-5 px-0">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="Navimg"
                src="https://react-bootstrap.netlify.app/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Nav;
