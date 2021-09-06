usuario = input("Digite o usuário de e-mail: ")
servidor = input("Digite o servidor de e-mail: ")
dominio = input("Digite o domínio de e-mail: ")

email = "{0}@{1}.{2}"

print("O e-mail é", email.format(usuario, servidor, dominio))