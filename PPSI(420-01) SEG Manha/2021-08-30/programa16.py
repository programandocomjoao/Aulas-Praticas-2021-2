# exercício 6 da página 50 do livro de FPR

salf = float(input("Digite o salário fixo: R$ "))
vend = float(input("Digite o valor das vendas: R$ "))

com = vend * 0.04
sal = salf + com

print("A comissão é R$", com)
print("O salário final é R$", sal)