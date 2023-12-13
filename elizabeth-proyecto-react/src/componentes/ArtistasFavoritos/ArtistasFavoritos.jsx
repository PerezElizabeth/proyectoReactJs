import React from "react";

const ArtistasFavoritos = (props) => {
  return (
    <div className="app">
      <h1>{props.nombre}</h1>
      <img
        className="app-image"
        src={require(`../../imagenes/${props.imagen}.png`)}
        alt=""
      />
      <p className="paragraph">{props.descripcion}</p>
      <div className="containerCanciones">
        <h3>Canciones Favoritas</h3>
        <ul>
          <li>{props.cancion1}</li>
          <li>{props.cancion2}</li>
          <li>{props.cancion3}</li>
          <li>{props.cancion4}</li>
          <li>{props.cancion5}</li>
          <li>{props.cancion6}</li>
          <li>{props.cancion7}</li>
          <li>{props.cancion8}</li>
          <li>{props.cancion9}</li>
          <li>{props.cancion10}</li>
        </ul>
      </div>
    </div>
  );
};

export default ArtistasFavoritos;
