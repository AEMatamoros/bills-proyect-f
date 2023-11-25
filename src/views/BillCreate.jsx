import { useState } from "react";
import { CreateForm, ProductsTable, AddProductModal } from "../components";
export default function BillCreate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2 className="text-info">Crear Factura</h2>
          <CreateForm handleShow={handleShow}></CreateForm>
        </div>
        <div className="col-6">
          <h2>Productos Agregados</h2>
          <span className="me-2">Subtotal</span>
          <span>Total</span>
          <ProductsTable></ProductsTable>
        </div>
      </div>
      <AddProductModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
}
