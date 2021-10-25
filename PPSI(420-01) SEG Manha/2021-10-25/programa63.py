# exercício 1 do estudo dirigido sobre estrutura de repetição while

msg = "O triplo de {0} é {1}"

n = 1

while n > 0:
    n = int(input("Digite um número: "))
    print(msg.format(n, n * 3))

print("***** FIM DO PROGRAMA *****")