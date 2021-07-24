import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getCiudad, createCiudad, deleteCiudad } from "../services/firebase";
import { ModalUpdate } from "./ModalUpdate";

function TableComponent(props) {
  const [ciudad, setCiudad] = useState([]);

  const [datos, setDatos] = useState({
    nombre: "",
    pais: "",
    poblacion: "",
    presidente: "",
    moneda: ""
  });

  useEffect(() => {
    getCiudad(setCiudad);
  }, []);

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    createCiudad(datos);
  };
  
  const handleShowAlert = async (userId) => {
    if (window.confirm("Usted está seguro de eliminar este usuario?")) {
      await deleteCiudad(userId);
    }
  };

  return (
    <div className="container">
      <form onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="nombre"
          onChange={handleInputChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="país"
          onChange={handleInputChange}
          name="pais"
        />
        <input
          type="text"
          placeholder="población"
          onChange={handleInputChange}
          name="poblacion"
        />
        <input
          type="text"
          placeholder="presidente"
          onChange={handleInputChange}
          name="presidente"
        />
        <input
          type="text"
          placeholder="moneda"
          onChange={handleInputChange}
          name="moneda"
        />
        <input
          type="text"
          placeholder="image"
          onChange={handleInputChange}
          name="image"
        />
        <button type="submit"> + Añadir ciudad</button>
      </form>
 
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>PAIS</th>
            <th>POBLACION</th>
            <th>PRESIDENTE</th>
            <th>Moneda</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ciudad.map((dato, index) => (
            <tr key={dato.id}>
              <td>{index + 1}</td>
              <td>{dato.nombre}</td>
              <td>{dato.pais}</td>
              <td>{dato.poblacion}</td>
              <td>{dato.presidente}</td>
              <td>{dato.moneda}</td>
              <td>{dato.urlImage}</td>
              <td>
                <ModalUpdate dato={dato} />
              </td>
              <td>
                <button onClick={() => handleShowAlert(dato.id)}>borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;