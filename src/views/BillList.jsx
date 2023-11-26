import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { usePDF } from "react-to-pdf";
import { getAllBillsThunk } from "../redux/operations/fetchProductsOperations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CustomButton } from "../components";
export default function BillList() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBillsThunk(page));
  }, [page]);

  const bills = useSelector((state) => state.products.bills);
  const count = useSelector((state) => state.products.billsCount);

  const [selectedBill, setSelectedBill] = useState(null);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const numberOfPages = Math.ceil(count / 10);
  useEffect(() => {
    if (selectedBill !== null) toPDF();
  }, [selectedBill]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-info">Crear Factura</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>RTN</th>
                <th>Total</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={bill.id}>
                  <td>{index + 1 + page * 10 - 10}</td>
                  <td>{bill.created_at.split("T")[0]}</td>
                  <td>{bill.client_name}</td>
                  <td>{bill.rtn}</td>
                  <td>{bill.total ? bill.total.toFixed(2) : 0}</td>
                  <td className="text-center text-danger" title="Descargar">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-success"
                      onClick={() => {
                        setSelectedBill(bill);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex  justify-content-end gap-2">
            <CustomButton
              onClick={() => {
                if (page - 1 > 0) setPage(page - 1);
              }}
            >
              Back
            </CustomButton>

            <CustomButton
              onClick={() => {
                if (page < numberOfPages) {
                  setPage(page + 1);
                }
              }}
            >
              Next
            </CustomButton>
          </div>
        </div>
      </div>

      <div ref={targetRef}>
        {selectedBill && <BillStructure bill={selectedBill}></BillStructure>}
      </div>
    </>
  );
}

function BillStructure({ bill }) {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h2 className="text-center mb-4">Factura SPEAF</h2>
            <div className="card">
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <h6 className="mb-3">SPEAF SA</h6>
                    <div>Tegucigalpa, Francisco Morazan M.D.C</div>
                    <div>Email: AlexisMatamoros@SPEAF.com</div>
                    <div>Teléfono: +(504) 9694-7669</div>
                  </div>

                  <div className="col-sm-6">
                    <h6 className="mb-3">Para:</h6>
                    <div>
                      <strong>{bill.client_name}</strong>
                    </div>
                    <div>RTN: {bill.rtn ? bill.rtn : ""}</div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bill.selldetail.length > 0 &&
                        bill.selldetail.map((sell) => (
                          <tr>
                            <td>{sell.product.name}</td>
                            <td>{sell.product.description}</td>
                            <td>{sell.quantity}</td>
                            <td>{sell.product.price}</td>
                            <td>{sell.product.discount / 100}</td>
                            <td>
                              {sell.product.price * sell.quantity -
                                (sell.product.price *
                                  sell.quantity *
                                  sell.product.discount) /
                                  100}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <h5 className="text-right">
                      Subtotal: {bill.subtotal.toFixed(2)}
                    </h5>
                    <h4 className="text-right">
                      Total: {bill.total.toFixed(2)}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
