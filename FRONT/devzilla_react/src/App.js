import { Route, Routes, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import chatbot from './Assets/DadosExemplos/chatbot.json'

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

export default function App() {

  const theme = {
    background: '#fff',
    headerBgColor: '#042B4D',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#042B4D',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#042B4D',
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Artigo />} path="/blog/artigo" />
          <Route element={<Ofertas />} path="/empresas" />
          <Route element={<Oferta />} path="/empresas/ipo" />
          <Route element={<Admin />} path="/admin/*" />
          <Route element={<Sobre />} path="/sobre" />
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<Login />} path="/login" />
          <Route element={<Perfil />} path="/perfil" />
        </Routes>

        <ThemeProvider theme={theme}>
          <ChatBot steps={chatbot} floating={true} />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}