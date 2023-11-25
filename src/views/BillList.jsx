import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default function BillList() {
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
                  <FontAwesomeIcon icon={faDownload} className="text-success" />
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
    </>
  );
}
