import React, { useState } from "react";
import Encabezado from "./components/Forms/Encabezado";
import Formulario from "./components/Forms/Formulario";
import MostrarDatos from "./components/Forms/MostrarDatos";
import PieDePagina from "./components/Forms/Piedepagina";


const App = () => {
  const [datos, setDatos] = useState(null);

  const guardarDatos = (nuevosDatos) => {
    setDatos(nuevosDatos);
  };

  return (
    <div>
      <Encabezado />
      <Formulario onGuardarDatos={guardarDatos} />
      <MostrarDatos datos={datos} />
      <PieDePagina />
    </div>
  );
};

export default App;
