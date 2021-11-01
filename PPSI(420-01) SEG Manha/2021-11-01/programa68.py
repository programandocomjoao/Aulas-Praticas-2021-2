# exercício 10 do estudo dirigido sobre estrutura de repetição while

soma = 0
msg = 'Digite o preço do produto {0}: R$ '

for i in range(1, 11):
    preco = float(input(msg.format(i)))

    while preco <= 0:
        print('PREÇO INVÁLIDO!!!')
        preco = float(input(msg.format(i)))

    soma += preco

print('A soma dos preços é R$', round(soma, 2))