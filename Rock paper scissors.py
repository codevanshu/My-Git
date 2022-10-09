 
 # Game :-- Rock Paper Scissor         


def MesDis():
        print()
        return "|Winning Rules Of The Rock Paper Scissor Game As Follows:| \n"+"|Rock vs Paper ->    Paper Wins                          |\n"+"|Rock vs Scissor ->  Rock Wins                           | \n"+"|Paper vs Scissor -> Scissor Wins                        | \n"
       
def userchoice():
        print ("Enter choice \n 1.  Rock \n 2.  Paper  \n 3.  Scissor \n")
        f = int(input("First  User Turn:  "))
        s = int(input("Second User Turn:  "))

        while True:
                if f == 1 and s == 2:
                        print("Paper Wins")
                elif f == 2 and s == 1:
                        print("Paper Wins")
                elif f == 1 and s == 3:
                        print("Rock Wins")
                elif f == 3 and s == 1:
                        print("Rock Wins")
                elif f == 2 and s == 3:
                        print("Scissor Wins")
                elif f == 3 and s == 2:
                        print("Scissor Wins")
                elif f == 1 and s == 1 or f == 2 and s == 2 or f == 3 and s == 3:
                        print("Tie")
                else:
                        print()
                        print("You Enter Wrong Input!!!\nPlease Enter Correct Input!!!!")
                        print()
                        return userchoice()
                x = input("Will You Continue Playing : y or n ? \n")
                if x == "y":
                        return userchoice()
                if x == "n":
                        print("Thank You For Playing")
                        break
                else:
                        x = input("Will You Continue Playing : y or n ? \n") 

               
print(MesDis())
userchoice()
