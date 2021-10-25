# exercício 4 do estudo dirigido sobre estrutura de repetição while

soma = 0
nota = 0
qtd = 0

while nota >= 0 and nota <= 10:
    soma += nota
    qtd = qtd + 1
    nota = float(input('Digite a nota: '))

print('A média é', round(soma/(qtd-1), 2))