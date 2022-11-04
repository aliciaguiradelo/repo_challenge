consulta="S"
while(consulta=="S"):    
    print("MENU DE FUNCIONALIDADES")
    print("1. Acessar informações em destaque na homepage \n"+
        "2. Acessar listagem das empresas \n"+
        "3. Acessar página de uma empresa escolhida \n"+
        "4. Acessar página do blog \n"+
        "5. Acessar página de um artigo \n"+
        "6. Fazer cadastro \n"+
        "7. Fazer Login \n"+
        "8. Obter informações gerais do usuário \n")
    opcao=int(input("Digite o número da opção desejada: \n"))
    if(opcao==1):
        print("SUB-MENU")
        print("1. Acessar informações em destaque na homepage \n")
        print("1.1 Acessar a homepage \n"+
            "1.2 Ver os artigos mais curtidos \n"+
            "1.3 Acessar o menu de navegação \n"+
            "1.4 Acessar IPO's em andamento recentemente publicados \n"+
            "1.5 Pesquisar por uma palavra-chave, IPO ou artigo na barra de pesquisa \n"+
            "1.6 Acessar página de cadastro e Login \n"+
            "1.7 Acessar página dos IPO's em andamento \n"+
            "1.8 Acessar página do blog \n"+
            "1.9 Acessar um artigo ou IPO que estiver sendo exibido em destaque \n")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
        
    elif(opcao==2):
        print("SUB-MENU")
        print("2. Acessar listagem das empresas \n")
        print("2.1 Acessar todas as empresas que possuem IPO's em andamento \n"+
            "2.2 Clicar em uma das empresas para obter mais informações sobre ela \n")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
    elif(opcao==3):
        print("SUB-MENU")
        print("3. Acessar página de uma empresa escolhida \n")
        print("3.1 Obter valores e governança da empresa \n"+
            "3.2 Obter vantagens competitivas dessa empresa \n"+
            "3.3 Obter índices e demonstrações financeiras"+
            "3.2 Obter setor de atuação da empresa \n"+
            "3.2 Obter balanços anuais \n")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
    elif(opcao==4):
        print("SUB-MENU")
        print("4. Acessar página do blog \n")
        print("4.1 Acessar todas as postagens em ordem cronológica(do mais recente para o mais antigo) \n"+
            "4.2 Filtrar a categoria e a palavras-chave do artigo \n"+
            "4.3 Pesquisar por uma palavra-chave ou artigo na barra de pesquisa \n"+
            "4.4 Acessar um artigo específico \n")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
    elif(opcao==5):
        print("SUB-MENU")
        print("5. Acessar página de um artigo \n")
        print("5.1 Visualizar artigo completo \n"+
              "5.2 Curtir artigo \n"+
              "5.3 Comentar artigo \n"+
              "5.4 Salvar artigo no perfil \n"+
              "5.5 Comentar um comentário de outro usuário \n")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
    elif(opcao==6):
        print("SUB-MENU")
        print("6. Fazer cadastro \n")
        print("6.1 Inserir email \n"+
              "6.2 Verificar se email já é cadastrado \n"+
              "6.3 Permitir o envio de notificações"+
              "6.4 Salvar cadastro")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
    elif(opcao==7):
        print("SUB-MENU")
        print("7. Fazer Login \n")
        print("7.1 Redefinir senha \n" + 
              "7.2Logar \n")
        subopcao=int(input("Digite o número da opção do sub-menu desejado:  \n"))
        consulta=input("Deseja realizar uma nova consulta?").upper()
    elif(opcao==8):
        print("SUB-MENU")
        print("8. Obter informações gerais do usuário \n")
        print("8.1 Obter dados de cadastro \n" +
              "8.2 Obter histórico de atividade (curtidas e comentários) \n"+
              "8.3 Obter artigos salvos no perfil \n" +
              "8.4 Editar perfil")
if (consulta=="N"):
    print("Obrigada!")