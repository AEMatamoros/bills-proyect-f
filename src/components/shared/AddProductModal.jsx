import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./CustomButton";
import testImg from "C:/Users/Alexis/Desktop/Bills Proyect/testimages/product1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/productsSlices";
function Example({ show, handleShow, handleClose }) {
  const products = useSelector((state) => state.products.serviceProducts);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleSelectProduct = (e) => {
    setSelectedProduct(products.find((p) => p.id == e.target.value));
  };

  const [quantity, setquantity] = useState(1);
  const handleAddProduct = () => {
    let toAddProduct = { ...selectedProduct };
    toAddProduct.quantity = parseInt(quantity);
    dispatch(addProduct(toAddProduct));
    handleClose();
    setSelectedProduct({});
    setquantity(1);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <fieldset>
              <Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleSelectProduct}
                >
                  <option disabled selected>
                    Selecciona un Producto
                  </option>
                  {!loading ? (
                    products.map((product) => (
                      <option value={product.id} key={product.id}>
                        {product.name}
                      </option>
                    ))
                  ) : (
                    <h3>Cargando</h3>
                  )}
                </Form.Select>
              </Form.Group>

              <Form.Group className="container">
                <div style={{ width: "100%" }} className="mt-4 row">
                  <div className="col-6">
                    <Card.Img variant="top" src={selectedProduct.image} />
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-center">
                      {selectedProduct.name}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {selectedProduct.price} LPS
                    </Card.Text>
                  </div>
                </div>
              </Form.Group>
              {selectedProduct.hasOwnProperty("id") && (
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">Cantidad</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    min={1}
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  />
                </Form.Group>
              )}
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton
            variant="secondary"
            onClick={() => {
              setSelectedProduct({});
              setquantity(1);
              handleClose();
            }}
          >
            Cerrar
          </CustomButton>
          <CustomButton type="secondary" onClick={handleAddProduct}>
            Agregar Producto
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
