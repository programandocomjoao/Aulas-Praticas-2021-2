n1 = int(input("Digite um número: "))
n2 = int(input("Digite outro número: "))

# n1 = float(input("Digite um número: "))
# n2 = float(input("Digite outro número: "))

soma = n1 + n2
subtracao = n1 - n2
multiplicacao = n1 * n2
potencia = n1 ** n2
divreal = n1 / n2
divint = n1 // n2
resto = n1 % n2

print("A soma é", soma)
print("A subtração é", subtracao)
print("A multiplicacao é", multiplicacao)
print("A potenciação é", potencia)
print("A divisão real é", round(divreal, 2))
print("A divisão inteira é", divint)
print("O resto da divisão é", resto)