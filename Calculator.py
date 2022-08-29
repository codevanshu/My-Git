#   |------> Calulator <------|


a = int(input(" Enter First Number: "))

x = input(" Enter Operator (+,-,*,/,% ): ")

b = int(input(" Enter Second Number: "))

if x == "+":
    print(" Ans: " , a+b)

elif x == "-":
    print(" Ans: " , a-b)

elif x == "*":
    print(" Ans: " , a*b)

elif x == "/":
    print(" Ans: " , a/b)

elif x == "%":
    print(" Ans: " , a%b)

else:
    print("Invalid")

