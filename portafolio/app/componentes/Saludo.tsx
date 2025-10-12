import React from "react";

const Saludo: React.FC<{ nombre: string}> = ({ nombre })=> {
    const mensaje = `Hola, ${nombre}`;
    return <h1>{mensaje}</h1>;
};
 export default Saludo;
