# exercício 3 do estudo dirigido sobre Funções

def calcularQuadrado():
    n = int(input('Digite um número: '))
    msg = 'O quadrado de {0} é {1}'
    print(msg.format(n, n ** 2))

print('***** INÍCIO DO PROGRAMA *****')

for i in range(10):
    calcularQuadrado()

print('***** FIM DO PROGRAMA *****')