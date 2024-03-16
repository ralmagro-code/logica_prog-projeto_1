# Mensagem de apresentação do programa
print("Bem vindo ao Desafio de Projeto 1: Classificador de Nível de Herói (Em Python)")

# Entrada de dado: Obter o nome e a XP do herói por parte do usuário
heroiNome = input("Digite o nome do herói: ")
heroiXP = int(input("Digite a quantidade de XP do herói: "))

# Declaração da variável que contém o nível do herói
heroiNivel = ""

# Estrutura de decisão para determinar o nível do herói com base na XP
if heroiXP < 1000:
    heroiNivel = "Ferro"
elif 1001 <= heroiXP <= 2000:
    heroiNivel = "Bronze"
elif 2001 <= heroiXP <= 5000:
    heroiNivel = "Prata"
elif 5001 <= heroiXP <= 7000:
    heroiNivel = "Ouro"
elif 7001 <= heroiXP <= 8000:
    heroiNivel = "Platina Diamante"
elif 8001 <= heroiXP <= 9000:
    heroiNivel = "Ascendente"
elif 9001 <= heroiXP <= 10000:
    heroiNivel = "Imortal"
else:
    heroiNivel = "Radiante"

# Saída do Programa: Exibição da mensagem com o nome e o nível do herói
print(f"O Herói de nome {heroiNome} está no nível {heroiNivel}.")