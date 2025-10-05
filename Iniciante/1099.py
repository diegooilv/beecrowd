def sum_impares(n1, n2):
    maior = n1
    menor = n2
    if n2 > n1:
        maior = n2
        menor = n1
    soma = 0
    for i in range(menor+1, maior):
        if i % 2 != 0:
            soma += i
    return soma

tests = int(input())
for ii in range(0,tests):
    num1, num2 = map(int, input().split())
    print(sum_impares(num1, num2))
