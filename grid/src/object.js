import "./grid.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
// import DatePicker from "react-datepicker";

// name, userid, email,timeofpurchase, retailor, manufacturer,order id, delivery address;

function ObjectForm() {
  return (
    <Container>
      <div className="display-4 text-md-center text-light mb-3">
        Add New Object
      </div>
      <div className="bg-light px-5 py-3 mx-auto my-5 form">
        <Form>
          <Row className="mb-3 justify-content-lg-between">
            <Col md={5}>
              <FloatingLabel
                className="mb-3 mt-4 text-primary"
                label="First Name"
                controlId=""
              >
                <Form.Control size="lg" type="text" placeholder="Tetrakis" />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel
                className="mb-3 mt-4 text-primary"
                label="Last Name"
                controlId=""
              >
                <Form.Control size="lg" type="text" placeholder="" />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3 justify-content-lg-between">
            <Col md={4}>
              <FloatingLabel
                className="mb-3 text-primary"
                label="Email"
                controlId=""
              >
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="yourname@example.com"
                />
              </FloatingLabel>
            </Col>
            <Col md={4}>
              <FloatingLabel
                className="mb-3 text-primary"
                label="User Id"
                controlId=""
              >
                <Form.Control size="lg" type="text" placeholder="Tetrakis" />
              </FloatingLabel>
            </Col>
            <Col md={4}>
              <FloatingLabel
                className="mb-3 text-primary"
                label="Date Of Purchase"
              >
                <Form.Control type="date"></Form.Control>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={6}>
              <FloatingLabel
                className="mb-3 text-primary"
                label="Retailor"
                controlId=""
              >
                <Form.Control size="lg" type="text" placeholder="Swiftpharma" />
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              <FloatingLabel
                className="mb-3 text-primary"
                label="Manufacturer"
                controlId=""
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Genshin Gang"
                />
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel className="mb-3 text-primary" label="Delivery Address">
            <Form.Control
              size="lg"
              type="text"
              Placeholder="Dauladhar"
            ></Form.Control>
          </FloatingLabel>

          <Row className="mb-2 px-2">
            <Button variant="outline-primary" size="lg">
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default ObjectForm;
