# exercício 14 do estudo dirigido sobre estrutura de repetição while

soma = 0
resposta = 'S'

while resposta.upper() == 'S':
    preco = float(input('Digite o preço: R$ '))

    while preco <= 0:
        print('PREÇO INVÁLIDO!!!')
        preco = float(input('Digite NOVAMENTE o preço: R$ '))

    soma += preco

    resposta = input('Deseja continuar? <S/N>: ')

    while resposta.upper() != 'S' and resposta.upper() != 'N':
        print('RESPOSTA INVÁLIDA!!!')
        resposta = input('Deseja continuar? <S/N>: ')

print('A soma dos preços é R$', round(soma, 2))