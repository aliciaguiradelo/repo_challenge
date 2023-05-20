import { useState, useEffect, useContext } from "react"

import ReactLoading from 'react-loading'

import { ComparacaoContext } from "../../CompararIPOs"

export default function SelecaoOferta({ id }){

    const [empresas, setEmpresas] = useState([])
    const [oferta1, setOferta1] = useState({})
    const [oferta2, setOferta2] = useState({})
    const [selecao, setSelecao] = useState('')
    const [loading, setLoading] = useState(true)

    const { setOfertas } = useContext(ComparacaoContext)

    useEffect(() => {
        fetch('http://localhost:8080/InvestiumAPI/rest/empresa')
        .then(resp => resp.json())
        .then(empresas => {
            setOferta1(empresas.find((empresa) => empresa.id === id))
            setOferta2(empresas.find((empresa) => empresa.id === id + 1))
            setEmpresas(empresas.filter((empresa) => empresa.id !== id))
            setLoading(false)
        })
        .then(error => {
            console.error(error)
            setLoading(false)
        })

        setOfertas([oferta1, oferta2])

    }, [id])

    useEffect(() => {

        setOferta2(empresas.find((empresa) => empresa.nome === selecao))
        setOfertas([oferta1, oferta2])

    }, [selecao])

    return(
        <div className='wrap_options' onChange={(e) => setSelecao(e.target.value)} value={selecao}>
            { loading ? (
                <div>
                    <ReactLoading type="spinningBubbles" color='#444'/>
                    <p>Carregando empresas...</p>
                </div>
            ) : (
                <>
                    { empresas.map((ipo, index) => {
                        return(
                            <label key={ipo.id}>

                                <input 
                                    type="radio" 
                                    name="empresa" 
                                    value={ipo.nome} 
                                    defaultChecked={index == 0}
                                    onChange={(e) => setSelecao(e.target.value)} />

                                <div className="option wrap_img" style={{background: ipo.cor }}>
                                    <span className='logo' style={{backgroundImage: `url(${ipo.imagem})`}} />
                                    <h3>{ipo.nome}</h3>
                                </div>

                            </label>
                        )
                    })}
                </>
            )}
        </div>
    )
}