# exercício 7 da página 50 do livro de FPR

peso = float(input("Digite o peso: "))
pesoMais = pesoMenos = peso

pesoMais *= 1.15
pesoMenos *= 0.80

print("O peso se engordar 15% é", pesoMais)
print("O peso se emagrecer 20% é", pesoMenos)