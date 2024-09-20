# Openclassrooms - Projet 12 - SportSee

SportSee is a sports coaching application that allows users to track their performance through interactive charts and personalized activity data. The application offers integration with an API or the use of mocked data for local testing.

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow) ![REACT](https://img.shields.io/badge/Framework-React-blue) ![Tailwind CSS](https://img.shields.io/badge/CSS%20Framework-Tailwind_CSS-38bdf8) ![Styled-Components](https://img.shields.io/badge/Styles-Styled--Components-DB7093) ![Rechart](https://img.shields.io/badge/Charts-Rechart-22B5BF)

## Prerequisites

**NodeJS** (version 16.15.0)

**Npm** (version 7.24.0) or **Yarn** (version: 1.22.18)

---

---

---

## PART 1 - Backend _Installation_

### 1 - Clone the backend repository in a new terminal and move to directory

```bash
  git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
  cd P9-front-end-dashboard
```

### 2 - Install dependencies

- Use `npm install` command to install the dependencies with Npm.
- Use `yarn` command to install the dependencies with Yarn.

---

---

---

## PART 2 - Backend _Run locally_

### 1 - Start the server

- `npm run start` command will allow you to run server with Npm.
- `yarn start` command will allow you to run server with with Yarn.

### 2 - You should see the following message :

```bash
  Magic happens on port 3000
```

---

---

---

## PART 3 - Frontend _Installation_

### 1 - Clone this repository in a new terminal and move to directory

```bash
  git clone https://github.com/TimotheGonin/timothe_gonin_12_062022
  cd timothe_gonin_12_062022
```

### 2 - Install dependencies

- Use `npm install` command to install the dependencies with Npm.
- Use `yarn` command to install the dependencies with Yarn.

---

---

---

## PART 4 - Frontend _Run locally_

### 1 - Start the server

- `npm run start` command will allow you to run server with Npm.
- `yarn start` command will allow you to run server with with Yarn.

_Wait for a moment and press "y" after seeing this question bellow_

```bash
  ? Something is already running on port 3000. Would you like to run the app on another port instead? (Y/n)
```

### 2 - Access the application

Once the backend and frontend are connected, navigate to [https://localhost:3001](https://localhost:3001) in your browser.

---

---

---

## PART 5 - Switch between API or Mocked data

Set the `REACT_APP_DATA_MODE` to `API` or `MOCK` in the environment file.

- Create a .env file and place it at the root of the project.
- Create the environment variable `REACT_APP_DATA_MODE` .env file
- Choose to enter the value `API` or `MOCK` into the `REACT_APP_DATA_MODE` environment variable to choose the application's operating mode

_Restart the frontend server after changing the `REACT_APP_DATA_MODE` variable._
