import React, {useState} from 'react'
import axios from "axios";


function Busca({setEnd}) {

    const [cep, setCep] = useState("");

    const buscarEndereco = (cep) => {
        axios({
            method: "get",
            url: `https://viacep.com.br/ws/${cep}/json/`,
            data: cep,
            headers: { "content-type": "application/json" },
            json: true
        })
            .then(res => {
                if (res.status === 200) {
                    setEnd(res.data);
                }
            })
            .catch(error => {
                setEnd("");
                console.log(error);
            });
    }

    return (
        <div>
            <input type="text"
            value={cep}
            placeholder="Insira o CEP"
            onChange={(e)=>{ setCep(e.target.value)}}
            />
            <button type="submit"
             onClick={()=> buscarEndereco(cep)}
             >
                Buscar
            </button>

        </div>
    )
}

export default Busca
