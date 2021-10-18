# exercício 13 do estudo dirigido sobre estrutura de repetição for

maior = int(input('Digite um número: '))

for i in range(9):
    n = int(input('Digite um número: '))

    if n > maior:
        maior = n

print('O maior número é', maior)