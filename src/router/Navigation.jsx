import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound, BillList, BillCreate, BillHome } from "../views";
import { Header } from "../components";

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<BillHome></BillHome>}>
            <Route path="" element={<BillCreate></BillCreate>}></Route>
            <Route path="bill-list" element={<BillList></BillList>}></Route>
          </Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
