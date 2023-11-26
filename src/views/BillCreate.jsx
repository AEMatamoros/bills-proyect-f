import { useState, useEffect } from "react";
import { CreateForm, ProductsTable, AddProductModal } from "../components";
import { fetchProductsThunk } from "../redux/operations/fetchProductsOperations";
import { useDispatch } from "react-redux";
export default function BillCreate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <CreateForm handleShow={handleShow}></CreateForm>
        </div>
        <div className="col-6">
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
