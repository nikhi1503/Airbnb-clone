# 🏠 Wanderlust - Airbnb Clone

A full-stack web application inspired by Airbnb, built with Node.js, Express, MongoDB, and EJS. Users can browse, create, edit, and delete property listings, as well as leave reviews and manage their accounts.

## 🌟 Live Demo(Open Link in Incognito Window )

**Website:** [https://airbnb-clone-9fg9.onrender.com/](https://airbnb-clone-9fg9.onrender.com/listings) 

### ⚠️ **Important Notice**
If you see a "Dangerous site" warning in Chrome, this is a false positive. To access the site safely:

1. **Use Incognito/Private Mode** (Recommended):
   - Press `Ctrl + Shift + N` (Windows/Linux) or `Cmd + Shift + N` (Mac)
   - Navigate to the website URL in incognito mode
   - This often bypasses security warnings for development sites

2. **Alternative Method**:
   - Click "Details" on the warning page
   - Click "Visit this unsafe site" (only if you trust this demo)

3. **Why this happens**:
   - Free hosting platforms sometimes get flagged
   - New domains may trigger security warnings
   - This is a legitimate educational project

## ✨ Features

- 🔐 **User Authentication** (Signup, Login, Logout)
- 🏘️ **Property Listings** (Create, View, Edit, Delete)
- ⭐ **Reviews & Ratings** (Add and delete reviews)
- 📱 **Responsive Design** with Bootstrap
- 🔍 **Form Validation** with Joi
- 📸 **Image Upload** with Cloudinary
- 💬 **Flash Messages** for user feedback
- 🛡️ **Authorization & Security**

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** Passport.js (Local Strategy)
- **Templating:** EJS & EJS-Mate
- **Styling:** Bootstrap 5
- **Validation:** Joi
- **Image Storage:** Cloudinary
- **Session Management:** express-session, connect-flash
- **File Upload:** Multer

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or Atlas)
- Cloudinary account (for image uploads)

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/airbnb-clone.git
   cd airbnb-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start MongoDB** (if running locally)

4. **Run the application:**
   ```bash
   npm start
   ```
   or for development:
   ```bash
   npx nodemon app.js
   ```

5. **Visit:** [http://localhost:8080](http://localhost:8080)

## 📁 Project Structure

```
airbnb-clone/
├── controllers/         # Route controllers
├── models/             # Mongoose models
├── routes/             # Express routes
├── views/              # EJS templates
│   ├── layouts/        # Page layouts
│   ├── listings/       # Listing-related views
│   └── users/          # User-related views
├── public/             # Static assets (CSS, JS, images)
├── utils/              # Utility functions
├── middleware.js       # Custom middleware
├── schema.js           # Joi validation schemas
└── app.js             # Main application file
```

## 🎯 Key Features Explained

### User Authentication
- Secure signup and login with Passport.js
- Session management with persistent login state
- Protected routes for authenticated users only

### Property Management
- Create new listings with image upload
- Edit and delete your own listings
- Browse all available properties
- Detailed property pages with reviews

### Review System
- Star rating system (1-5 stars)
- Comment-based reviews
- Only authenticated users can leave reviews
- Authors can delete their own reviews

### Security Features
- Input validation and sanitization
- Protected routes with middleware
- CSRF protection with proper session handling
- Secure image upload with Cloudinary

## 🌐 Deployment

This application is deployed on **Render** with:
- Automatic builds from GitHub
- MongoDB Atlas for database
- Cloudinary for image storage
- Environment variables configured in Render dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nikhil**
- GitHub: [@yourusername](https://github.com/nikhi1503)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/nikhi1503)

## 🙏 Acknowledgments

- Inspired by Airbnb's user interface and functionality
- Built as part of a web development learning journey
- Thanks to the open-source community for amazing tools and libraries

---

⭐ **Star this repository if you found it helpful!**

📧 **Have questions?** Open an issue or reach out via GitHub.

🚀 **Happy coding!**
