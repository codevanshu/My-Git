#2 Take three values from user and find the greatest number from them.
x = int(input(" Enter value : "))
y = int(input(" Enter value : "))
z = int(input(" Enter value : "))

if x > y and x < z:
    largest = x
elif y > x and y > z:
    largest = y
else:
    largest = z
print(" largest number is", largest)

print("Byy")
