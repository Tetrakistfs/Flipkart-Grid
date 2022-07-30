import "./grid.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Seller = () => {
  return (
    <section>
      <SellerCard />;
      <ClassButton />;
    </section>
  );
};

function SellerCard() {
  return (
    <Container fluid="md my-4">
      <Card className="mx-auto" style={{ width: "auto" }}>
        <Card.Body>
          <img
            className="product-img"
            variant="top"
            src="https://i.ytimg.com/an_webp/4PK2hyaCNj8/mqdefault_6s.webp?du=3000&sqp=CIP5g5cG&rs=AOn4CLC_bSxcfEqBWxCAqy2ve1CuFD76hg"
          />
          <p className="display-6 d-md-inline text-md-start ms-md-4 py-3">
            Backend kab chalu hga
          </p>
          <p className="fs-5 text-md-start mt-md-3">
            2 din rah gye h mje to thik nhi lag rha.....
          </p>
          <Button variant="primary" size="lg">
            Add Product
          </Button>
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

export default Seller;
