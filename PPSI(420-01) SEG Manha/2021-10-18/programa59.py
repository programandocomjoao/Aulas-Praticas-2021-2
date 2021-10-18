# variação do exercício 10 do estudo dirigido sobre estrutura de repetição for

qtd = int(input('Digite a quantidade de alunos: '))

soma = 0
msg = 'Digite a nota do {0}º aluno: '

for i in range(1, qtd+1):
    nota = float(input(msg.format(i)))
    soma += nota

media = soma / i
print('A média da turma é', round(media, 2))