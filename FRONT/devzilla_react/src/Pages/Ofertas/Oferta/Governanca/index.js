
import default_profile from '../../../../Assets/Governanca/user.png'

import { useState, useEffect } from 'react'

import ReactLoading from 'react-loading'

export default function Governanca(props){

    const [governanca, setGovernanca] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8080/InvestiumAPI/rest/governanca/byEmpresa/${props.id}`)
        .then(resp => resp.json())
        .then((governanca) => { 
            setGovernanca(governanca)
            setLoading(false)
        })
        .catch(error => {
            console.error(error)
            setLoading(false)
        })
    }, [])

    return(
        <section className="container governanca" id="governanca">
            { loading ? 
            (
                <div className='wrap_loading'>
                    <ReactLoading type="spinningBubbles" color='#444'/>
                    <p>Carregando governança...</p>
                </div>
            ) 
            : 
            (
                <>
                    <h1 className="line_after">Diretoria (Governança)</h1>
                    <article>
                        { governanca.pessoasGovernanca.map((pessoa) => {
                            return (
                                <div key={pessoa.id}>
                                    <img src={default_profile} alt="" />
                                    <div>
                                        <p>{pessoa.nome}</p>
                                        <small>{pessoa.cargo}</small>
                                    </div>
                                </div>
                        )}) }
                    </article>
                </>
            )}
            
        </section>
    )
}