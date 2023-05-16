import ListaCards from '../../../Components/ListaArtigos'
import artigos from '../../../Assets/DadosExemplos/blog.json'

import { useState } from 'react'

import { FaPlus } from 'react-icons/fa'
import { AiOutlineFileImage } from 'react-icons/ai'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Modal from '../../../Components/Modal'
import Campo from '../../../Components/Campo'

import validator from 'validator'

import { ToastContainer, toast } from 'react-toastify';

export default function Artigos(){

    // Estados do modal:
    const [show, setShow] = useState(false);
    const handleToggle = () => show ? setShow(false) : setShow(true)

    const [conteudo, setConteudo] = useState('');
    const [errorConteudo, setErrorConteudo] = useState(null)

    const [titulo, setTitulo] = useState('')
    const [errorTitulo, setErrorTitulo] = useState(null)

    const [categoria, setCategoria] = useState('')

    const [imagem, setImagem] = useState('')
    const [errorImagem, setErrorImagem] = useState(null)

    function handleSubmit(e){

        e.preventDefault();

        if(validaTitulo() && validaImagem() && validaConteudo()){

            toast.success('Sucesso! Aguarde para ser direcionado.')

            

            // setTimeout(() => {
            //     window.location.href = '/blog/artigo'
            // }, 2500)
        }

        else toast.error('Algo deu errado! Revise os dados da matéria')
    }

    function validaTitulo(){
        //se for válido e não for vazio retorna true e remove o erro
        if(titulo !== '' && titulo !== null){
            setErrorTitulo(null)
            return true
        }

        //se cair aqui tem algo errado e entram as validações especificas
        else {
            if(titulo === '' || titulo === null || titulo === undefined){
                setErrorTitulo('Título é obrigatório!')
                return false
            }

            //Futuramente aqui terá outro if validando se o titulo ja existe na nossa base de dados
        }
    }

    function validaImagem(){
        //se for válido e não for vazio retorna true e remove o erro
        if(imagem !== '' && imagem !== null){
            setErrorImagem(null)
            return true
        }

        //se cair aqui tem algo errado e entram as validações especificas
        else {
            if(imagem === '' || imagem === null || imagem === undefined){
                setErrorImagem('Imagem é obrigatória!')
                return false
            }

            //Futuramente aqui terá outro if validando se o titulo ja existe na nossa base de dados
        }
    }

    function validaConteudo(){
        //se for válido e não for vazio retorna true e remove o erro
        if(conteudo !== '' && conteudo !== null){
            setErrorConteudo(null)
            return true
        }

        //se cair aqui tem algo errado e entram as validações especificas
        else {
            if(conteudo === '' || conteudo === null || conteudo === undefined){
                setErrorConteudo('Conteúdo é obrigatório!')
                return false
            }

            //Futuramente aqui terá outro if validando se o titulo ja existe na nossa base de dados
        }
    }

    return(
        <section className="conteudo_admin container">
            <div className='row'>
                <h1 className='line_after'>Artigos cadastrados</h1>

                <button className='btn btn_primary' onClick={handleToggle}> 
                    <FaPlus />
                     Novo artigo
                </button> 
            </div>

            <ToastContainer
                autoClose={2500}
                position="bottom-right"
            />

            <ListaCards 
                tipo="materia"
                admOptions
            />

            <Modal
                show={show}
                onClose={handleToggle}
                title={'Nova matéria'}
            >
                <form onSubmit={handleSubmit}>

                    <Campo
                        label="Título"
                        id="titulo"
                        placeholder="Digite o título da matéria"
                        type="text"
                        errorMsg={errorTitulo}
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />

                    <label htmlFor="categoria">Categoria</label>
                    <select 
                        id='categoria' 
                        className='wrap_input'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option>IPO</option>
                        <option>Educação financeira</option>
                        <option>Investimento</option>
                        <option>Bolsa de valores</option>
                    </select>

                    <Campo
                        label="Imagem destacada"
                        id="imagem"
                        type="file"
                        errorMsg={errorImagem}
                        value={imagem}
                        accept="image/png, image/gif, image/jpeg"
                        onChange={e => setImagem(e.target.value)}
                    />

                    {/* Editor do conteúdo do artigo */}
                    <label htmlFor="conteudo">Conteúdo</label>
                    <ReactQuill theme="snow" value={conteudo} onChange={setConteudo} id="conteudo" />
                    { errorConteudo != null && <span className='error' > {errorConteudo} </span> }

                    <div className='modal_footer'>
                        <button className="btn btn_tertiary" onClick={handleToggle}>Cancelar</button>
                        <button className="btn btn_primary" type='submit'>Cadastrar</button>
                    </div>
                </form>
            </Modal>

        </section>
    ) 
}