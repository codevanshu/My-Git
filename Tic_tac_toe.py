# Tic Tac Toe
def sum(a,b,c):
    return a+b+c

def printboard(x,o):
    zero = 'X' if x[0] else ('O' if o[0] else "0")
    one = 'X' if x[1] else ('O' if o[1] else "1")
    two ='X' if x[2] else ('O' if o[2] else "2")
    three = 'X' if x[3] else ('O' if o[3] else "3")
    four ='X' if x[4] else ('O' if o[4] else "4")
    five = 'X' if x[5] else ('O' if o[5] else "5")
    six = 'X' if x[6] else ('O' if o[6] else "6")
    seven = 'X' if x[7] else ('O' if o[7] else "7")
    eight = 'X' if x[8] else ('O' if o[8] else "8")
    print(f"                       {zero} | {one} | {two}                        ")
    print(f"                      ---|---|--- ")
    print(f"                       {three} | {four} | {five}                       ")
    print(f"                      ---|---|---")
    print(f"                       {six} | {seven} | {eight}                       ")

# function to check who wins (X) Or else (O)
def checkwin(x,o):
    # diff possiblities to win
    wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for win in wins:
        if(sum(x[win[0]], x[win[1]], x[win[2]]) == 3):
            print("X Won the match")
            return 1
        if(sum(o[win[0]], o[win[1]], o[win[2]]) == 3):
            print("O Won the match")
            return 0
        else:
            (print("Draw"))
    return -1

if __name__ == "__main__":
    x = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    o = [0, 0, 0, 0, 0, 0, 0, 0, 0] 
    turn = 1 # 1 for X and 0 for O
    print("------------------Welcome to tic tac toe------------------")
    print()
    while(True):
        printboard(x,o)
        if(turn == 1):
            print(" X's Chance")
            value = int(input(" Please enter a value "))
            x[value] = 1
        else:
            print(" O's Chance")
            value = int(input(" Please enter a value "))
            o[value] = 1
        
        turn = 1 - turn
        chwin = checkwin(x,o)
        if(chwin != -1):
            print("Match Over")
            break
    