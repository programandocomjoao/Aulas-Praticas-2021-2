# exercício 8 do estudo dirigido (Estrutura de Seleção If-Else)

idade = int(input("Digite a idade: "))

if idade >= 18:
    print("Maior em idade")
    print("Maior em idade há", idade - 18, "anos")
else:
    print("Menor em idade")
    print("Faltam", 18 - idade, "anos para ser maior")

print("*** FIM DE PROGRAMA ***")