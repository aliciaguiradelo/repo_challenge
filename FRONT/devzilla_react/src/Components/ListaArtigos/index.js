import './style.css'
import Card from './Card'
import CardEmpresa from './CardEmpresa'
import Button from '../Button'
import { useEffect, useState } from 'react'

import ReactLoading from 'react-loading';

export default function ListaCards(props){
    const { tipo, botao, admOptions, max } = props

    const [dados, setDados] = useState(props.dados)
    const [loading, setLoading] = useState(true)

    //Se nenhum dado for passado, pegar os dados na API
    useEffect(() => {
        if(!dados){
            const path = tipo === 'materia' ? 'postagem' : 'empresa'
            //Carregando os artigos ou empresas
            fetch(`http://localhost:8080/InvestiumAPI/rest/${path}`)
            .then((resp) => resp.json())
            .then((data) => {
                { max ? setDados(data.slice(0, max)) : setDados(data) }
                setLoading(false)
            })
            .catch((error) => console.error(error));
        }

        else setLoading(false)
    }, [])

    // if(!dados){
    //     const { isLoading, error, data } = useQuery('repoData', () =>
    //         fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
    //         res.json()
    //         .then(data => setDados(data))
    //         )
    //     )
    // }

    return(
        <section className="container bg_gray">   
            <h1 className="line_after">{ tipo == 'materia' ? 'Matérias' : 'Empresas (IPOs)' }</h1>

            { loading ? (
                <div className='wrap_loading'>
                    <ReactLoading type="spinningBubbles" color='#444'/>
                    <p>Carregando dados...</p>
                </div>

                ) : (

                <div className="lista_cards">
                    { tipo === 'materia' ? (
                        dados.map((artigo) => {
                            return(
                                <Card 
                                    key={artigo.id}
                                    tipo={tipo}
                                    dados={artigo}
                                    admOptions={admOptions}
                                />
                            )
                        }) ) :
                    (
                        dados.map((empresa) => {
                            return(
                                <CardEmpresa 
                                    key={empresa.id}
                                    tipo={tipo}
                                    dados={empresa}
                                    admOptions={admOptions}
                                />
                            )
                        }) )
                    }
                </div>
            )}

            { botao && 
                <Button
                    link={tipo === 'materia' ? '/blog' : '/empresas'}
                    icon_name="arrow_long"
                    texto="Ver todas"
                    style="secondary"
                />  
            }
        </section>
    )
}