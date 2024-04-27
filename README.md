# Task-Management-System-Backend
 Task management backend app implemented using NodeJs, ExpressJs and MongoDB
  - Backend only app
  - Create, Read, Update and Delete operations implemented
  - .env file for environment variables and sensitive information 

# Documentation Link 
**Link Below**
- [https://documenter.getpostman.com/view/23047024/2sA2xjyqqH](https://documenter.getpostman.com/view/23047024/2sA3BuVTar)

## API Endpoints 
 - ### POST an task
    - Endpoint url = 'http://localhost:8050/api/tasks/addTask'
    - POST request
    - Request to be sent in { "title": "Doing sketches", "description": "I am doing sketches on my i pad", "status": "pending" } in this format
    - Try out posting new tasks by changing the value string
    - Response should be the posted data in json format or error(if any)
      
 - ### GET all tasks
    - Endpoint url = 'http://localhost:8050/api/tasks/allTasks'
    - GET request
    - Response should be an array of tasks in json format or error(if there is some)
      
 - ### GET a particular task
    - Endpoint url = 'http://localhost:8050/api/task/:taskId'
    - GET request
    - taskId is the _id of an task object
    - Response should be a task object or error(if any) in json format

 - ### UPDATE a particular task
    - Endpoint url = 'http://localhost:8050/api/task/:taskId'
    - PUT request
    - taskId is the _id of an task object
    - Request should be in { "status":"completed" } format the key: value can be anything you want to that needs updation
    - Response should be an updated task or error(if any) in json format

 - ### DELETE a particular task
    - Endpoint url = 'http://localhost:8050/api/task/:taskId'
    - Delete request
    - taskId is the _id of an task object
    - Response should be a message for successful deletion or error(if any)

## Setup
 
```
    $ git clone https://github.com/Jnanendra29/Task-Management-App-Backend.git
    $ cd Task-Management-App-Backend
    $ npm install
```
  - Create a .env file in root(eg. Task-Management-App-Backend) folder
  - Create an environmental variable as COMPASS_URI = mongodb://127.0.0.1:27017/taskManagement
  - Run the code by nodemon or node index.js in the terminal
  - You can't see output in the console so use postman
  - To see output in console, update all controller function by console.log(desired-result-variableName) before returning the response
  - The desired-result-variableName should be change with the variable_name where the response is expected
  - THEN YOU ARE ALL SET... HAPPY CODING...
