import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../assets/img/img1.jpeg"
import img2 from "../../../assets/img/img2.jpeg"
import img3 from "../../../assets/img/img3.jpeg"
import "./css/CarruselImagen.css"
const CarruselImagen = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Imagen 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselImagen;
