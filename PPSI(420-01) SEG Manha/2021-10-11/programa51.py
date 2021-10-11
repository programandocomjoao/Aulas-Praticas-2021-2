# construir um programa que leia um multiplicador e gere uma tabuada a partir dele

mult = int(input("Digite o multiplicador: "))

for i in range(1, 11):
    saida = "{0} x {1} = {2}"
    print(saida.format(mult, i, mult * i))