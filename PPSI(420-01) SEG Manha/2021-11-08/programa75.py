# exercício 4 do estudo dirigido sobre lista/vetores

numeros = []
msg1 = 'Digite o {0}º número: '
msg2 = 'Posição {0} = {1}'

for i in range(5):
    numeros.append(int(input(msg1.format(i+1))))

for i in range(5):
    print(msg2.format(i, numeros[i]))