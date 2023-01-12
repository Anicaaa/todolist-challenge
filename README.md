# Todolist Challenge

<img width="573" alt="Picture_One" src="https://user-images.githubusercontent.com/75957784/212178444-86338e82-8f46-47dd-a977-9e3d6dd849f6.png">

## Project Summary

This is a full-stack todolist project built using React, Node.js, Express and MySQL.

## User Stories

As a user, so I can write a todo task, I want to type my title and content on the input section of the app screen.

As a user, so I can save my todo task, I can press the + or add button.

As a user, so I can view my todo task that I saved, I can read it as a sticky note containing the title, content and date and time created.

As a user, so I can mark the tasks that I have completed, I can press the v or green button, so a line-through will appear.

As a user, so I can delete the task I no longer need, I can press the x or red button.

As a user, so I can write and save more todo tasks, I can refresh the page and start over.

<img width="573" alt="Picture_Two" src="https://user-images.githubusercontent.com/75957784/212178541-ac8326ad-9f3b-41f5-b2a3-22de0fcf81bd.png">

## How to run it locally

The steps below outline how to set up the project to run on your local machine.

Client folder:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Server folder:

### `nodemon index.js`

## My process

I started the project by creating a basic React HTML skeleton to have something visual.

After that, I passed onto the server side (backend) where I used Express to build the todolist app to make communication through HTTP requests and responses possible.

For this project, I wanted to use the CRUD (create, read, update and delete) method. And to do that, I had to SELECT, INSERT, UPDATE and DELETE the information by connecting Express and mySQL.

I was given a specific connection. This meant that I could not use mySQL defalt host, user, password, database and port. However, this part of the project was very challenging for me due to the following reasons:

1. MySQL is the first rational database that I used. I had to watch some quick tutorials and read a few documentations. In addition, I had to download mySQL Community Server and mySQL Workbecnh on my computer. The downloading part was frustrating because the versions did not match with my computer so I had to disinstall and install until I got the right versions.
2. The provided connection caused problems. I wanted to INSERT some datas (id, todoTitle, todoContent) but whenever I pressed the execute button on mySQL Workbench, the table did not show the data I inserted. This was a big bug for me. Therefore, I tried the following solutions:
   - Asked for help to my developer friend and Boolean teacher and classmates.
   - Used Insomnia and installed a VS Code extension called Thunder Client. This is to test the endpoints and see if I was going to get anu useful error.
   - Installed another VS Code extention called SQLTool.
   - Used StackOverflow where I had to implement the solution provided: <https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server>
   - My terminal showed ```MySQL Command Not Found```, so I had to install some dependencies.
   - Installed mySQL2 on the terminal
   - Used a few different mySQL connections, including the default one.

After days of trying to connect my server ```index.js``` with MySQL, I managed to read the data ```(id, title, content)``` by using SELECT. However, I could not INSERT new datas using Express, only manually on MySQL Workbench. Therefore, due to the given deadline, I had to move on and focus on the frontend.

On the client side (frontend) I used React function components. As I could not work with the server side properly, I had to find an alternative. I created functions called ```deleteList``` and ```taskCompleted``` which allows the user to mark and/or delete a completed task.
If my server worked correctly, this should have been done on the server side using DELETE ```app.delete``` and UPDATE ```app.post``` and then connect them using the ```useEffect```, ```API``` and ```Axios```.

Another difficulty I faced was with git control. <https://stackoverflow.com/questions/62056294/github-folders-have-a-white-arrow-on-them>
I solved the issue by deleting .git from VSCode.
