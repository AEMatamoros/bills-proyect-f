import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Card } from "react-bootstrap";
import CustomButton from "./CustomButton";
import testImg from "C:/Users/Alexis/Desktop/Bills Proyect/testimages/product1.jpg";
function Example({ show, handleShow, handleClose }) {
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
                <Form.Select aria-label="Default select example">
                  <option disabled selected>
                    Selecciona un Producto
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="container">
                <div style={{ width: "100%" }} className="mt-4 row">
                  <div className="col-6">
                    <Card.Img variant="top" src={testImg} />
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-center">
                      Product Name
                    </Card.Title>
                    <Card.Text className="text-center">5$</Card.Text>
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Cantidad</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="0"
                  min={1}
                  type="number"
                />
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton variant="secondary" onClick={handleClose}>
            Cerrar
          </CustomButton>
          <CustomButton type="secondary" onClick={handleClose}>
            Agregar Producto
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
