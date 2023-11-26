import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ProductsTable() {
  const selectedProducts = useSelector((state) => state.products.addedProducts);
  const [subtotal, setSubtotal] = useState(0);
  const handleSubtotal = () => {
    if (selectedProducts.length > 0) {
      return selectedProducts.reduce((acc, next) => {
        acc +=
          next.price * next.quantity -
          (next.price * next.quantity * next.discount) / 100;
        return acc;
      }, 0);
    }
  };
  useEffect(() => {
    setSubtotal(handleSubtotal());
  }, [selectedProducts]);

  return (
    <>
      {selectedProducts.length > 0 && (
        <>
          <h2>Productos Agregados</h2>
          <span className="me-2">
            Subtotal: {subtotal && subtotal.toFixed(2)}
          </span>
          <span>Total: {(subtotal * 1.15).toFixed(2)}</span>
          {selectedProducts.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                  <th>Cantidad</th>
                  <th>GPP</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map((product) => (
                  <tr key={product.id}>
                    <td>1</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}%</td>
                    <td>{product.quantity}</td>
                    <td>
                      {product.price * product.quantity -
                        (product.price * product.quantity * product.discount) /
                          100}
                    </td>
                    <td className="text-center text-danger" title="Eliminar">
                      <FontAwesomeIcon icon={faDeleteLeft} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <h5>Debe agregar productos a esta factura</h5>
          )}
        </>
      )}
    </>
  );
}
