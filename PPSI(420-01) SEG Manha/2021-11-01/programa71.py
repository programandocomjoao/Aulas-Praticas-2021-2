# exercício 16 do estudo dirigido sobre estrutura de repetição while

soma = 0
qtd = 0
resposta = 'S'

while resposta.upper() == 'S':
    nota = float(input('Digite a nota: '))

    while nota < 0 or nota > 10:
        print('NOTA INVÁLIDA!!!')
        nota = float(input('Digite NOVAMENTE a nota: '))

    soma += nota
    qtd += 1

    resposta = input('Deseja continuar? <S/N>: ')

    while resposta.upper() != 'S' and resposta.upper() != 'N':
        print('RESPOSTA INVÁLIDA!!!')
        resposta = input('Deseja continuar? <S/N>: ')

print('A média da turma é', round(soma/qtd, 2))