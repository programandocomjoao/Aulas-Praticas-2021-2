palavra = input("Digite uma palavra: ")

print("Sem espaços: ---", palavra.strip(), "---")
print("Em minúsculas:", palavra.lower())
print("Em maiúsculas:", palavra.upper())

print("Trocando a por X:", palavra.replace("a", "X"))
print("Sem espaços no meio:", palavra.replace(" ", ""))
print("Texto dividido:", palavra.split(" "))

palavras = palavra.split(" ")
print("Primeira palavra:", palavras[0])
print("Segunda palavra:", palavras[1])
print("Terceira palavra:", palavras[2])
print("Quarta palavra:", palavras[3])