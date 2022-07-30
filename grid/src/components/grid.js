import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Grid = () => {
  return (
    <Container fluid="md my-5">
      <Row xs={1} md={2} className="g-4 justify-content-md-center">
        <IndexGrid
          Title={SellerText.Title}
          Description={SellerText.Description}
        ></IndexGrid>
        <IndexGrid
          Title={BuyerText.Title}
          Description={BuyerText.Description}
        ></IndexGrid>
      </Row>
    </Container>
  );
};

function IndexGrid(props) {
  return (
    <React.Fragment>
      <Card border="primary" className="mx-auto" style={{ width: "35rem" }}>
        <Card.Body>
          {/* <Card.Title>{props.Title}</Card.Title> */}
          <p className="display-4 text-md-start py-3 border-bottom">
            {props.Title}
          </p>
          <p className="fs-5 text-md-start">{props.Description}</p>
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
}

const SellerText = {
  Title: "Are you a Seller ?",
  Description: "Register Your Product,Add classes to them, Make NFT's...",
};

const BuyerText = {
  Title: "Are you a Buyer?",
  Description:
    "Redeem your product here, Validate your NFT's, Transfer Ownership...",
};

export default Grid;
