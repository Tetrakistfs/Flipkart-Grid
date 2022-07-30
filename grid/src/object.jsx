import "./components/grid.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

// name, userid, email,timeofpurchase, retailor, manufacturer,order id, delivery address;

function ObjectForm() {
  const [form,setForm] = useState({})
  const setField =  (field,value) => {
      setForm({
        ...form,
        [field]:value
      })
  }
  const handlesubmit = async(e) => {
    console.log(form);
    sendEmail();
  }
const sendEmail = () => {
  window.Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'sidroot02@gmail.com',
    From : "killmonger1247@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

  return (
    <Container>
      <div className="display-4 text-md-center text-warning mb-3">
        Add New Object
      </div>
      <div className="userCard px-5 py-3 mx-auto my-5 form">
        <Form>
          <Row className="mb-3 justify-content-lg-between">
            <Col md={5}>
              <FloatingLabel
                className="mb-3 mt-4 text-dark"
                label="First Name"
                name="firstName"
              >
                <Form.Control size="lg" type="text" placeholder="Tetrakis" value={form.firstName} onChange={(e) => setField('firstname',e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel
                className="mb-3 mt-4 text-dark"
                label="Last Name"
                name="LasttName"
                
                controlId=""
              >

                <Form.Control size="lg" type="text" placeholder="" value={form.LastName} onChange={(e) => setField('lastname',e.target.value)} />
                <Form.Control size="lg" type="text" placeholder="tfs" />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-3 justify-content-lg-between">
            <Col md={4}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="Email"
                controlId=""
                name="Email"
                
              >
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="yourname@example.com" value={form.Email} onChange={(e) => setField('email',e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md={4}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="User Id"
                controlId=""
                name="firstName"
                
              >
                <Form.Control size="lg" type="text" placeholder="Tetrakis" value={form.UserId} onChange={(e) => setField('userid',e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col md={4}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="Date Of Purchase"
                name="firstName"
             
              >
                <Form.Control type="date" value={form.dop} onChange={(e) => setField('dop',e.target.value)}></Form.Control>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={6}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="Retailor"
                controlId=""
                name="firstName"
              >
                <Form.Control size="lg" type="text" placeholder="Swiftpharma" value={form.Retailer} onChange={(e) => setField('retailer',e.target.value)}/>
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              <FloatingLabel
                className="mb-3 text-dark"
                label="Manufacturer"
                controlId=""
                name="firstName"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Genshin Gang" value={form.Manufacturer} onChange={(e) => setField('manufacturer',e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>


          <FloatingLabel className="mb-3 text-primary" label="Delivery Address" name="firstName">
            <Form.Control
              size="lg"
              type="text"
              Placeholder="Dauladhar" value={form.delivery} onChange={(e) => setField('delivery',e.target.value)}
              
            ></Form.Control>
          </FloatingLabel>

          <Row className="mb-2 px-2">

            <Button variant="outline-primary" size="lg" onClick={handlesubmit}>
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default ObjectForm;
