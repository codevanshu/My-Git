#  1 Write a code to print all values from 1 to 100. Skip the number which are divisible by 3 or 5.
x = 1
a = x
while x<=100:
    if a%3 == 0 or a%5 == 0 :
        a = a+1
    else:
        print(a,end = "  ")
        a = a+1
    x = x+1


