while True:
    try:
        M, N = map(int, input().split())
    except EOFError:
        break
    except ValueError:
        continue
    fat_M = 1
    fat_N = 1
    for i in range(1, M + 1):
        fat_M = fat_M * i
    for i in range(1, N + 1):
        fat_N = fat_N * i
    print(fat_M + fat_N)
