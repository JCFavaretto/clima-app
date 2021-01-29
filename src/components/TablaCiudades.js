import React from "react";
import { useSelector } from "react-redux";

function TablaCiudades() {
  const ciudades = useSelector((state) => state.climaReducer);
  return (
    <table
      style={{
        margin: "0 auto",
        marginTop: "2rem",
        borderCollapse: "collapse",
        border: "1px solid",
      }}
    >
      <thead>
        <tr>
          <td>Ciudad</td>
          <td>Sensacion Termica</td>
          <td>Humedad</td>
          <td>Presion</td>
          <td>Temp.</td>
          <td>Max</td>
          <td>Min</td>
        </tr>
      </thead>
      <tbody>
        {ciudades.map((c) => {
          return (
            <tr key={c.name}>
              <td>{c.name}</td>
              <td>{c.main.feels_like} </td>
              <td>{c.main.humidity} </td>
              <td>{c.main.pressure} </td>
              <td>{c.main.temp} </td>
              <td>{c.main.temp_max} </td>
              <td>{c.main.temp_min} </td>
            </tr>
          );
        })}{" "}
      </tbody>
    </table>
  );
}

export default TablaCiudades;
