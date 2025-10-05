def mdc(a, b):
    while b:
        a, b = b, a % b
    return a

n = int(input())

for _ in range(n):
    a, b = map(int, input().split())
    maior = mdc(a, b)  
    print(maior)
