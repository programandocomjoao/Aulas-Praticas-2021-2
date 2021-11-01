# exercício 4 do estudo dirigido sobre estrutura de repetição while

soma = 0
nota = float(input('Digite a nota: '))
qtd = 0

while nota >= 0 and nota <= 10:
    soma += nota
    qtd = qtd + 1
    nota = float(input('Digite a nota: '))

if qtd == 0:
    print('Não foi digitada nenhuma nota válida!')
else:
    print('A média é', round(soma/qtd, 2))