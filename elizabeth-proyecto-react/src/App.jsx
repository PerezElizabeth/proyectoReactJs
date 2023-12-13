import ArtistasFavoritos from "./componentes/ArtistasFavoritos/ArtistasFavoritos.jsx";
import Boton from "./componentes/Botones/Boton.jsx";
import "./App.css";
import React from "react";


const App = () => {
  const [cambio, setCambio] = React.useState(1);

  const cambiarArtista = () => {
    if (cambio === 3) {
      setCambio(1);
    } else {
      setCambio(cambio + 1);
    }
  };
  return (
    <div className="app">
      {cambio === 1 && (
        <ArtistasFavoritos
          nombre="Ricardo Arjona"
          descripcion="Edgar Ricardo Arjona Morales es un músico , cantautor, arreglista, actor
          y productor musical guatemalteco. Su estilo musical varía desde baladas
          a pop latino, rock, pop rock, música cubana, entre otros. Ha vendido más
          de 80 millones de copias de discos a lo largo de su carrera."
          imagen="ricardoArjona"
          cancion1="Tocando Fondo"
          cancion2="Me Enseñaste"
          cancion3="El Flechazo y La Secuela"
          cancion4="El Noticiero"
          cancion5="Ella"
          cancion6="Laura"
          cancion7="Asignatura Pendiente"
          cancion8="De Vez En Mes"
          cancion9="Te Acuerdas De Mi?"
          cancion10="No Te Cambio Por Nada"
        />
      )}
      {cambio === 2 && (
        <ArtistasFavoritos
          nombre="Adele"
          descripcion="Adele es considerada una de las artistas más exitosas de la industria
          musical, habiendo vendido más de 120 millones de discos en todo el
          mundo. Su estilo musical se caracteriza por su poderosa voz soul y su
          habilidad para escribir canciones emotivas que conectan con su
          audiencia."
          imagen="adele"
          cancion1="Set Fire To The Rain"
          cancion2="Love In The Dark"
          cancion3="Easy On Me"
          cancion4="Hello"
          cancion5="Rolling In The Deep"
          cancion6="Someone Like You"
          cancion7="One And Only "
          cancion8="Send My Love"
          cancion9="I Drink Wine"
          cancion10="Don't You Remember"
        />
      )}
      {cambio === 3 && (
        <ArtistasFavoritos
          nombre="Pink"
          descripcion="Alecia Beth Moore, más conocida por su nombre artístico Pink, es una
          cantante, compositora, bailarina, acróbata y actriz estadounidense."
          imagen="pink"
          cancion1="Just Give Me a Reason"
          cancion2="Try"
          cancion3="Fuckin Perfect"
          cancion4="Blow Me"
          cancion5="True Love"
          cancion6="Just Like A Pill"
          cancion7="Please Don't Leave Me"
          cancion8="Sober"
          cancion9="Who Knew"
          cancion10="Just Like Fire"
        />
      )}
      <Boton cambiarArtista={cambiarArtista} />
    </div>
  );
};

export default App;
