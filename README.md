🕒 Rimberio – E-Commerce Website
Rimberio is a full-stack e-commerce platform built with the MERN stack that allows users to browse, purchase, and manage orders for premium watches. It features secure payments, dynamic product management, and an intuitive UI for both customers and admins.

🚀 Features
🛍️ Customer Features
User authentication with JWT (Register/Login).
Browse watches with responsive UI.
Add/remove items from shopping cart.
Place orders with:
💳 Razorpay payment gateway
🚚 Cash on Delivery (COD)
Real-time order status tracking.
⚙️ Admin Features
Admin dashboard with full product CRUD (Create, Read, Update, Delete).
Upload and manage product images with Cloudinary.
Manage orders and track payments.

🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Axios
Backend
Node.js
Express.js
MongoDB with Mongoose
Other Integrations
Razorpay (Payments)
Cloudinary (Image Uploads)
JWT (Authentication)

📂 Project Structure
rimberio/
│── backend/         # Express.js + MongoDB server
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── controllers/ # Business logic
│── frontend/        # React.js app
│   ├── components/  # Reusable UI components
│   ├── pages/       # Screens (Home, Cart, Checkout, Admin, etc.)
│── .env             # Environment variables
│── package.json
│── README.md

⚡ Installation & Setup
Clone the repository:
git clone https://github.com/tirth999/Rimberio.git
cd Rimberio
Install dependencies:
cd backend && npm install
cd ../frontend && npm install
Create a .env file in the backend with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Run the backend server:
cd backend
npm run dev
Run the frontend:
cd frontend
npm start

🌐 Live Demo
🔗 Rimberio (Deployed Link) (if deployed)
📸 Screenshots
🏠 Homepage
(insert screenshot)
🛒 Cart Page
(insert screenshot)
⚙️ Admin Dashboard
(insert screenshot)


🤝 Contributing
Fork the repo
Create a new branch (feature-xyz)
Commit changes (git commit -m "Added feature xyz")
Push branch (git push origin feature-xyz)
Open a Pull Request


📜 License
This project is licensed under the MIT License.
