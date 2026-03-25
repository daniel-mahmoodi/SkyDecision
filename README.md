
# SkyDecision

SkyDecision is a **fullstack web application** built with **React (Vite + TypeScript) on the frontend** and **NestJS on the backend**, showcasing a complete project workflow with modern web technologies.

## Features

* **Frontend:**

  * Built with **React + TypeScript + Vite**
  * Styling with **TailwindCSS**
  * Responsive design for multiple devices
  * Interactive UI components

* **Backend:**

  * Built with **NestJS** and **TypeScript**
  * RESTful API endpoints for data handling
  * Environment-based configuration with `.env`
  * Structured project organization (`src/`, `dist/`, etc.)

* **Fullstack Integration:**

  * Frontend communicates with backend API
  * Realistic data flow and project structure
  * Demonstrates deployment-ready architecture

## Installation

### Clone the repository

```bash
git clone https://github.com/daniel-mahmoodi/SkyDecision.git
cd SkyDecision
```

### Setup Backend

```bash
cd backend
npm install
npm run start:dev
```

### Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default) and communicate with your backend API.

## Technologies Used

* Frontend: React, TypeScript, Vite, TailwindCSS
* Backend: NestJS, TypeScript, Node.js
* Others: ESLint, Prettier, PostCSS

## Project Structure

```
SkyDecision/
├─ backend/      # NestJS backend API
├─ frontend/     # React + Vite frontend
├─ .gitignore
├─ README.md
```

## License

This project is for **educational and portfolio purposes**.


