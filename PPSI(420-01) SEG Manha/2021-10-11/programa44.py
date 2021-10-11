# construir um programa que leia um número e calcule a sua raiz quadrada
import math

n = float(input("Digite um número: "))

if not(n < 0):
    rq = math.sqrt(n)
    saida = 'A raiz quadrada de {0} é {1}'
    print(saida.format(n, round(rq, 2)))
else:
    print("Não existe raiz quadrada de números negativos no conjunto de números reais")