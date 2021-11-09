nomes = []

nomes.append('Jose')
nomes.append('Maria')
nomes.append('Dalira')
nomes.append('Ralf')
print(nomes)

nomes.insert(2, 'Gerson')
print(nomes)

nomes.remove('Dalira')
print(nomes)

nomes.pop(2)
print(nomes)

nomes.append('Marco')
nomes.append('Fernanda')
nomes.append('Gabriel')
print(nomes)

print('Atualmente, a lista tem', nomes.count('Maria'), 'Maria')
print('Atualmente, a liste tem', len(nomes), 'elementos')
print('Ralf está na posição', nomes.index('Ralf'))

nomes.reverse()
print(nomes)

nomes.sort()
print(nomes)

nomes.clear()
print(nomes)