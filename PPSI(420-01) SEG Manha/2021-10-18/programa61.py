# exercício 14 do estudo dirigido sobre estrutura de repetição for

maior = 0
menor = 10

for i in range(10):
    nota = float(input('Digite uma nota: '))

    if nota > maior:
        maior = nota

    if nota < menor:
        menor = nota

print('A maior nota é', maior)
print('A menor nota é', menor)