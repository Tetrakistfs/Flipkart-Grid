import "./components/grid.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import {db} from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";


// product name, serial Number, image URL, warranty period, price

function ClassForm() {
  
  return (
    <Container>
      <div className="display-4 text-md-center mb-3 text-warning">
        Add New Class
      </div>

      <div className="px-5 py-3 mx-auto my-5 userCard form">
        <Form>
          <FloatingLabel
            className="mb-3 mt-4 text-dark"
            label="Product Name"
            controlId=""
          >
            <Form.Control size="lg" type="text" placeholder="Tetrakis" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3 text-dark"
            label="Serial Number"
            controlId=""
          >
            <Form.Control size="lg" type="text" placeholder="123456789" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-3 text-dark"
            label="Image URL"
            controlId=""
          >
            <Form.Control size="lg" type="url" placeholder="xyz.com" />
          </FloatingLabel>
          <Row className="mb-3">
            <Col sm={6}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="Warranty Period (in months)"
                controlId=""
              >
                <Form.Control
                  size="lg"
                  type="number"
                  min="0"
                  placeholder="12"
                />
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="Price (INR)"
                controlId=""
              >
                <Form.Control
                  size="lg"
                  type="number"
                  min="0"
                  placeholder="99.9"
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-2 px-2">
            <Button variant="primary" size="lg" active>
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default ClassForm;
