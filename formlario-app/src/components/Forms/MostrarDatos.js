import React from 'react';

const MostrarDatos = ({ datos }) => {
    if (!datos) return <p>No hay datos ingresados</p>;

    return (
        <div>
            <h2>Datos Ingresados:</h2>
            <p><strong>Nombre:</strong> {datos.nombre} </p>
            <p><strong>Correo:</strong> {datos.correo} </p>
            <p><strong>Mensaje:</strong> {datos.mensaje} </p>
        </div>
    );
};

export default MostrarDatos;