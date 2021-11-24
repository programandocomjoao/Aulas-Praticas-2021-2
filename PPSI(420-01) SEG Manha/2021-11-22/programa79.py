# exercício 2 do estudo dirigido sobre Funções

def calcularQuadrado():
    n = int(input('Digite um número: '))
    msg = 'O quadrado de {0} é {1}'
    print(msg.format(n, n ** 2))

print('***** INÍCIO DO PROGRAMA *****')

calcularQuadrado()

print('***** FIM DO PROGRAMA *****')