palavra = input("Digite uma palavra: ")

print("A primeira letra é:", palavra[0])
print("A segunda letra é:", palavra[1])
print("A terceira letra é:", palavra[2])
print("O trecho entre posições 2 e 6 é:", palavra[2:6])

qtd = len(palavra)
print("A palavra", palavra, "tem", qtd, "caracteres")
print("A última letra é", palavra[qtd-1])