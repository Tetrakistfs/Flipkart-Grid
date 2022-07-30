import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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

export default UserGrid;
