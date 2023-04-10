import './style.css'
import Button from "../../Button"
import atualizacao_icon from '../../../Assets/Icons/icon_arrow_down.svg'

import { VscEdit } from 'react-icons/vsc'
import { MdDeleteOutline, MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import { useState } from 'react'
import Modal from '../../Modal'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Step, Stepper, StepLabel } from '@mui/material'

export default function Card(props){
    const { tipo, dados, admOptions } = props

    return(
        tipo === 'materia' ? <Materia item={dados} admOptions={admOptions} /> : <IPO item={dados} admOptions={admOptions} />     
    )
}

function Materia(props){
    const { id, imagem, titulo, subtitulo } = props.item

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
                <a href="/blog/artigo" className='wrapper_img'>
                    <img src={require(`../../../Assets/Images/blog/${imagem}`)}/>

                    {/* Se ele for adm, mostra os campos de edição e exclusão */}
                    { props.admOptions && 
                        <> 
                            <MdDeleteOutline className='icon_opt delete' onClick={toggleModalDelete} /> 
                            <VscEdit className='icon_opt edit' onClick={toggleModalEdit}/>
                        </> }
                    
                </a>
                <div className="card_content" id={typeof(props.admOptions)}>
                    <h3 className="c_title">{titulo}</h3>
                    <small>{subtitulo}</small>

                    <div className='card_footer'>
                        <Button
                            link="/blog/artigo"
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

function IPO(props){
    const { id, imagem, nome, status, cor, valor, atualizacao } = props.item
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

    const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = ["Passo 1", "Passo 2", "Passo 3"];

  const handleNext = () => {
    let newSkipped = skipped;
  setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

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
                    title={'Excluir IPO'}
                >
                    <p>Tem certeza que deseja excluir essa IPO? <br /> Essa ação não poderá ser desfeita</p>

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

                <Stepper activeStep={activeStep} >
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                    </Stepper>

                    { activeStep === 0  ? (<Step1 />) : activeStep === 1 ? (<Step2 />) : <Step3 /> }
                    

                    {/* Editor do conteúdo do artigo */}
                    {/* <label for="conteudo">Conteúdo</label>
                    <ReactQuill theme="snow" value={conteudo} onChange={setConteudo} id="conteudo" /> */}

                    <div className='modal_footer'>
                        <button className="btn btn_tertiary" onClick={ activeStep === 2 || activeStep === 0 ? toggleModalEdit : handleBack }>
                            { activeStep === 2 || activeStep === 0 ? 'Cancelar' : 'Voltar'}
                        </button>

                        <button className="btn btn_primary" onClick={ activeStep === 2 ? toggleModalEdit : handleNext }>
                            { activeStep == 2 ? 'Cadastrar' : 'Continuar'}
                        </button>
                    </div>
                </Modal>

            </> }

        <article className="card ipo">
            <div className="card_content">
                <a href="/ofertas/ipo" className='wrap_img' style={{background: cor}}>
                    <img src={require(`../../../Assets/Images/ipo/${imagem}`)} className="logo"/>
                </a>

                <h3 className="c_title">{nome}</h3>
                <small className={status}>{status}</small>
                <p className='valor'><span>R$</span>{valor}</p>

                {/* Se ele for adm, mostra os campos de edição e exclusão */}
                { props.admOptions && 
                    <> 
                        <MdDeleteOutline className='icon_opt delete' onClick={toggleModalDelete} /> 
                        <VscEdit className='icon_opt edit' onClick={toggleModalEdit}/> 
                    </> }

                {<> {icon} </>}

                {/* <span className={atualizacao[0]+ ' atualizacao'}>
                    <img src={atualizacao_icon} />
                    {atualizacao[1]}
                </span> */}

                <Button
                    link="/ofertas/ipo"
                    icon_name="arrow"
                    texto="mais detalhes"
                    style="secondary"
                />
                
            </div>
        </article>
        </>
    )
}

function Step1(){
    return(
        <div>
            <label htmlFor="titulo">Título</label>
                <div className="wrap_input">
                    <input type="text" placeholder="Digite o nome da empresa" id="empresa" />
                </div>

                <div className='row'>
                    <div>
                        <label htmlFor="valor">Valor inicial (R$)</label>
                        <div className="wrap_input">
                            <input type="number" placeholder="Digite o valor inicial da IPO" id="valor" min={1}/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="setor">Setor</label>
                        <select id='setor' className='wrap_input'>
                            <option>Alimentício</option>
                            <option>Bancário</option>
                            <option>Agronegócio</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div>
                        <label htmlFor="valor">CNPJ</label>
                        <div className="wrap_input">
                            <input type="text" placeholder="Digite o CNPJ da empresa" id="cnpj"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="status">Status</label>
                        <select id='status' className='wrap_input'>
                            <option>Ativa</option>
                            <option>Finalizada</option>
                        </select>
                    </div>
                </div>

                <label for="prospecto">
                    {/* <AiOutlineFileImage /> */}
                    Prospecto
                </label>
                <div className='wrap_input'>
                    <input type="file" id="prospecto" class="file_input" />
                </div>
        </div>
    )
}

function Step2(){
    return(
        <div>
            <h2>Membros da diretoria: </h2>
            <label htmlFor="nome_membro">Nome</label>
                <div className="wrap_input">
                    <input type="text" placeholder="Digite o nome do membro da diretoria" id="nome_membro" />
                </div>

                <div className='row'>
                    <div>
                        <label htmlFor="cargo">Cargo</label>
                        <div className="wrap_input">
                            <input type="text" placeholder="Digite o cargo do membro" id="cargo"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="imagem">
                            {/* <AiOutlineFileImage /> */}
                            Imagem de perfil
                        </label>
                        <div className='wrap_input'>
                            <input type="file" id="imagem" class="file_input" />
                        </div>
                    </div>
                </div>

                <button class="btn btn_primary" style={{marginBottom: "1.5em"}}>Cadastrar membro</button>

                <label for="conteudo">Sobre a empresa</label>
                <ReactQuill theme="snow" id="sobre" />
        </div>
    )
}

function Step3(){
    return(
        <div>
            <label for="destino">Destino dos recursos:</label>
            <ReactQuill theme="snow" id="destino" style={{marginBottom: "1em"}} />

            <label htmlFor="indicadores">
                Indicadores financeiros <a href='#'>(acesse o modelo de planilha aqui.)</a> 
            </label>
            <div className='wrap_input'>
                <input type="file" id="indicadores" class="file_input" />
            </div>

            <label htmlFor="indicadores">
                Balanços patrimoniais ativos <a href='#'>(acesse o modelo de planilha aqui.)</a> 
            </label>
            <div className='wrap_input'>
                <input type="file" id="indicadores" class="file_input" />
            </div>

            <label htmlFor="indicadores">
                Balanços patrimoniais passivos <a href='#'>(acesse o modelo de planilha aqui.)</a> 
            </label>
            <div className='wrap_input'>
                <input type="file" id="indicadores" class="file_input" />
            </div>         
        </div>
    )
}