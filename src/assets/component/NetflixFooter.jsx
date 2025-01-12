import { Container, Row, Col } from "react-bootstrap";

const NetflixFooter = function () {
  return (
    <Container>
      <Row className=" justify-content-center mt-5">
        <Col xs={6}></Col>
        <Row>
          <Col mb={2}>
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <Col>
            <Row>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className=" mb-2">
            <button
              type="button"
              className="btn btn-sm footer-button rounded-0 mt-3"
            >
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default NetflixFooter;