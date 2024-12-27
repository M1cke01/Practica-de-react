import React, { useState } from 'react';

const Formulario = ({ onGuardarDatos}) => {
    const [formulario, setFormulario] = useState ({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const cambio = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        onGuardarDatos(formulario);
        setFormulario({nombre: '', correo: '', mensaje: ''});
    };
    
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={cambio}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={cambio}
                placeholder='Correo'
                required
            />
            <textarea
                name="mensaje"
                value={formulario.mensaje}
                onChange={cambio}
                placeholder='Mensaje'
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;