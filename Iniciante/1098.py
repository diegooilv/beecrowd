def fmt(x):
    x = round(x, 10) 
    return str(int(x)) if x % 1 == 0 else f"{x:.1f}"

count = 0
for i in range(1, 12):
    for ii in range(1, 4):
        print(f"I={fmt(count)} J={fmt(count+ii)}")
    count += 0.2
