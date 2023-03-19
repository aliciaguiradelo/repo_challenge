import ListaCards from '../../../Components/ListaArtigos'
import ipos from '../../../Assets/DadosExemplos/ipos.json'

import { useState } from 'react'

import { FaPlus } from 'react-icons/fa'
import { AiOutlineFileImage } from 'react-icons/ai'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Modal from '../../../Components/Modal'

import { Step, Stepper, StepLabel } from '@mui/material'

export default function Ofertas(props){
    // Estados do modal:
    const [show, setShow] = useState(false);
    const handleToggle = () => show ? setShow(false) : setShow(true)

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
  const handleSkip = () => {
  setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };


    return(
        <section className="conteudo_admin container">
            <div className='row'>
                <h1 className='line_after'>IPOs cadastradas</h1>

                <button className='btn btn_primary' onClick={handleToggle}> 
                    <FaPlus />
                     Nova IPO
                </button> 
            </div>

            <ListaCards 
                tipo="ofertas"
                dados={ipos}
                admOptions
            />

            <Modal
                show={show}
                onClose={handleToggle}
                title={'Nova IPO'}
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
                    <button className="btn btn_tertiary" onClick={ activeStep === 2 || activeStep === 0 ? handleToggle : handleBack }>
                        { activeStep === 2 || activeStep === 0 ? 'Cancelar' : 'Voltar'}
                    </button>

                    <button className="btn btn_primary" onClick={ activeStep === 2 ? handleToggle : handleNext }>
                        { activeStep == 2 ? 'Cadastrar' : 'Continuar'}
                    </button>
                </div>
            </Modal>

        </section>
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