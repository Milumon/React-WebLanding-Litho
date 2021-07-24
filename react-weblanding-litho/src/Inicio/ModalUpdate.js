import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { editCiudades } from "../services/firebase";

export const ModalUpdate = (props) => {
  //Destructurando props
  const { dato } = props;
  const [ciudades, setCiudades] = useState(dato);

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const d = await editCiudades(
        ciudades.id,
        ciudades.nombre,
        ciudades.pais,
        ciudades.poblacion,
        ciudades.presidente,
        ciudades.moneda,
        ciudades.urlImage
      );
      console.log(d)
      handleClose();
    }catch(err) {console.log(err)}
    
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fas fa-edit"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <form className="formUpdateUser" onSubmit={handleSubmit}>
            <div className="sectiontwo">
              <div>
                <label> nombre </label>
              </div>
              <input
                name="nombre"
                type="text"
                autoComplete="off"
                defaultValue={ciudades.nombre}
                onChange={(e) => {
                  ciudades.nombre = e.target.value;
                }}
              />
            </div>

            <div className="sectiontwo">
              <div>
                <label htmlFor="inputRol">Pais</label>
              </div>
              <input
                name="pais"
                type="text"
                defaultValue={ciudades.pais}
                onChange={(e) => {
                  ciudades.pais = e.target.value;
                }}
              />
            </div>

            <div className="sectiontwo">
              <div>
                <label htmlFor="inputRol">Población</label>
              </div>
              <input
                name="pais"
                type="text"
                defaultValue={ciudades.poblacion}
                onChange={(e) => {
                  ciudades.poblacion = e.target.value;
                }}
              />
            </div>

            <div className="sectiontwo">
              <div>
                <label htmlFor="inputRol">presidente</label>
              </div>
              <input
                name="presidente"
                type="text"
                defaultValue={ciudades.presidente}
                onChange={(e) => {
                  ciudades.presidente = e.target.value;
                }}
              />
            </div>
            <div className="sectiontwo">
              <div>
                <label htmlFor="inputRol">moneda</label>
              </div>
              <input
                name="moneda"
                type="text"
                defaultValue={ciudades.moneda}
                onChange={(e) => {
                  ciudades.moneda = e.target.value;
                }}
              />
            </div>
            <div className="sectiontwo">
              <div>
                <label htmlFor="inputRol">Imagen</label>
              </div>
              <input
                name="urlImage"
                type="text"
                defaultValue={ciudades.urlImage}
                onChange={(e) => {
                  ciudades.urlImage = e.target.value;
                }}
              />
            </div>
            <button id="btn-submit-update" variant="primary" type="submit">
              Save Changes
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};