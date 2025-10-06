count = 1
for i in range(0, 5):
    for ii in range(6, 3, -1):
        print(f"I={count} J={count+ii}")
    count += 2
