import { Outlet } from "react-router-dom";
export default function BillHome() {
  return (
    <div className="container">
      <h1>Sistema de facturacion</h1>
      <Outlet></Outlet>
    </div>
  );
}
