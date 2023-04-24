import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { FloatingChatButton } from 'react-simple-chatbot';
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

  const steps = [
    {
      id: '1',
      message: 'Olá! Como posso ajudar?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: '1', label: 'Sobre nós', trigger: '3' },
        { value: '2', label: 'Contato', trigger: '4' },
        { value: '3', label: 'Suporte', trigger: '5' },
      ],
    },
    {
      id: '3',
      message: 'Somos uma empresa de tecnologia especializada em soluções de inteligência artificial.',
      end: true,
    },
    {
      id: '4',
      message: 'Nosso telefone é (11) 5555-5555 e nosso e-mail é contato@exemplo.com.',
      end: true,
    },
    {
      id: '5',
      message: 'Para suporte técnico, por favor, envie um e-mail para suporte@exemplo.com.',
      end: true,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Artigo />} path="/blog/artigo" />
          <Route element={<Ofertas />} path="/ofertas" />
          <Route element={<Oferta />} path="/ofertas/ipo" />
          <Route element={<Admin />} path="/admin/*" />
          <Route element={<Sobre />} path="/sobre" />
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<Login />} path="/login" />
          <Route element={<Perfil />} path="/perfil" />
        </Routes>

        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} floating={true} />
        </ThemeProvider>

        {/* <Switch>
        <Route path="/admin/dashboard" exact element={ <Dashboard /> }/>
        <Route path="/admin/comentarios" element={ <Comentarios /> }/>
        <Route path="/admin/artigos" element={ <Artigos /> }/>
        <Route path="/admin/ofertas" element={ <AdminOfertas /> }/>
      </Switch> */}
      </BrowserRouter>
    </>
  );
}