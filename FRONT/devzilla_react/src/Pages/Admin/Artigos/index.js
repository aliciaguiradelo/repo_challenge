import ListaCards from '../../../Components/ListaArtigos'
import artigos from '../../../Assets/DadosExemplos/blog.json'

import { FaPlus } from 'react-icons/fa'

export default function Artigos(){
    return(
        <section className="conteudo_admin container">
            <div className='row'>
                <h1 className='line_after'>Artigos cadastrados</h1>

                <button className='btn btn_primary'> 
                    <FaPlus />
                     Novo artigo
                </button> 
            </div>

            <ListaCards 
                tipo="materia"
                dados={artigos}
                adm
            />

        </section>
    ) 
}