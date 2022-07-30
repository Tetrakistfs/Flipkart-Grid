import React from "react";
import "./grid.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const UserInfo = () => {
  return (
    <section>
      <UserGrid />
      <RedeemNft />
    </section>
  );
}
 
function UserGrid() {
  return (
    <Container fluid="md my-5">
      <p className="display-4 text-warning mb-5 border-bottom">Registered Prodcuts </p>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-md-between">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card
              className="userCard mx-auto"
              style={{ width: "auto" }}
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// redeem nft form

function RedeemNft() {
  return (
    <Container fluid="md my-5" className="redeem outline">
      <div className="display-5 ms-md-4 mt-3 text-warning text-md-start">
        <p>Redeem a new NFT</p>
      </div>
      <Row md className="ms-md-3">
        <Col md={6}>
        <Form>
              <FloatingLabel
                className="mb-4 mt-4"
                label="Enter your NFT Id"
                controlId=""
              >
              <Form.Control size="lg" type="text" placeholder="#GamerGirlBathWater" />
              </FloatingLabel>
              <Button variant="primary" type="submit" size="lg" className="button mb-3" active>Redeem</Button> 
        </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserInfo;