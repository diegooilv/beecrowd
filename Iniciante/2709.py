def is_prime(value):
    if value < 2:
        return False
    for i in range(2, value):
        if value % i == 0:
            return False
    return True

while True:
    try:
        m = int(input())  
        v = [int(input()) for _ in range(m)]  
        n = int(input())  
        soma = 0

        v.reverse()

        for i in range(0, len(v), n):
            soma += v[i]

        if soma != 1 and soma != 0 and is_prime(soma):
            print("You’re a coastal aircraft, Robbie, a large silver aircraft.")
        else:
            print("Bad boy! I’ll hit you.")

    except EOFError:
        break
