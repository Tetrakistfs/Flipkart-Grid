import "./grid.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Seller = () => {

  return (
    <section>
      <SellerCard/>;
      <ClassButton/>;
    </section>
  );
};

function SellerCard() {
  return (
    <Container fluid="md my-4">
      <Card className="userCard mx-auto" style={{ width: "auto" }}>
        <Card.Body>
          <div className="flex">
            <img
              className="product-img"
              variant="top"
              src="https://i0.wp.com/getcomics.info/share/uploads/2022/07/Michel-Vaillant-11-Cannonball-2022.jpg?fit=400%2C544&ssl=1"
            />
            <p className="display-6 d-md-inline text-md-start ms-md-4 py-3">
              Backend kab chalu hga
            </p>
          </div>
          <p className="fs-5 text-md-start mt-md-3 mb-3">
            1 din rah gya h mje to thik nhi lag rha.....
          </p>
          <Button variant="primary" size="lg" className="text-dark" active>
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
      <Button variant="primary" size="lg">
        + Add New Class
      </Button>
    </div>
  );
}

export default Seller;
