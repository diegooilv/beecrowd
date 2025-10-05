def fib(n):
    if n <= 0: return
    if n == 1: print(0); return

    n1, n2 = 0, 1
    sequencia = [n1, n2]

    for _ in range(2, n):
        n1, n2 = n2, n1 + n2
        sequencia.append(n2)
        
    print(' '.join(map(str, sequencia))) 

nn = int(input())
fib(nn)