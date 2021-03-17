import React from 'react'
import "./Endereco.css"

function Endereco({ end }) {
    return (
        <div className="endereco">
            <div>
                <label className="title">CEP</label>
                <label>{end.cep}</label>
            </div>
            <div>
                <label className="title">Logradouro</label>
                <label>{end.logradouro}</label>
            </div>
            <div >
                <label className="title">Localidade</label>
                <label>{end.localidade}</label>
            </div>
        </div>
    )
}

export default Endereco
