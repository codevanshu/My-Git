import time 
from plyer import notification

if __name__=="__main__":
    while True:
        notification.notify(
            title = "Its Time To a Drink a Water....",
            message = "where is waterrrrrrrrrrrrrr...... bottle.",
            app_icon = "D:\Python projects\Drinking water remainder\Iconsmind-Outline-Glass-Water.ico",
            timeout = 5
        )
        time.sleep()