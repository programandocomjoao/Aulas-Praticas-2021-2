pontos = 0

resp = input("Digite a resposta da pergunta 1 (A/B/C/D): ")
if resp == 'B':
    pontos += 3
else:
    resp = input("Digite a resposta da pergunta 1 (A/B/C/D): ")
    if resp == 'B':
        pontos += 2

resp = input("Digite a resposta da pergunta 2 (A/B/C/D): ")
if resp == 'A':
    pontos += 3

resp = input("Digite a resposta da pergunta 3 (A/B/C/D): ")
if resp == 'A':
    pontos += 3

print("A pontuação é", pontos)