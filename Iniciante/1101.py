while True:
    try:
        v1, v2 = map(int, input().split())
        if v1 <= 0 or v2 <= 0:
            break

        menor, maior = min(v1, v2), max(v1, v2)
        total = 0

        for i in range(menor, maior+1):
            print(i, end=" ")
            total += i
        print(f"Sum={total}")

    except EOFError:
        break
