abas, cliques = map(int, input().split())

for i in range(0, cliques):
    acao = input()
    if acao == "fechou":
        abas = abas+1
    else:
        abas = abas-1
        
print(abas)
