# User management using Nextjs and FastAPI
Full-Stack app with user management
<p>
    <a href="https://github.com/MahmudJewel/nextjs-fastapi-user-management/fork">
        <img src="https://img.shields.io/github/forks/MahmudJewel/nextjs-fastapi-user-management.svg?style=social&label=Fork" />
    </a>
    <a href="https://github.com/MahmudJewel/nextjs-fastapi-user-management/fork">
        <img src="https://img.shields.io/github/stars/MahmudJewel/nextjs-fastapi-user-management.svg?style=social&label=Stars" />
    </a>
    <!-- <a href="https://github.com/MahmudJewel/nextjs-fastapi-authentication/fork">
        <img src="https://img.shields.io/nuget/dt/Azylee.Core.svg" />
    </a> -->
</p>
<p>
    If the repo is helpful, please give a star and fork it.
</p>
<a href="https://github.com/MahmudJewel/nextjs-fastapi-user-management/fork">
    Click here to download/fork the repository
</a>

## Features:
* Login and logout using cookies and session
* Create user account
* User can update his information

# Tech Stack
## Front-end
* React
* Nextjs-app router
* React-Bootstrap
## Back-end
* FastAPI
* SQLAlchemy as ORM
* Pydantic as data validation

# Features of Front-end
* middleware
    * Authorized user can access **'/me'** routes. but can't access **'/login'**,  **'/signup'**.
    * Unauthorized user can access  **'/login'**, **'/signup'** but can’t access **‘/me’**.
* Signup
    * if user exists, will show the error messages
    * custom validated text for required fields like email, password
    * If user is created, will redirect to the login page and show the alert message.
* Login
* Logout
* User details page
* custom form validation on login and signup
* User can update information.
* Active navbar

<!-- =========================================== Back-end ========================== -->

# Features of Back-end
* user module
    - id, first name, last name, **email** as username, **password**, role, is_active created_at, updated_at 
* admin dashboard => sqladmin
* authentication => JWT
* db migration => alembic
* middleware

## User module's API
| SRL | METHOD | ROUTE | FUNCTIONALITY | Fields | 
| ------- | ------- | ----- | ------------- | ------------- |
| *1* | *POST* | ```/login``` | _Login user_| _**email**, **password**_|
| *2* | *POST* | ```/users/``` | _Create new user_|_**email**, **password**, first name, last name_|
| *3* | *GET* | ```/users/``` | _Get all users list_|_email, password, first name, last name, role, is_active, created_at, updated_at, id_|
| *4* | *GET* | ```/users/me/``` | _Get current user details_|_email, password, first name, last name, role, is_active, created_at, updated_at, id_|
| *5* | *GET* | ```/users/{user_id}``` | _Get indivisual users details_|_email, password, first name, last name, role, is_active, created_at, updated_at, id_|
| *6* | *PATCH* | ```/users/{user_id}``` | _Update the user partially_|_email, password, is_active, role_|
| *7* | *DELETE* | ```/users/{user_id}``` | _Delete the user_|_None_|
| *8* | *GET* | ```/``` | _Home page_|_None_|
| *9* | *GET* | ```/admin``` | _Admin Dashboard_|_None_|


# Setup
## Back-end
The first thing to do is to clone the repository:
```sh
$ https://github.com/MahmudJewel/nextjs-fastapi-user-management
```

Create a virtual environment to install dependencies in and activate it:
```sh
$ cd nextjs-fastapi-user-management
$ cd backend
$ python -m venv venv
$ source venv/bin/activate
```
Then install the dependencies:
```sh
# for fixed version
(venv)$ pip install -r requirements.txt

# or for updated version
(venv)$ pip install -r dev.txt
```
Note the `(venv)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`.

Once `pip` has finished downloading the dependencies:
```sh
(venv)$ alembic upgrade head  # database migration
(venv)$ uvicorn app.main:app --reload # backend server will be => http://127.0.0.1:8000/
```
## Front-end
Go to the front-end directory and install dependencies
```sh
$ cd frontend
$ pnpm install or npm install
```
create a file called .env.local on the root directory(same as public directory) and set environment valiables
```sh
# .env.local
$ NEXT_PUBLIC_API_HOST = 'http://127.0.0.1:8000/'
```
Run the frontend
```sh
$ pnpm run dev # make sure to run the back-end first on http://127.0.0.1:8000/
```
Congrates!!! you are done...

## Screenshot
<p>
    Alert for required fields
</p>
<!-- <img src="https://github.com/MahmudJewel/nextjs-fastapi-user-management/assets/35461355/e6076053-4c81-4d98-b839-47a6c4b8961b"> -->

![1 3-required messages](https://github.com/MahmudJewel/nextjs-fastapi-user-management/assets/35461355/e6076053-4c81-4d98-b839-47a6c4b8961b)

<p>
    Alert for user created.
</p>

![2-alert for acc created](https://github.com/MahmudJewel/nextjs-fastapi-user-management/assets/35461355/fd8aa98f-bcc5-45b1-b9e3-05be246b2bd5)

<p>
    Alert for user exists
</p>

![1 1-user exists messages](https://github.com/MahmudJewel/nextjs-fastapi-user-management/assets/35461355/956b4618-1a54-47f3-8981-0fc323366c27)

<p>
    Alert for password
</p>

![1 2-password not matched](https://github.com/MahmudJewel/nextjs-fastapi-user-management/assets/35461355/e5cfa540-f850-4846-b186-1d9a8c3ee93f)


### Happy Coding

