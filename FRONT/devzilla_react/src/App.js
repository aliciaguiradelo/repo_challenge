import './style.css'

import Footer from './Components/Footer';
import Header from './Components/Header';
import Banner from './Components/Banner';
import BannerSlider from './Components/Slider';

import IllustrQuemSomos from './Assets/Illustrations/illustr_quem_somos.svg'

export default function App() {
  return (
    <div>
      <Header />

      <main>
        
        <BannerSlider
          banners={[
            <Banner titulo="Todos os IPOs em um só lugar" />,
            <Banner titulo="Todos os IPOs em um só lugar" />,
            <Banner titulo="Todos os IPOs em um só lugar" />
          ]}
        />

        <Section1 />
        <Section2 />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

function Section1(){
  return(
    <section class="row container" id="section1">
      <div class="column">
        <img src={IllustrQuemSomos} />
      </div>
      
      <div class="column">
        <h1 class="line_after">Quem Somos</h1>
        <p class="width_80">Nosso principal objetivo é facilitar o acesso a <strong>informações relevantes sobre ofertas públicas iniciais.
        </strong></p>
        <a href="sobre_nos.html" class="btn btn_primary arrow">Ler Mais</a>
      </div>
    </section>
  )
}

function Section2(){
  return(
    <section class="bg_gray">
      <div class="container width_80">
        <h1>Nosso Blog</h1>
        <p>Quer entender melhor o mundo dos <strong>investimentos?</strong> Acesse nossos <strong>artigos</strong> e fique por dentro dos termos usados e das <strong>ofertas públicas</strong> que iniciarem! </p>
        <a href="blog.html" class="btn btn_primary arrow">Saiba Mais</a>
      </div>
    </section>
  )
}

function Newsletter(){
  return(
    <section class="bg_gray">
      <div class="container" id="newsletter">
        <h1>Receba as novidades por e-mail</h1>
        <p>Dessa forma você ficará por dentro de <strong>todas as notícias</strong> </p>
        <input type="email" placeholder="Seu endereço de e-mail" />
        <a href="#" class="btn btn_primary arrow">cadastrar</a>
      </div>
    </section>
  )
}