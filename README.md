# User Info Applicaton
## A basic implementation of React.js 

>The user Info app is designed and developed as a technology demonstration of React. Js and associated libraries such as "react-router-dom", "axios" and "sass".

### Installation

Clone the repository, install the dependencies and start the server.


User Info Application uses [Node.js](https://nodejs.org/) v14.18.2.

```sh
cd user-info
npm i 
npm start
```

### Features
##### User side
- A user can register an account by providing the required information from the ***"Register User"*** form which is set as the root of the application .
- After Registration User will be redirected to the ***"User Login"*** form where the user can login to the ***"Home page"*** of the application.
- If a user alredy have an account they can login by clicking the link ***"
Alredy a user, login here"*** at the bottom of the ***"Register User"*** form.
- If the login was successful user will be taken to the ***"Home page"*** where the user will be provided with a list of data of random imaginary peoples fetched from "jsonplaceholder.typicode.com".
- The user can see the full details of each imaginary person by ***Clicking on each card*** that shows the basic information about each person.
- The ***"Home page"*** navigation bar has a ***Logout*** button on the right side, by clicking on that button user will be loged out of the ***"Home page"***.

##### Administrator side
- An Administrtor can register an account by providing the required information from the ***"Register Admin"*** from the URL ***"/admin_register"***. 
- After Registration Admin will be redirected to the ***"Admin Login"*** form where the admin can login to the ***"Home page"*** of the application.
- If the person is already an admin they can login from the ***"Admin Login"*** from at rthe URL ***"/admin"***.
- After successful loging in the administrator can view the ***"Dashboard"*** from which the admin can see the user name and email of ***"Users"*** of the application.
- The ***"Dashboard"*** is also provided with a ***Logout*** button which will logout the admin and redired to ***Admin Login*** form.

> The application is provided with ***links*** athe bottom of each forms for the easy navigation without manupulation the URL.


### Dependencies

User Info Application uses a number of open source projects to work properly:

- React Js - Used at the core.
- react-router-dom - enables the basic routing in react.
- sass - is used for writing CSS a little easear.