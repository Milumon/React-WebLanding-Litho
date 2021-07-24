import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { getCiudad } from '../services/firebase';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'


function Fichas(props) {


    const [ data, setData] = useState([])
    const [show, setShow] = useState(false);
    const [ dataModal, setDataModal] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showFormUpdate = (ciudad) => {
        setShow(true)
        setDataModal(ciudad)
    };

 
    console.log(data)
    useEffect(() => {
        getCiudad(setData);
    
      }, []);


    return (
        <div>

        <section className="padded">
            <div style={{width:"200px" }} 
                className="container ">

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dataModal.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Image src={dataModal.urlImage} fluid /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   

                
        {data.map((ciudad) => (

            
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={ciudad.urlImage} />
            <Card.Body>
                <Card.Title>{ciudad.nombre}</Card.Title>
                <Card.Text>
                <p>{ciudad.poblacion} </p>
                <p>{ciudad.pais} </p>
                <p>{ciudad.presidente} </p>
                <p>{ciudad.moneda} </p>

                </Card.Text>
                <Button variant="primary"  onClick={() => showFormUpdate(ciudad)}>Go somewhere</Button>
            </Card.Body>
            </Card>

            
          ))}

          

            </div>
            </section>
        </div>
    );
}

export default Fichas;