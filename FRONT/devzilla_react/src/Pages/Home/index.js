import './style.css'

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import BannerSlider from '../../Components/Slider';
import Button from '../../Components/Button';
import ListaCards from '../../Components/ListaArtigos';

import artigos from '../../Assets/DadosExemplos/blog.json'
import ipos from '../../Assets/DadosExemplos/ipos.json'

import IllustrBlog from '../../Assets/Illustrations/illustr_quem_somos.svg'
import IllustrIPO from '../../Assets/Illustrations/illustr_investing.svg'

// import ChatBot from 'react-simple-chatbot';

export default function App() {
  return (
    <div>
      <Header />

      <main>
        
        <BannerSlider
          banners={[
            <Banner titulo="Todos os IPOs disponíveis em um só lugar!" />,
            <Banner titulo="Todos os IPOs em um só lugar" />,
            <Banner titulo="Todos os IPOs em um só lugar" />
          ]}
        />

        <Section1 />
        <ListaCards dados={ipos.slice(0, 4)} tipo="ipo" botao/>

        <Section2 />
        <ListaCards dados={artigos.slice(0, 3)} tipo="materia" botao admOptions={false} />

        <Newsletter />
        
        {/* <ChatBot
          id="chatbot"
          steps={[
            {
              id: 'hello-world',
              message: 'Olá! Como posso te ajudar?',
              end: true,
            },
          ]}
        /> */}
      </main>

      <Footer />
    </div>
  );
}

function Section1(){
  return(
    <section className="row container" id="section1">
      <div className="column">
        <img src={IllustrIPO} />
      </div>
      
      <div className="column">
        <h1 className="line_before">Quem Somos</h1>
        <p className="width_80">Nosso principal objetivo é facilitar o acesso a <strong>informações relevantes sobre ofertas públicas iniciais.</strong> Aqui você acessa todas as ofertas disponíveis e pode <strong>comparar entre elas para investir com mais confiança.</strong>
        </p>

        <Button 
          link="ofertas"
          icon_name="arrow"
          texto="ofertas disponíveis"
        />
      </div>
    </section>
  )
}

function Section2(){
  return(
    <section className="row container" id="section2">

      <div className="column">
        <h1 className="line_before">Nosso Blog</h1>
        <p>Quer entender melhor o mundo dos <strong>investimentos?</strong> Acesse nossos artigos e fique por dentro! Nossa missão é <strong>facilitar o assunto</strong> e te ajudar a ir da organização financeira até o mundo dos investimentos!
        </p>

        <Button 
          link="sobre_nos"
          icon_name="arrow"
          texto="ler mais"
        />
      </div>

      <div className="column">
        <img src={IllustrBlog} />
      </div>
    </section>
  )
}

function Newsletter(){
  return(
    <section>
      <div className="container" id="newsletter">
        <h1 className='line_before'>Receba as novidades por e-mail</h1>
        <p>Dessa forma você ficará por dentro de <strong>todas as notícias</strong> </p>
        <input type="email" placeholder="Seu endereço de e-mail" />

        <Button 
          link="sobre_nos"
          icon_name="arrow"
          texto="cadastrar"
        />

      </div>
    </section>
  )
}