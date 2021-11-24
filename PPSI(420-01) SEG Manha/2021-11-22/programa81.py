# exercício 4 do estudo dirigido sobre Funções

def calcularMedia():
    n1 = float(input('Digite um número: '))
    n2 = float(input('Digite outro número: '))
    print('A média é ', (n1+n2)/2)

def calcularDiferenca():
    n1 = float(input('Digite um número: '))
    n2 = float(input('Digite outro número: '))

    if n1 > n2:
        print('A diferença é ', n1-n2)
    else:
        print('A diferença é ', n2 - n1)

def calcularProduto():
    n1 = float(input('Digite um número: '))
    n2 = float(input('Digite outro número: '))
    print('O produto é ', n1 * n2)

def calcularDivisao():
    n1 = float(input('Digite um número: '))
    n2 = float(input('Digite outro número: '))
    print('A divisão é ', n1 / n2)

print('***** INÍCIO DO PROGRAMA *****')
print('As operações são:')
print('(1) Média Aritmética')
print('(2) Diferença do maior pelo menor')
print('(3) Produto')
print('(4) Divisão')

opcao = int(input('Digite a opção: '))

if opcao == 1:
    print('MÉDIA ARITMÉTICA')
    calcularMedia()
elif opcao == 2:
    print('DIFERENÇA')
    calcularDiferenca()
elif opcao == 3:
    print('PRODUTO')
    calcularProduto()
elif opcao == 4:
    print('DIVISÃO')
    calcularDivisao()
else:
    print('OPÇÃO INVÁLIDA!!!')

print('***** FIM DO PROGRAMA *****')