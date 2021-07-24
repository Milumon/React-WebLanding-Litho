import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { getCiudad } from "../services/firebase";

function Banner(props) {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getCiudad(setData);

  }, []);

  console.log(data)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="padded">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: "500px" }}
      >
        {data.map((ciudad) => (
            <Carousel.Item key={ciudad.id}>
              <img
                className="d-block w-100 carouselImg"
                src={ciudad.urlImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{ciudad.nombre} - {ciudad.pais}</h3>
                <p>
                  Moneda : {ciudad.moneda} <br/>
                  Población : {ciudad.poblacion} personas <br/>
                  Presidente: {ciudad.presidente} <br/>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Banner;
