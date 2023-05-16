import { Tab, Tabs } from '@mui/material'
import { useState, useEffect } from 'react'

import { CgClose } from 'react-icons/cg'
import { TiTick } from 'react-icons/ti'

import Modal from '../../../Components/Modal'

import ReactLoading from 'react-loading';

// import comentarios from '../../../Assets/DadosExemplos/comentarios.json'

export default function Comentarios(){

    const [tabIndex, setTabIndex] = useState(0);

    const [comentarios, setComentarios] = useState([])
    const [loading, setLoading] = useState(true)

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    useEffect(() => {
        //Carregando os artigos
        fetch("http://localhost:8080/InvestiumAPI/rest/comentario")
          .then((resp) => resp.json())
          .then((data) => {
            setComentarios(data)
            setLoading(false)
          })
          .catch((error) => {
            console.error(error)
            setLoading(false)
          });

    }, []);

    // const comentPendentes = comentarios.filter(coment => coment.status == "pendente")
    // const comentAprovados = comentarios.filter(coment => coment.status == "aprovado")

    return(
        <section className="conteudo_admin container">
            <h1 className="line_after">Comentários</h1>

                { loading ? (
                    <div className='wrap_loading'>
                        <ReactLoading type="spinningBubbles" color='#444'/>
                        <p>Carregando comentários...</p>
                    </div>

                ) : (
                  <>
                    <Tabs value={tabIndex} onChange={handleTabChange} aria-label="basic tabs example">
                        <Tab label="Pendentes" />
                        <Tab label="Aprovados" />
                    </Tabs>

                        { tabIndex == 0 && (
                            <Table comentarios={comentarios} />
                        )}

                        { tabIndex == 1 && (
                            <Table comentarios={comentarios} />
                        )}
                  </>
                )}
            
        </section>
    ) 
}

function Table(props){

    const [showDelete, setShowDelete] = useState(false);
    const toggleDelete = () => showDelete ? setShowDelete(false) : setShowDelete(true)

    console.log(props)

    return(
        <>
            {/* Modal de excluir */}
            <Modal
                show={showDelete}
                onClose={toggleDelete}
                title={'Excluir comentário'}
            >
                <p style={{fontStyle: "italic"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, dolor quis accumsan porta, mi lorem rutrum arcu, sit amet rutrum ex odio quis odio. Donec dictum id urna at venenatis."</p>

                <p>Tem certeza que deseja excluir o comentário? Essa ação não poderá ser desfeita</p>

                <div className='modal_footer'>
                    <button className="btn btn_tertiary" onClick={toggleDelete}>Cancelar</button>
                    <button className="btn btn_primary" onClick={toggleDelete}>Excluir</button>
                </div>
            </Modal>

            <table>
                <thead><tr>
                    <th>
                        <input type="checkbox" />
                    </th>
                    <th>Usuário</th>
                    <th>Comentário</th>
                    <th>Post</th>
                    {/* { props.comentarios[0].status === 'pendente' &&
                        <th>Aprovar</th> } */}
                    <th>Excluir</th>
                </tr></thead>

                <tbody>
                    { props.comentarios.map((item) => {
                        return(
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td className='user'>{item.usuario}</td>
                                <td className='coment'>{item.conteudo}</td>
                                <td className='table_icon'>
                                    <a target="_blank" href={`/blog/artigo/${item.postagem.id}`}>{item.postagem.id}</a>
                                </td>
                                {/* { item.status === 'pendente' &&
                                    <td className='table_icon aprovar'> <TiTick /> </td> } */}
                                <td className='table_icon deletar' onClick={toggleDelete}> <CgClose /> </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </>
    )
}