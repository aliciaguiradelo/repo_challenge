import { Route, Routes, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import { chatbot } from "./Assets/DadosExemplos/chatbot";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Artigo from "./Pages/Blog/Artigo";
import Ofertas from "./Pages/Ofertas";
import Oferta from "./Pages/Ofertas/Oferta";
import Admin from "./Pages/Admin";
import Sobre from "./Pages/Sobre";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createContext, useState } from "react";

import avatar from './Assets/Icons/avatar-dino.svg'

export const UserContext = createContext()

export default function App() {

  const theme = {
    background: '#fff',
    fontFamily: 'Nunito',
    headerBgColor: '#042B4D',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#042B4D',
    botFontColor: '#fff',
    userBubbleColor: 'rgb(210 234 255 / 98%)',
    userFontColor: '#042B4D',
    botAvatar: {avatar}
  };

  const [materiasCurtidas, setMateriasCurtidas] = useState([]);
  const [empresasCurtidas, setEmpresasCurtidas] = useState([]);
  const [user, setUser] = useState(null);

  const addMateriaCurtida = (materia) => {
    setMateriasCurtidas(prevMateria => [...prevMateria, materia]);
  };

  const removerMateriaCurtida = (materiaId) => {
    setMateriasCurtidas(prevMateria => prevMateria.filter(item => item.id !== materiaId));
  };

  const addEmpresaCurtida = (empresa) => {
    setEmpresasCurtidas(prevEmpresa => [...prevEmpresa, empresa]);
  };

  const removerEmpresaCurtida = (empresaId) => {
    setEmpresasCurtidas(prevEmpresa => prevEmpresa.filter(item => item.id !== empresaId));
  };

  const UserContextValue = {
    user,
    materiasCurtidas,
    setMateriasCurtidas,
    empresasCurtidas,
    setEmpresasCurtidas,
    setUser,
    addMateriaCurtida,
    removerMateriaCurtida,
    addEmpresaCurtida,
    removerEmpresaCurtida
  }

  return (
    <UserContext.Provider value={UserContextValue}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Artigo />} path="/blog/artigo/:id" />
          <Route element={<Ofertas />} path="/empresas" />
          <Route element={<Oferta />} path="/empresas/ipo/:id" />
          <Route element={<Admin />} path="/admin/*" />
          <Route element={<Sobre />} path="/sobre" />
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<Login />} path="/login" />
          <Route element={<Perfil />} path="/perfil" />
        </Routes>

        <ToastContainer
          autoClose={2500}
          position="bottom-right"
        />

      </BrowserRouter>
      
      <ThemeProvider theme={theme}>
          <ChatBot steps={chatbot} floating={true} />
        </ThemeProvider>
    </UserContext.Provider>
  );
}