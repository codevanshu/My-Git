tasks = []

#function to view task, add task , delete task
def view_tasks():
    if not tasks:
        print("No tasks to show")
    else:
        for i, task in enumerate(tasks):
            print(f"{i+1}.{task}")

def add_task(task):
    tasks.append(task)
    print(f"Task'{task}' add to list")

def delete_task(index):
    try:
        task = tasks.pop(index-1)
        print(f"task'{task}' delete from the list")
    except IndexError:
        print("Invalid index")

while True:
    print("Enter a Command(add/view/delete/exit):")
    command = input()
    if command == "add": #here is an implementation of funtion add
        print("Enter the task:")
        task = input()
        add_task(task)
    elif command == "view":#here is an implementation of funtion view
        view_tasks()
    elif command == "delete":#here is an implementation of funtion delete
        print("Enter the task number:")
        index = int(input())
        delete_task(index)
    elif command == "exit":
        break
    else:
        print("Invalid command")

