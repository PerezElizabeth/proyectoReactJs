import React from "react";

const Boton = (props) => {
  return (
    <button onClick={() => props.cambiarArtista()}>Siguiente Artista</button>
  );
};


export default Boton;
