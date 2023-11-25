import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { usePDF } from "react-to-pdf";

export default function BillList() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
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
                <th>Nombre</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="text-center text-danger" title="Eliminar">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-success"
                    onClick={() => toPDF()}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
                <td className="text-center text-danger" title="Eliminar">
                  <FontAwesomeIcon icon={faDownload} className="text-success" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>
                <td>@twitter</td>
                <td className="text-center text-danger" title="Eliminar">
                  <FontAwesomeIcon icon={faDownload} className="text-success" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div ref={targetRef}>
        <BillStructure></BillStructure>
      </div>
    </>
  );
}

function BillStructure() {
  return (
    <>
      <section>
        <header>
          <h1>Factura</h1>
          <p>Fecha: [Fecha]</p>
        </header>

        <section>
          <h2>Información del Cliente</h2>
          <p>Nombre: [Nombre del Cliente]</p>
          <p>Dirección: [Dirección del Cliente]</p>
        </section>

        <section>
          <h2>Detalle de la Factura</h2>
          <table>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Producto 1</td>
                <td>2</td>
                <td>$20.00</td>
                <td>$40.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Total</h2>
          <p>Total a Pagar: $[Total]</p>
        </section>

        <footer>
          <p>Gracias por su compra</p>
        </footer>
      </section>
    </>
  );
}
