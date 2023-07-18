import React from "react";
import MenuNav from "../../Molecules/MenuNav/MenuNav";
import InicioSeccion1 from "../../Organisms/InicioSeccion1/InicioSeccion1";
import img1 from "../../../assets/img/HomeHeader.png";
const Inicio = () => {
  return (
    <>
      <MenuNav />
      <div>
        <InicioSeccion1 imagenFondo={img1} />
      </div>
    </>
  );
};

export default Inicio;
