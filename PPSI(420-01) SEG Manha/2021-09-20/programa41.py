# exercício 18 do estudo dirigido (Estrutura de Seleção If-Else)

from datetime import date

ano = int(input("Digite o ano de nascimento: "))
sexo = input("Digite o sexo<M/F>: ")

idade = date.today().year - ano
print("A idade aproximada é", idade)

if idade == 18 and sexo.upper() == 'M':
    print("Serviço Militar Obrigatório!")
else:
    print("Isento de Serviço Militar!")