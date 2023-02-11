# Jobify

<div id="top"></div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<!-- PROJECT LOGO -->
<div align="center">
<br>
<a href="https://jobify-abdelrahmansoltan.herokuapp.com/">
    <img src="./client/src/assets/images/logo.svg" alt="Logo" height="50" >
  </a>
<br>
<br>

  <p align="center">
  <a href="https://jobify-v2mq.onrender.com/landing">View Demo</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#users">Users</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#ports-and-endpoints">Ports and EndPoints</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MERN Stack Application for tracking Job Search Process
<img width="1440" alt="Screenshot 2023-02-11 at 2 58 56 PM" src="https://user-images.githubusercontent.com/87461631/218250961-33192f2f-7a79-4790-98f9-b1388ed3ec5a.png">
<img width="1440" alt="Screenshot 2023-02-11 at 3 01 14 PM" src="https://user-images.githubusercontent.com/87461631/218251066-2ff7934c-9655-4864-b79f-a56a777457b0.png">
<img width="1440" alt="Screenshot 2023-02-11 at 3 04 55 PM" src="https://user-images.githubusercontent.com/87461631/218251262-b47678fe-cbea-4e70-ada6-1465a50a2429.png">
<img width="1440" alt="Screenshot 2023-02-11 at 3 08 30 PM" src="https://user-images.githubusercontent.com/87461631/218251290-0296d3f9-91c1-494b-9ad8-2ed71ccffc85.png">





### Features

- Login / Sign-up
- Edit user-data
- Add jobs
- Browse user's jobs with (search + filter) feature
- Display jobs-status + monthly-applications in graphs

### Built With

- React
- React Router
- styled-components
- Node.js
- Express
- MongoDB

### users

| Email                 | Password |
| --------------------- | -------- |
| john@gmail.com        | secret   |

#### Validation

- **Email validation**: as per **RFC2822** standards.
- **Password validation**:
  - The password must be more than or equal to **6** characters.

<p align="right">(<a href="#top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## Getting Started

This project require some perquisites and dependencies to be installed, you can view it online using this [demo](https://jobify-v2mq.onrender.com/landing).

---

### Ports and EndPoints


#### Ports

- FrontEnd Development Server runs on port `3000`
- BackEnd Development Server runs on port `8000`

#### API endpoints

**Main URL**: [http://localhost:8000/api/v1](http://localhost:5000/api/v1)

- **Auth**

  - Register User: [http://localhost:8000/api/v1/auth/register](http://localhost:8000/api/v1/auth/register) [POST]
  - Register User: [http://localhost:8000/api/v1/auth/login](http://localhost:8000/api/v1/auth/login) [POST]
  - Update User: [http://localhost:8000/api/v1/auth/updateUser](http://localhost:8000/api/v1/auth/updateUser) [PATCH]

- **Jobs**

  - Get all jobs: [http://localhost:8000/api/v1/jobs?status=all&jobType=all&page=1](http://localhost:8000/api/v1/jobs?status=all&jobType=all&page=1) [GET]
  - Create job: [http://localhost:8000/api/v1/jobs](http://localhost:8000/api/v1/jobs) [POST]
  - Update job: [http://localhost:8000/api/v1/jobs/:id](http://localhost:8000/api/v1/jobs/:id) [PATCH]
  - Delete job: [http://localhost:8000/api/v1/jobs/:id](http://localhost:8000/api/v1/jobs/:id) [DELETE]
  - Get stats: [http://localhost:8000/api/v1/jobs/stats](http://localhost:8000/api/v1/jobs/stats) [Get]


<p align="right">(<a href="#top">back to top</a>)</p>
