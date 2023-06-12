
import default_profile from '../../../../Assets/Governanca/user.png'

import { useQuery } from 'react-query'

import ReactLoading from 'react-loading'

export default function Governanca(props){

    // const [governanca, setGovernanca] = useState({})
    // const [loading, setLoading] = useState(true)

    const { isLoading, error, data: governanca } = useQuery(`governanca-${props.id}`, () =>
        fetch(`https://investium-api.herokuapp.com/governanca/byEmpresa/${props.id}`).then(res =>
        res.json()
        )
    )

    return(
        <section className="container governanca" id="governanca">
            { isLoading ? 
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