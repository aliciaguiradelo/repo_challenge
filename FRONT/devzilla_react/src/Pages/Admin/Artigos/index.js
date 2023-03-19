import ListaCards from '../../../Components/ListaArtigos'
import artigos from '../../../Assets/DadosExemplos/blog.json'

import { useState } from 'react'

import { FaPlus } from 'react-icons/fa'
import { AiOutlineFileImage } from 'react-icons/ai'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Modal from '../../../Components/Modal'

export default function Artigos(){

    // Estados do modal:
    const [show, setShow] = useState(false);
    const handleToggle = () => show ? setShow(false) : setShow(true)

    const [conteudo, setConteudo] = useState('');

    return(
        <section className="conteudo_admin container">
            <div className='row'>
                <h1 className='line_after'>Artigos cadastrados</h1>

                <button className='btn btn_primary' onClick={handleToggle}> 
                    <FaPlus />
                     Novo artigo
                </button> 
            </div>

            <ListaCards 
                tipo="materia"
                dados={artigos}
                admOptions
            />

            <Modal
                show={show}
                onClose={handleToggle}
                title={'Nova matéria'}
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
                <ReactQuill theme="snow" value={conteudo} onChange={setConteudo} id="conteudo" />

                <div className='modal_footer'>
                    <button className="btn btn_tertiary" onClick={handleToggle}>Cancelar</button>
                    <button className="btn btn_primary" onClick={handleToggle}>Cadastrar</button>
                </div>
            </Modal>

        </section>
    ) 
}