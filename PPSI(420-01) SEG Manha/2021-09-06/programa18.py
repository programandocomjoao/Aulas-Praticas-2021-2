# exercício 7 do estudo dirigido (Strings)

nome = input("Digite o nome: ")
data = input("Digite a data de nascimento (somente números): ")

dataf = data[0:2] + "/" + data[2:4] + "/" + data[4:8]

print("Nome:", nome)
print("Data de nascimento:", dataf)