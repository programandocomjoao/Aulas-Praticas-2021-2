# exercício 19 do estudo dirigido (Estrutura de Seleção If-Else)

A = float(input("Digite o valor do lado A: "))
B = float(input("Digite o valor do lado B: "))
C = float(input("Digite o valor do lado C: "))

if A >= B + C or B >= C + A or C >= A + B:
    print("Não forma triângulo!")
else:
    print("Forma triângulo!")