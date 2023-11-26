import Form from "react-bootstrap/Form";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createBillThunk } from "../../redux/operations/fetchProductsOperations";

export default function CreateForm({ handleShow }) {
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const selectedProducts = useSelector((state) => state.products.addedProducts);
  const onSubmit = (data) => {
    let bill = {
      client_name: data.client_name,
      rtn: data.rtn ? data.rtn : 0,
      sellsdetails: [...selectedProducts],
    };
    dispatch(createBillThunk(bill));
    reset();
  };
  return (
    <>
      <h2 className="text-info">Crear Factura</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombreProducto">Nombre del Cliente</Form.Label>
            <Form.Control
              id="client_name"
              placeholder="Nombre"
              {...register("client_name", { required: true })}
            />
            {errors.client_name && (
              <span className="text-danger">
                Debe escribir el nombre del cliente
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="rtn">RTN</Form.Label>
            <Form.Control
              id="rtn"
              placeholder="RTN"
              type="number"
              {...register("rtn")}
            />
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
