import Form from "react-bootstrap/Form";
import CustomButton from "./CustomButton";
export default function CreateForm({ handleShow }) {
  return (
    <>
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombreProducto">Nombre del Cliente</Form.Label>
            <Form.Control id="nombreProducto" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="rtn">RTN</Form.Label>
            <Form.Control id="rtn" placeholder="RTN" />
          </Form.Group>
          <Form.Group className="mb-3">
            <CustomButton className="ms-auto" onClick={handleShow}>
              Agregar Producto
            </CustomButton>
          </Form.Group>

          <CustomButton type="secondary">Realizar Compra</CustomButton>
        </fieldset>
      </Form>
    </>
  );
}
