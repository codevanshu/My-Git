#Its a water drinking remainder
#This Notification is show in your notification Panel
import time 
from plyer import notification  #to import notification you will need to install plyer library.

if __name__=="__main__":
    while True:
        notification.notify(
            title = "Its Time To a Drink a Water....",
            message = "where is waterrrrrrrrrrrrrr...... bottle.",
            app_icon = "D:\Python projects\Drinking water remainder\Iconsmind-Outline-Glass-Water.ico",
            timeout = 5
        )
        # in 1 min = 60sec
        # in 1 hour = 3600sec
        # 60*60 = 3600sec
        time.sleep(60*60)   #every hour they will show in Your notification panel
