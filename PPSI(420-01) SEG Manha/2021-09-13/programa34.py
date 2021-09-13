# exercício 9 do estudo dirigido (Estrutura de Seleção If-Else)

n1 = float(input("Digite a nota 1: "))
n2 = float(input("Digite a nota 2: "))
n3 = float(input("Digite a nota 3: "))

media = (n1 + n2 + n3)/3
print("A média do aluno é", round(media, 2))

if media >= 6:
    print("Aluno Aprovado!")
    print("Passou com", round(media - 6, 2), "pontos acima da média")
else:
    print("Aluno Reprovado!")
    print("Faltam", round(6 - media, 2), "pontos para média")

print("*** FIM DE PROGRAMA ***")