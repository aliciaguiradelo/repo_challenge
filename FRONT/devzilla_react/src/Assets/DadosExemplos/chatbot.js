export const chatbot = [
    {
      id: "1",
      message: "Olá! Como posso ajudar?",
      trigger: "2"
    },
    {
      id: "2",
      "options": [
        { value: "2", label: "Como começar a investir?", trigger: "3" },
        { value: "1", label: "Como melhorar minha vida financeira?", trigger: "6" },
        { value: "3", label: "Por que os dados financeiros das empresas são importante na hora de investir?", trigger: "4" },
        { value: "4", label: "Como entender um prospecto?", trigger: "5" }
      ]
    },
    {
      id: "3",
      component: (
        <div> Em nosso blog temos um artigo muito simples e explicativo sobre os 6 melhores investimentos para iniciantes e como investir do zero! 
            <a href="/blog/artigo/3">Saiba mais</a> 
        </div>
      ),
      asMessage: true,
      trigger: "7"
    },
    {
      id: "4",
      component: (
        <div> No nosso blog, disponibilizamos um artigo que é tanto simples quanto explicativo, abordando o significado de cada indicador financeiro e como compreendê-los!
            <a href="/blog/artigo/3">Saiba mais</a> 
        </div>
      ),
      asMessage: true,
      trigger: "7"
    },
    {
      id: "5",
      component: (
        <div> O prospecto pode ser um documento muito difícil de entender. Por isso criamos um artigo sobre isso em nosso blog para você entender com mais facilidade. 
            <a href="/blog/artigo/5">Saiba mais</a> 
        </div>
      ),
      asMessage: true,
      trigger: "7"
    },
    {
      id: "6",
      component: (
        <div> Sabemos que gerenciar as finanças não é um assunto fácil, pensando nisso criamos um artigo sobre como começar a melhorar suas finanças: 
            <a href="/blog/artigo/2">Saiba mais</a> 
        </div>
      ),
      asMessage: true,
      trigger: "7"
    },
    {
      id: "7",
      "options": [
        { value: "1", label: "Voltar ao menu", trigger: "2" }
      ]
    },
  ]