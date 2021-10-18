# exercício 8 do estudo dirigido sobre estrutura de repetição for

print('***** PROGRAMA DE CÁLCULO DE PISO *****')

total = 0

for i in range(1, 6):
    print('Dados do cômodo', i)

    c = float(input('Comprimento: '))
    l = float(input('Largura: '))

    area = c * l
    print('Área:', round(area, 2))

    total += area

print('Área total da casa:', round(total, 2))
print('***** FIM DO PROGRAMA *****')