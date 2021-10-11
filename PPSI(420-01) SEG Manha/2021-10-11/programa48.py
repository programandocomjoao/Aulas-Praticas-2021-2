# exercício 1 do estudo dirigido sobre estrutura de repetição for

for i in range(1, 6):
    print("Execução número", i)
    n = int(input("Digite um número: "))
    saida = 'O triplo de {0} é {1}'
    print(saida.format(n, n * 3))