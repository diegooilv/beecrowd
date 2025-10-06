fib = [0, 1]
calls = [0, 0]
for i in range(2, 40):
    fib.append(fib[i - 1] + fib[i - 2])
    calls.append(calls[i - 1] + calls[i - 2] + 2)

vezes = int(input())
for i in range(vezes):
    n = int(input())
    print(f"fib({n}) = {calls[n]} calls = {fib[n]}")
