tipousuario=input("Você é um administrador ou usuário? Digite A ou U: ").upper()
undersubopcao=0
if (tipousuario=="A"):
    consulta="S"
    while(consulta=="S"):
        print("MENU DE FUNCIONALIDADES ADMINISTRADOR")
        print("1. Administrar blog \n"+
              "2. Administrar empresas \n"+
              "3. Administrar cadastros \n"+
              "4. Acessar dashboards \n")
        opcao=int(input("Digite a opção desejada: \n"))
        while (opcao>4) or (opcao<1):
            opcao=int(input("Digite uma opção válida: \n"))
        if (opcao==1):
            print("SUB-MENU")
            print(" --- ADMINISTRAR BLOG --- \n")
            print("1 Postar novo artigo \n"+
                  "2 Editar artigo \n"+
                  "3 Excluir artigo \n"+
                  "4 Vincular artigo à categoria \n"+
                  "5 Cadastrar nova categoria \n"+
                  "6 Excluir comentário de usuários \n")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>6):
                subopcao=int(input("Digite um sub-menu válido:  \n"))
            if(subopcao==1):
                print("Funcionalidade postar artigo")
            elif(subopcao==2):
                print("Funcionalidade editar artigo")
            elif(subopcao==3):
                print("Funcionalidade excluir artigo")
            elif(subopcao==4):
                print("Funcionalidade vincular artigo à categoria")
            elif(subopcao==5):
                print("Funcionalidade cadastrar nova categoria")
            else:
                print("Funcionalidade excluir comentário de usuários")
            consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
        elif(opcao==2):
            print("SUB-MENU")
            print(" --- ADMINISTRAR EMPRESAS --- \n")
            print("1 Cadastrar nova empresa \n"+
                  "2 Editar empresa \n"+
                  "3 Excluir empresa \n"+
                  "4 Vincular empresa à IPO \n"+
                  "5 Cadastrar novo IPO \n"+
                  "6 Editar IPO \n"+
                  "7 Excluir IPO")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>7):
                subopcao=int(input("Digite um sub-menu válido:  \n"))
            if(subopcao==1):
                print("Funcionalidade cadastrar nova empresa")
            elif(subopcao==2):
                print("Funcionalidade editar empresa")
            elif(subopcao==3):
                print("Funcionalidade excluir empresa")
            elif(subopcao==4):
                print("Funcionalidade vincular empresa à IPO")
            elif(subopcao==5):
                print("Funcionalidade cadastrar novo IPO")
            elif(subopcao==6):
                print("Funcionalidade editar IPO")
            else:
                print("Funcionalidade excluir IPO")
            consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
        elif(opcao==3):
            print("SUB-MENU")
            print(" --- ADMINISTRAR CADASTROS --- \n")
            print("1 Acessar cadastro \n"+
                  "2 Editar cadastro \n"+
                  "3 Excluir cadastro \n"+
                  "4 Ressetar senha \n")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>4):
                subopcao=int(input("Digite um sub-menu válido:  \n"))
            if(subopcao==1):
                print("Funcionalidade acessar cadastro")
            elif(subopcao==2):
                print("Funcionalidade editar cadastro")
            elif(subopcao==3):
                print("Funcionalidade excluir cadastro")
            else:
                print("Funcionalidade ressetar senha")
            consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
        else:
            print("SUB-MENU")
            print(" --- ACESSAR DASHBOARDS --- \n")
            print("1 Visualizar dashboards \n"+
                  "2 Editar dashboards \n"+
                  "3 Excluir dashboards \n"+
                  "4 Gerar relatório dos dados \n")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>4):
                subopcao=int(input("Digite um sub-menu válido:  \n"))
            if(subopcao==1):
                print("Funcionalidade visualizar dashboards")
            elif(subopcao==2):
                print("Funcionalidade editar dashboards")
            elif(subopcao==3):
                print("Funcionalidade excluir dashboards")
            else:
                print("Funcionalidade gerar relatório dos dados")
            consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
elif (tipousuario=="U"):
    consulta="S"
    while (consulta == "S"):
        undersubopcao=0
        print("MENU DE FUNCIONALIDADES USUÁRIO")
        print("1. Cadastro \n"+
              "2. Login \n"+
              "3. Blog \n"+
              "4. IPO's em andamento \n")
        opcao=int(input("Digite a opção desejada: \n"))
        while (opcao>4) or (opcao<1):
            opcao=int(input("Digite uma opção válida: \n"))
        if (opcao==1):
            print("SUB-MENU")
            print(" --- CADASTRO --- \n")
            print("1 Realizar cadastro \n"+
                  "2 Consultar email cadastrado \n")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>2):
                subopcao=int(input("Digite um sub-menu válido:  \n"))
            if(subopcao==1):
                print("Funcionalidade realizar cadastro")
            else:
                print("Funcionalidade consultar email cadastrado")
            consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
        elif(opcao==2):
            print("SUB-MENU")
            print(" --- LOGIN --- \n")
            print("1 Realizar login \n"+
                  "2 Recuperar senha \n")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>2):
                subopcao=int(input("Digite um sub-menu válido:  \n"))
            if(subopcao==1):
                print("Funcionalidade realizar login")
            else:
                print("SUB-SUB-MENU")
                print(" --- RECUPERAR SENHA --- \n")
                print("1 Gerar email para recuperacao \n"+
                      "2 Inserir código do email\n"+
                      "3 Inserir nova senha")
                undersubopcao=int(input("Digite o sub-sub-menu desejado:  \n"))
                while(undersubopcao<1) or (undersubopcao>3):
                    subsubopcao=int(input("Digite o sub-sub-menu válido:  \n"))
                if(undersubopcao==1):
                    print("Funcionalidade gerar email para recuperação de senha")
                elif(undersubopcao==2):
                    print("Funcionalidade inserir código do email")
                else:
                    print("Funcionalidade inserir nova senha")      
                consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
        elif(opcao==3):
            print("SUB-MENU")
            print(" --- BLOG --- \n")
            print("1 Acessar artigo \n"+
                  "2 Barra de pesquisa \n")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>2):
                    subopcao=int(input("Digite o sub-menu válido:  \n"))
            if(subopcao==1):
                print("SUB-SUB-MENU")
                print(" --- ACESSAR ARTIGO --- \n")
                print("1 Curtir artigo \n"+
                      "2 Comentar artigo \n"+
                      "3 Salvar artigo")
                undersubopcao=int(input("Digite o sub-sub-menu desejado:  \n"))
                while(undersubopcao<1) or (undersubopcao>3):
                    undersubopcao=int(input("Digite o sub-sub-menu válido:  \n"))
                if(undersubopcao==1):
                    print("Funcionalidade curtir artigo")
                elif(undersubopcao==2):
                    print("Funcionalidade comentar artigo")
                else:
                    print("Funcionalidade salvar artigo")
                consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
            else:
                print("Funcionalidade barra de pesquisa")
                consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
        else:
            print("SUB-MENU")
            print(" --- IPO'S EM ANDAMENTO --- \n")
            print("1 Acessar IPO's em andamento \n"+
                  "2 Barra de pesquisa \n"+
                  "3 Visitar empresa do IPO")
            subopcao=int(input("Digite o sub-menu desejado:  \n"))
            while(subopcao<1) or (subopcao>3):
                    subopcao=int(input("Digite o sub-menu válido:  \n"))
            if (subopcao==1):
                print("Funcionalidade acessar IPO's")
            elif(subopcao==2):
                print("Funcionalidade barra de pesquisa")
            else:
                print("Funcionalidade visitar empresa da oferta")
            consulta=input("Deseja realizar uma nova consulta? (S/N)").upper()
consulta="N"
print("Obrigada!")
print("-------------FIM DO PROGRAMA-------------")