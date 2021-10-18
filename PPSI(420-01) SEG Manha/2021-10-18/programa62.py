# variação do exercício 6 do estudo dirigido sobre estrutura de repetição for

resposta = 'S'
i = 1

while resposta.upper() == 'S':
    print('***** ALUNO', i, '*****')
    i += 1

    n1 = float(input('Digite a nota 1: '))
    n2 = float(input('Digite a nota 2: '))
    n3 = float(input('Digite a nota 3: '))

    media = (n1 + n2 + n3)/3
    print('A média é', round(media, 2))

    if media >= 6:
        print('Aluno Aprovado!')
    else:
        print('Aluno Reprovado!')

    resposta = input('Deseja continuar<S/N>: ')

print('***** FIM DO PROGRAMA *****')