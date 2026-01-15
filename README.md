## 📝 Note
This is a work-in-progress project.  
I keep improving and adding features as I continue learning backend and frontend development.

# Mandal Member Payment Tracker

A simple MERN stack web application to track monthly member payments for a local mandal.

## 🧩 Problem Statement
In our local mandal, each member contributes a fixed amount every month for Ganpati-related expenses.  
Previously, these monthly contributions were tracked using Excel sheets, which had to be updated and shared repeatedly in the group.

This approach caused several issues:
- Excel files had to be updated and reshared every month
- No centralized place to view the latest payment status
- Members had to search old messages/files to check who had paid

## 💡 Solution
To solve this problem, I built a simple MERN stack web application where:
- An admin updates member payment records month by month
- Member names and month-wise payment status are shown in a table
- Paid members are marked with a month name badge in month column
- Unpaid members are marked with a cross icon in month column
- A single link can be shared with all members to view the latest status

## 🎯 Features
- Simple admin authentication using email and password
- Member CRUD operations
- Month-wise payment tracking
- Payment status shown using badges and cross marks
- Basic frontend and backend validation
- Minimal and responsive UI using Tailwind CSS

## 🛠️ Tech Stack
**Frontend**
- React.js
- HTML, CSS
- Tailwind CSS
- DaisyUI
- React Router

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JWT with HttpOnly Cookies (basic implementation)

**Tools**
- Git & GitHub
- Vs Code
- Postman

## 🎓 What I Learned
- Full-stack MERN application development
- React state management and `useEffect`
- Array manipulation using `map` and `filter`
- How to Work with React-router and Context Api
- Frontend to backend API integration using Axios
- JWT-based authentication using HttpOnly cookies
- RESTful API design
- MongoDB schema design
- Deploying backend on Render and frontend on Netlify

## ⚠️ Limitations

- Project is built mainly for learning purposes
- No advanced role-based access or security
- UI is minimal and not design-focused
- Can be improved further with better validation and UI

## 📱 Live Demo

- **Frontend:** https://jaybhavani.netlify.app
- **Backend API:** https://jay-bhavani-navyuvak-mandal.onrender.com

## 📚 API Endpoints

### Authentication
- POST `/api/admin/login` – Admin login
- POST `/api/admin/logout` – Admin logout

### Records
- GET `/api/allrecord` – Get all member records
- GET `/api/singlerecord/:id` – Get single record
- POST `/api/admin/record/create` – Create record
- PATCH `/api/admin/record/update/:id` – Update record
- DELETE `/api/admin/record/delete/:id` – Delete record

## 🙌 Author
**Sanjay Dhodi**  
Aspiring Software Developer
