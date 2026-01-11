 DriveX — A Minimal File Drive Backend (Node.js + Express + MongoDB + Firebase)

DriveX is a lightweight file-drive backend built with Node.js, Express, MongoDB, and Firebase Storage.
It supports JWT authentication using HTTP-only cookies, file upload with Firebase Storage, and ownership-based access control.

⭐ Features

🔐 JWT Authentication (stored in HTTP-only cookies for security)

📁 Upload + Store files in Firebase Storage

🛡️ Ownership-based authorization — users can delete only their own files

🧩 Clean Express architecture

routes/, middlewares/, models/, config/, views/

🗂️ MongoDB models for users + files

🎨 EJS-powered UI for uploading & viewing files

🛠️ Tech Stack
Layer	Technology
Backend	Node.js, Express
Database	MongoDB, Mongoose
File Storage	Firebase Storage
Auth	JWT + HTTP-only Cookies
Views	EJS Templates
📂 Project Structure
Project-DriveX/
│── config/
│── middlewares/
│── models/
│── routes/
│── views/
│── app.js
│── package.json
│── .gitignore

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/<your-username>/Project-DriveX.git
cd Project-DriveX

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file
PORT=3000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
COOKIE_NAME=drivex_token

FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com

4️⃣ Run the app
npm start

🔑 Authentication Flow

User logs in → server creates JWT

JWT is sent in HTTP-only cookie (cannot be accessed by JS → more secure)

Every protected route uses an auth middleware to verify token

File delete/edit routes check file.owner === loggedInUser

📁 File Upload Flow

User uploads file → server receives it

File is uploaded to Firebase Storage

Metadata stored in MongoDB

UI loads file using Firebase URL

🧪 API Endpoints (Example)
Method	Route	Description
POST	/auth/register	Register user
POST	/auth/login	Login + set JWT cookie
POST	/files/upload	Upload file (protected)
GET	/files/:id	View file
DELETE	/files/:id	Delete file (owner only)

(Update these based on your actual routes.)

📌 What I Learned (Summary)

Implementing JWT auth with HTTP-only cookies

Using Firebase Storage for production-ready uploads

Building clean Express architectures (routes + middlewares separation)

Understanding how small backend decisions impact scalability

🧭 Future Enhancements

Preview thumbnails

Public/private file modes

Sharing links

Pagination for large file sets

🤝 Contributing

Feel free to open issues or submit PRs.

📝 License

MIT License
