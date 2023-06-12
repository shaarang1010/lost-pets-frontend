import PropTypes from "prop-types";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AppNavbar = ({
  title,
  onLoginHandler,
  onLogoutHandler,
  isLoggedIn,
}) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/dashboard">
          {title}
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Nav>
          <Form className="d-flex">
            {!isLoggedIn ? (
              <Button
                variant="primary"
                onClick={onLoginHandler}
                style={{ border: "1px solid white" }}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                onClick={onLogoutHandler}
                style={{ border: "1px solid white" }}
              >
                {"User"}
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  onLoginHandler: PropTypes.func.isRequired,
  onLogoutHandler: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
