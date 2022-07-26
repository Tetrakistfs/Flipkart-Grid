import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./grid.css";

//react components
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <IndexGrid />
    <SellerCard />
    <ClassButton />
    <UserGrid />
  </React.StrictMode>
);

function IndexGrid() {
  return (
    <Container fluid="md my-5">
      <Row xs={1} md={2} className="g-4 justify-content-md-center">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card
              border="primary"
              className="mx-auto"
              style={{ width: "30rem" }}
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

function SellerCard() {
  return (
    <Container fluid="md my-4">
      <Card className="mx-auto" style={{ width: "80%" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
function ClassButton() {
  return (
    <div className="d-flex justify-content-center mb-2">
      <Button variant="outline-light" size="lg">
        + Add New Class
      </Button>
    </div>
  );
}

function UserGrid() {
  return (
    <Container fluid="md my-5">
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-md-between">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card
              border="primary"
              className="mx-auto"
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
// export default Grid;
