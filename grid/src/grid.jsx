import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

const Grid = () => {
  return (
    <Container fluid="md my-5">
      <Row xs={1} md={2} className="g-4 justify-content-md-center">
        <IndexGrid
          Title={SellerText.Title}
          Description={SellerText.Description}
          Button={SellerText.Button}
        ></IndexGrid>
        <IndexGrid
          Title={BuyerText.Title}
          Description={BuyerText.Description}
          Button={BuyerText.Button}
        ></IndexGrid>
      </Row>
    </Container>
  );
};

function IndexGrid(props) {
  return (
    <React.Fragment>
      <Card className="mx-auto userCard" style={{ width: "30rem" }}>
        <Card.Body>
          <p className="display-5 mb-3 text-md-start py-3 border-bottom text-warning" style={{fontWeight: "500"}}>
            {props.Title}
          </p>
          <p className="fs-5 text-md-start">{props.Description}</p>
        </Card.Body>
        <Button variant="primary" type="button" size="lg" className="mb-3" active>{props.Button}</Button>
      </Card>
      <br />
    </React.Fragment>
  );
}

const SellerText = {
  Title: "Are you a Seller ?",
  Description: "Register Your Product,Add classes to them, Make NFT's...",
  Button: "Seller",
};

const BuyerText = {
  Title: "Are you a Buyer?",
  Description:
    "Redeem your product here, Validate your NFT's, Transfer Ownership...",
  Button: "Buyer",
};

export default Grid;
