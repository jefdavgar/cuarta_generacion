import React from "react";

import img1 from "../../../assets/img/contacto.png";
import InicioContacto from "../../Organisms/InicioContacto/InicioContacto";
import MenuContacto from "../../Molecules/MenuContacto/MenuContacto";
const Contacto = () => {
  return (
    <>
      <MenuContacto />
      <div>
        <InicioContacto imagenFondo={img1} />
      </div>
    </>
  );
};

export default Contacto;
