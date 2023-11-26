import axios from "axios";
import Swal from "sweetalert2";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
//Thunk
export const fetchProductsThunk = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/product");
      return response.data;
    } catch (e) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ocurrio un error al cargar el listado de productos",
        showConfirmButton: false,
        timer: 1500,
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createBillThunk = createAsyncThunk(
  "products/createBill",
  async (bill, thunkAPI) => {
    try {
      const response = await axios.post("/bill/", { ...bill });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Factura Generada",
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ocurrio un error generando la factura",
        showConfirmButton: false,
        timer: 1500,
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllBillsThunk = createAsyncThunk(
  "products/getAllBills",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `/bill/?limit=10&offset=${page * 10 - 10}`
      );
      return response.data;
    } catch (e) {
      console.log(e);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ocurrio un error al obtener las facturas",
        showConfirmButton: false,
        timer: 1500,
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
