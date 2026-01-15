# 📝 Full-Stack Blog Application (Node.js + Express + EJS + PostgreSQL)

A server-rendered blog application built using **Node.js, Express.js, EJS, and PostgreSQL**, featuring **dynamic URLs generated from blog IDs** and **full CRUD (Create, Read, Update, Delete) functionality**.

The application uses a **Supabase-hosted PostgreSQL database** for persistent data storage, demonstrating a transition from in-memory data handling to a **scalable, production-oriented backend architecture** based on relational databases.

---

## 🚀 Features

- Create blog posts using a form  
- SEO-friendly dynamic URLs using blog IDs (`/blog/:id`)  
- Full CRUD operations for blog posts  
- Display all blogs on the homepage  
- Blogs ordered by **datetime (latest first)**  
- Server-side rendering with EJS  
- Card-based UI styled using CSS  
- Persistent data storage using PostgreSQL (Supabase)  

---

## 🛠 Tech Stack

### Backend
- **Node.js** – JavaScript runtime  
- **Express.js** – Backend web framework  
- **EJS** – Templating engine  

### Database
- **PostgreSQL** – Relational database  
- **Supabase** – Managed PostgreSQL hosting  
- **pg (node-postgres)** – PostgreSQL client  

### Frontend
- **HTML5** – Markup language  
- **CSS3** – Styling  
- **JavaScript** – Application logic  

---

## ⚙️ Application Workflow

1. User submits a blog post via form  
2. Server stores blog data in PostgreSQL with:
   - `id` (primary key)
   - `title`
   - `blogtext`
   - `datetime` (timestamp)  
3. User is redirected to the blog’s dynamic route (`/blog/:id`)  
4. Homepage fetches blogs ordered by **datetime DESC**  
5. Users can:
   - Read blog posts
   - Update existing blogs
   - Delete blogs  
6. All data persists across server restarts  

---

## 🧪 CRUD Operations

| Operation | Description |
|--------|-------------|
| Create | Add new blog posts |
| Read (All) | Fetch all blogs ordered by datetime |
| Read (Single) | View blog using ID-based routing |
| Update | Edit existing blog posts |
| Delete | Remove blog posts permanently |

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL=your_supabase_postgres_connection_string
```

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

## ⚠️ Limitations

- No user authentication or authorization  
- No pagination or search functionality  
- Limited input validation and error handling  
- Requires additional security and optimization for production deployment  

---

## 🔮 Future Enhancements

- Add user authentication and role-based access control  
- Implement pagination and full-text search  
- Improve server-side and client-side validation  
- Introduce centralized error handling and logging  
- Enhance UI/UX and mobile responsiveness  
- Add deployment optimizations and monitoring  

---

## 📚 Learning Outcomes

- End-to-end **CRUD implementation** using PostgreSQL  
- Working with **relational databases and SQL queries**  
- Supabase integration for managed PostgreSQL hosting  
- Designing persistent data models with timestamps  
- Dynamic routing using ID-based URLs  
- Server-side rendering using EJS  
- Secure environment-based configuration  
- Transitioning from in-memory storage to scalable backend architecture  


## 👤 Author

- Aman Kumar
(Aspiring Full-Stack Developer)
