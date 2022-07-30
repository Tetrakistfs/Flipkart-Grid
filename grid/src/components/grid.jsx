import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from 'react-router-dom';

const Grid = () => {
  return (
    <Container fluid="md my-5">
      <Row xs={1} md={2} className="g-4 justify-content-md-center">
        <IndexGrid
        ></IndexGrid>
      </Row>
    </Container>
  );
};

function IndexGrid() {
  return (
    <React.Fragment>
      <Card className="mx-auto userCard" style={{ width: "30rem" }}>
        <Card.Body>
          <p className="display-5 mb-3 text-md-start py-3 border-bottom text-warning" style={{fontWeight: "500"}}>
            Are you a Seller ?
          </p>
          <p className="fs-5 text-md-start">Register Your Product,Add classes to them, Make NFT's...</p>
        </Card.Body>
        <Button variant="primary" type="button" size="lg" className="mb-3" active>Seller</Button>
      </Card>
      <br />
      <Card className="mx-auto userCard" style={{ width: "30rem" }}>
        <Card.Body>
          <p className="display-5 mb-3 text-md-start py-3 border-bottom text-warning" style={{fontWeight: "500"}}>
            Are you a Buyer?
          </p>
          <p className="fs-5 text-md-start">Redeem your product here, Validate your NFT's, Transfer Ownership...</p>
        </Card.Body>
        <Button variant="primary" type="button" size="lg" className="mb-3" active>Buyer</Button>
      </Card>
      <br />
    </React.Fragment>
  );
}

export default Grid;
