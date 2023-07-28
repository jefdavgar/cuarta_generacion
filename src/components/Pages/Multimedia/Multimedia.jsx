import React from "react";
import InicioMultimedia from "../../Organisms/InicioMultimedia/InicioMultimedia";
import MenuContacto from "../../Molecules/MenuContacto/MenuContacto";
import img1 from "../../../assets/img/HomeHeader.jpg";
const Multimedia = () => {
    return (
        <>
            <MenuContacto></MenuContacto>
            <InicioMultimedia imagenFondo={img1}></InicioMultimedia>
        </>
    );
};

export default Multimedia;
