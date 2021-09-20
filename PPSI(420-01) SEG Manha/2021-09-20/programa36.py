# exercício 13 do estudo dirigido (Estrutura de Seleção If-Else)

from datetime import date

print("Hoje é", date.today())

ano = int(input("Digite o ano de nascimento: "))

idade = date.today().year - ano
print("A idade aproximada é", idade)

if idade >= 16:
    print("Apto a ser eleitor!")
else:
    print("Inapto a ser eleitor!")