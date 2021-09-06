# exercício 8 do estudo dirigido (Strings)

nome = input("Digite o nome: ")
cpf = input("Digite o CPF (somente números): ")

cpff = cpf[0:3] + "." + cpf[3:6] + "." + cpf[6:9] + "-" + cpf[9:11]

print("Nome:", nome)
print("CPF:", cpff)