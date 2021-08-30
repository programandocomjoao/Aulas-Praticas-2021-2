num = 4
som = sub = mul = divr = divi = mod = exp = 10

som += num     #som = som + num
sub -= num     #sub = sub - num
mul *= num     #mul = mul * num
divr /= num    #divr = divr / num
divi //= num   #divi = divi // num
mod %= num     #mod = mod % num
exp **= num    #exp = exp ** num

print("Adição:", som)
print("Subtração:", sub)
print("Multiplicação:", mul)
print("Divisão real:", divr)
print("Divisão inteira:", divi)
print("Resto da divisão:", mod)
print("Exponenciação:", exp)
print("O número é", num)