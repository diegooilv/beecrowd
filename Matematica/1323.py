while True:
    try:
        n = int(input())
        if n == 0:
            break
        total = sum(i*i for i in range(1, n+1))
        print(total)

    except EOFError:
        break
