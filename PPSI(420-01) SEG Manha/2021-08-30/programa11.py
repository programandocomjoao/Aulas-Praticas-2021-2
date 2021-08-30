# exercício 17 da página 51 do livro de FPR

#raio = input("Digite o raio da esfera: ")
#raio = float(raio)
import math

raio = float(input("Digite o raio da esfera: "))

C = 2 * math.pi * raio
A = math.pi * (raio ** 2)
V = 3/4 * math.pi * (raio ** 3)

print("Comprimento da esfera:", round(C, 2))
print("Área da esfera:", round(A, 2))
print("Volume da esfera:", round(V, 2))