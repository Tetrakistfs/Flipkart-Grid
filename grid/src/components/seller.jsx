import "./grid.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Seller = () => {
  const navigate = useNavigate();
  return (
    <section>
      <SellerCard navigate={navigate}/>;
      <ClassButton navigate={navigate}/>;
    </section>
  );
};

function SellerCard({navigate}) {
  return (
    <Container fluid="md my-4">
      <Card className="userCard mx-auto" style={{ width: "auto" }}>
        <Card.Body>
          <div className="flex">
            <img
              className="product-img"
              variant="top"
              src="https://in.yamaha.com/en/files/slider_03_sp_3f68e3d70d748e34d427b26e2a16673d.jpg?impolicy=resize&imwid=1000&imhei=1000"
            />
            <div className="flex flex-col">
              <p className="display-6 d-md-inline text-md-start ms-md-4 py-3">
                Casio Piano S-300
              </p>
              <p className="display-6 d-md-inline text-md-start ms-md-4 py-3">
                Serial Number: 6789164
              </p>
              <p className="display-6 d-md-inline text-md-start ms-md-4 py-3">
                Warranty Period: 24 months
              </p>
            </div>
          </div>
          <p className="fs-5 text-md-start mt-md-3 mb-3">
            25000 Rs.
          </p>
          <Button variant="primary" size="lg" className="text-dark" active onClick={() => {navigate("/seller/object")}}>
            Add Product Buyer
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
function ClassButton({navigate}) {
  return (
    <div className="d-flex justify-content-center mb-2">
      <Button variant="primary" size="lg"  onClick={() => {navigate("/seller/class")}}>
        + Add New Product Class
      </Button>
    </div>
  );
}

export default Seller;
