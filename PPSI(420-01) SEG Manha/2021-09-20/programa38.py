# exercício 16 do estudo dirigido (Estrutura de Seleção If-Else)

qtd = int(input("Digite a qtd de disciplinas sem aprovação: "))

if qtd == 0:
    print("Aluno Aprovado")
elif qtd <= 5:
    print("Aluno em Recuperação")
else:
    print("Aluno Reprovado")