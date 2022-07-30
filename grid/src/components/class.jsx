import "./grid.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

// product name, serial Number, image URL, warranty period, price

function ClassForm() {
  const [form,setForm] = useState({});
  const setField =  (field,value) => {
      setForm({
        ...form,
        [field]:value
      })
  }
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
            <Form.Control size="lg" type="text" placeholder="Name"  value={form.productName} onChange={(e) => setField('productname',e.target.value)}/>
          </FloatingLabel>

          <FloatingLabel
            className="mb-3 text-dark"
            label="Serial Number"
            controlId=""
          >
            <Form.Control size="lg" type="text" placeholder="123456789" value={form.serial} onChange={(e) => setField('serialnumber',e.target.value)}/>
          </FloatingLabel>

          <FloatingLabel
            className="mb-3 text-dark"
            label="Image URL"
            controlId=""
          >
            <Form.Control size="lg" type="url" placeholder="abc.com" value={form.image} onChange={(e) => setField('image',e.target.value)}/>
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
                  placeholder="0"
                  value={form.warranty} onChange={(e) => setField('warrantyperiod',e.target.value)}
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
                  placeholder="0"
                  value={form.price} onChange={(e) => setField('price',e.target.value)}
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
