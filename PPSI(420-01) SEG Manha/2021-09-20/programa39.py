# exercício 17 do estudo dirigido (Estrutura de Seleção If-Else)

n1 = float(input("Digite a nota de 1ª avaliação: "))
n2 = float(input("Digite a nota de 2ª avaliação: "))

media = (n1 + n2)/2
print("A média é", round(media, 2))

if media >= 7:
    print("Aluno Aprovado")
else:
    n3 = float(input("Digite a nota de avaliação suplementar: "))

    media = (n1 + n2 + n3 * 2) / 4
    print("A nova média é", round(media, 2))

    if media >= 6:
        print("Aluno Aprovado")
    else:
        print("Aluno Reprovado")

print("*** FIM DE PROGRAMA ***")