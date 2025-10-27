import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// NavDropdown removed — navbar simplified per user request
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar expand="lg" className="site-nav navbar-dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            Back2Me
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <section className="hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-white">
              <h1 className="hero-title">
                Lost something? Find it with Back2Me.
              </h1>
              <p className="lead hero-sub">
                A friendly community for reporting lost and found items. Post
                quickly, search intuitively, and reconnect with your things.
              </p>
              <div className="hero-ctas">
                <Button
                  as={Link}
                  to="/report-lost"
                  variant="light"
                  className="me-2"
                >
                  Report Lost
                </Button>
                <Button as={Link} to="/report-found" variant="outline-light">
                  Report Found
                </Button>
              </div>
            </Col>
            <Col md={6} className="d-none d-md-block">
              <div className="hero-visual" aria-hidden="true">
                {/* Decorative cards stack */}
                <Card className="visual-card card-top">
                  <Card.Body>
                    <div className="visual-emoji">👜</div>
                    <Card.Title>Found</Card.Title>
                    <Card.Text>
                      Post found items and help reunite owners.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="visual-card card-middle">
                  <Card.Body>
                    <div className="visual-emoji">🆘</div>
                    <Card.Title>Lost</Card.Title>
                    <Card.Text>
                      Describe your item and where you lost it.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="visual-card card-bottom">
                  <Card.Body>
                    <div className="visual-emoji">🔎</div>
                    <Card.Title>Match</Card.Title>
                    <Card.Text>
                      Smart filters to match reports quickly.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features / quick cards */}
      <section className="features py-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section-title">How Back2Me helps</h2>
              <p className="section-sub">Fast — Simple — Community powered</p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col xs={12} md={4}>
              <Card className="feature-card h-100 text-center">
                <div className="feature-emoji">🆘</div>
                <Card.Body>
                  <Card.Title>Report Lost Item</Card.Title>
                  <Card.Text>
                    Provide details, upload a photo, and mark where you last saw
                    it to increase the chance of recovery.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button as={Link} to="/report-lost" variant="primary">
                    Report Lost
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="feature-card h-100 text-center">
                <div className="feature-emoji">👜</div>
                <Card.Body>
                  <Card.Title>Report Found Item</Card.Title>
                  <Card.Text>
                    Help the owner get their item back — upload a photo and
                    location so we can connect them.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button as={Link} to="/report-found" variant="primary">
                    Report Found
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="feature-card h-100 text-center">
                <div className="feature-emoji">🔎</div>
                <Card.Body>
                  <Card.Title>Search & Match</Card.Title>
                  <Card.Text>
                    Search by name, category, or location. Use filters to find
                    the best matches quickly.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button as={Link} to="/search" variant="primary">
                    Search Items
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-4 site-footer">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between small footer-content">
            <div className="mb-2 mb-md-0">
              © {new Date().getFullYear()} Back2Me
            </div>
            <div>Built with care for reunions ❤️</div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Home;
