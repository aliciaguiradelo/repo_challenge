import './style.css'
import Button from "../../Button"

import { VscEdit } from 'react-icons/vsc'
import { MdDeleteOutline, MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md'

import { useState } from 'react'
import Modal from '../../Modal'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Card(props){
    const { dados, admOptions } = props

    return(<Materia item={dados} admOptions={admOptions} />)
}

function Materia(props){
    const { id, imgUrl, titulo, conteudo } = props.item

    const [showEdit, setShowEdit] = useState(false)
    const toggleModalEdit = (e) => { 
        e.preventDefault()
        showEdit ? setShowEdit(false) : setShowEdit(true)
    }

    const [showDelete, setShowDelete] = useState(false)

    const toggleModalDelete = (e) => {
        e.preventDefault();
        showDelete ? setShowDelete(false) : setShowDelete(true);
    }
    
    function handleSave() {
        setSaved(isSaved ? false : true)
        if (isSaved) return ( <MdOutlineBookmark className = 'icon_opt save' /> )
        else return ( <MdOutlineBookmarkBorder className = 'icon_opt save' /> )
    }

    const [isSaved, setSaved] = useState(false)
    const [icon, setIcon] = useState(handleSave)

    return(
        <>
            { props.admOptions && 
                <> 
                    {/* Modal de confirmação de exclusão */}
                    <Modal
                        show={showDelete}
                        onClose={toggleModalDelete}
                        title={'Excluir matéria'}
                    >
                        <p>Tem certeza que deseja excluir essa matéria? <br /> Essa ação não poderá ser desfeita</p>

                        <div className='modal_footer'>
                            <button className="btn btn_tertiary" onClick={toggleModalDelete}>Cancelar</button>
                            <button className="btn btn_primary" onClick={toggleModalDelete}>Excluir</button>
                        </div>
                    </Modal>

                    {/* Modal de edição */}
                    <Modal
                        show={showEdit}
                        onClose={toggleModalEdit}
                        title={'Editar matéria'}
                    >

                        <label for="titulo">Título</label>
                        <div class="wrap_input">
                            <input type="text" placeholder="Digite o título da matéria" id="titulo" />
                        </div>

                        <label for="categoria">Categoria</label>
                        <select id='categoria' className='wrap_input'>
                            <option>IPO</option>
                            <option>Educação financeira</option>
                            <option>Investimento</option>
                            <option>Bolsa de valores</option>
                        </select>

                        <label class="file-input__label" for="imagem">
                            {/* <AiOutlineFileImage /> */}
                            Imagem destacada
                        </label>
                        <div className='wrap_input'>
                            <input type="file" id="imagem" class="file_input" />
                        </div>

                        {/* Editor do conteúdo do artigo */}
                        <label for="conteudo">Conteúdo</label>
                        <ReactQuill theme="snow" id="conteudo" />

                        <div className='modal_footer'>
                            <button className="btn btn_tertiary" onClick={toggleModalEdit}>Cancelar</button>
                            <button className="btn btn_primary" onClick={toggleModalEdit}>Salvar</button>
                        </div>
                    </Modal>

                </> }

            <article className="card artigo">
                <a href={`/blog/artigo/${id}`} className='wrapper_img'>
                    <img src={require(`../../../Assets/Images/blog/${imgUrl}`)}/>

                    {/* Se ele for adm, mostra os campos de edição e exclusão */}
                    { props.admOptions && 
                        <> 
                            <MdDeleteOutline className='icon_opt delete' onClick={toggleModalDelete} /> 
                            <VscEdit className='icon_opt edit' onClick={toggleModalEdit}/>
                        </> }
                    
                </a>
                <div className="card_content" id={typeof(props.admOptions)}>
                    <h3 className="c_title">{titulo}</h3>
                    <small>{conteudo}</small>

                    <div className='card_footer'>
                        <Button
                            link={`/blog/artigo/${id}`}
                            icon_name="arrow"
                            texto="ler mais"
                            style="secondary"
                        />
                        <> {icon} </>
                    </div>
                </div>
            </article>
        </>
    )
}