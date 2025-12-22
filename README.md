# 📝 Blog Application (Node.js + Express + EJS)

A server-rendered blog application built using **Node.js, Express.js, and EJS**.  
The application allows users to create and read blog posts with **SEO-friendly dynamic URLs (slugs)**.  
At the current stage, all blog data is stored **in server memory** without any database integration.

---

## 🚀 Features

- Create blog posts using a form  
- Automatic slug generation from blog titles  
- Dynamic routing using slugs (`/blog/:slug`)  
- Display all blogs on the homepage  
- Latest blogs shown first  
- Server-side rendering with EJS  
- Card-based UI styled using CSS  

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime  
- **Express.js** – Backend web framework  
- **EJS** – Templating engine  
- **HTML5** – Markup language  
- **CSS3** – Styling  
- **JavaScript** – Application logic  

---

## ⚙️ Application Workflow

1. User submits a blog post through the form  
2. Server generates a URL-friendly slug from the blog title  
3. Blog data is stored in server memory  
4. User is redirected to the blog’s dynamic route (`/blog/:slug`)  
5. Homepage renders all blog cards using an EJS loop  
6. Clicking **Read More** opens the full blog page  

---

## ▶️ Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
```


### Install dependencies
```bash
npm install
```

###Run the application
```bash
node index.js
```

###Open in browser
```bash
http://localhost:3000
```
##⚠️ Limitations

-Blog data is stored in memory and resets when the server restarts
-No database integration
-No user authentication or authorization
-No edit or delete functionality
-Not suitable for production use in its current state

##🔮 Future Enhancements

-Integrate a database (MongoDB / MySQL) for persistence
-Add user authentication and role-based authorization
-Implement edit and delete blog features
-Add pagination and search functionality
-Improve UI/UX and responsiveness
-Add server-side and client-side validation
-Introduce error handling and logging

##📚 Learning Outcomes

-Practical understanding of Express routing (GET, POST)
-Handling form data and request bodies
-Generating and using slugs for dynamic URLs
-Server-side rendering using EJS
-Difference between server-side and client-side JavaScript
-Serving static assets in an Express application

##👤 Author

Aman Kumar
Aspiring Full-Stack Developer
