import { CustomNavlink } from "../components";

export default function NotFound() {
  return (
    <div className="full-view bg-black">
      <h1 className="text-white">Ops! Parece que ocurrio un error...</h1>
      <span>
        <CustomNavlink to="/">Volver a la pagina principal</CustomNavlink>
      </span>
    </div>
  );
}
