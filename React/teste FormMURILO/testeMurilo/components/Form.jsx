import React, { useEffect, useState } from 'react'

export const Form = () => {
    const [imagem, setImagem] = useState(null);
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagem(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormularioEnviado(true);
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Enviar</button>
                </form>
                {formularioEnviado && imagem && <img src={imagem} alt="Imagem Selecionada" />}
            </div>
        </>

    )
}
