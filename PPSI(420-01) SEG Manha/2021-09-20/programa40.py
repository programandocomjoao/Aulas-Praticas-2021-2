print("*** SISTEMA DE VALIDAÇÃO DE CRÉDITO ***")

nome = input("Nome do cliente: ")
sal = float(input("Salário Bruto: R$ "))
cpf = input("Possui restrições no CPF <S/N>: ")

if sal > 1100 and cpf == 'N':
    print("O cliente", nome, "teve o crédito aprovado")
else:
    print("O cliente", nome, "NÃO teve o crédito aprovado")

print("*** FIM DE PROGRAMA ***")