import React from "react";
import { useDispatch } from "react-redux";
import { buscarAsc } from "../actions/clima";

function Buscador() {
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(buscarAsc(e.target.ciudad.value));
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input type="text" name="ciudad" placeholder="Ingrese nombre de ciudad" />
      <button>Buscar</button>
    </form>
  );
}

export default Buscador;
