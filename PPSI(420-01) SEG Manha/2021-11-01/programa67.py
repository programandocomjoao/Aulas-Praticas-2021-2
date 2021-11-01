# exercício 6 do estudo dirigido sobre estrutura de repetição while

qtdf = 0
qtdm = 0
sexo = input('Digite o sexo <M/F>: ')

while sexo.upper() == 'F' or sexo.upper() == 'M':
    if sexo.upper() == 'F':
        qtdf += 1
    elif sexo.upper() == 'M':
        qtdm += 1

    sexo = input('Digite o sexo <M/F>: ')

total = qtdf + qtdm
print('O total de pessoas é', total)

msg = 'Pessoas do sexo {0}: {1}%'
print(msg.format('feminino', round(qtdf * 100 / total, 2)))
print(msg.format('masculino', round(qtdm * 100 / total, 2)))
