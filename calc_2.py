
from re import A, X


# Make Calculator Using Function Method

def calc(x,y):
    op = input("Enter Operator(+,-,*,/): ")
    if op == "+": return x+y
    elif op == "-": return x-y  
    elif op == "*": return x*y
    elif op == "/": return x/y
    else: return "Invalid"
print("Calcuator")
a  = int(input("Enter The value : "))
b  = int(input("Enter The Value : "))
print(calc())





        