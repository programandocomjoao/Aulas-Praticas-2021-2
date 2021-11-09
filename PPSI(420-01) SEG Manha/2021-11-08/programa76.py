# exercício 5 do estudo dirigido sobre lista/vetores

numeros = []

for i in range(10):
    numeros.append(int(input('Digite um número: ')))

for i in range(9, -1, -1):
    print(numeros[i])