# Fitness App with Supplement Store

A full-stack application for a fitness app with a supplement store built using React, Spring Boot, and MySQL.

## Project Structure
```
gym/
├── frontend/    # React frontend application
└── backend/     # Spring Boot backend application
```

## Prerequisites
- Node.js and npm
- Java 11 or higher
- Maven
- MySQL

## Database Setup
The MySQL database should be configured with:
- Database name: gym
- Username: gym
- Password: gym1234

## Running the Application

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build the application:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
The backend will start on http://localhost:8080

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```
The frontend will start on http://localhost:3000
