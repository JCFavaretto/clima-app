import axios from "axios";
import { API_key } from "../apiData";

const BUSCAR = "BUSCAR";

const buscar = (data) => ({
  type: BUSCAR,
  data,
});

export const buscarAsc = (nombre) => (dispatch) => {
  axios(
    `http://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=${API_key}&units=metric`
  ).then((response) => dispatch(buscar(response.data)));
};
