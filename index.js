import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";
const {Pool} = pg;

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async (req, res) => {
  try{
    const result = await pool.query("select * from blogs order by datetime desc");
    const blogs = result.rows;
    res.render("index.ejs", {blogs});
  }catch(err){
    console.error(err);
  }
});

app.get("/create", (req, res) => {
  res.render("form.ejs");
});

app.post("/delete", async (req,res)=>{
  try{
    const del = await pool.query("delete from blogs where id = $1 returning *",[req.body.id]);
    console.log(del.rows);
    res.redirect("/");

  }catch(err){
  console.error(err);
  }
})

app.post("/submit-blog",async (req, res) => {
  try{
    const result = await pool.query("Insert into blogs(title,blogtext) values($1,$2)returning id",[req.body.title,req.body.blog]);
    const slug = result.rows[0].id;
    res.redirect(`/blog/${slug}`);
  }catch(err){
    console.error(err);
  }
  
});

app.get("/blog/:slug",async (req, res) => {
  try{
    const slug = req.params.slug;
    const result = await pool.query("select * from blogs where id = $1",[slug]);
    const blog = result.rows;
    console.log(blog);
    res.render("blog.ejs", {
    slug: blog[0].id,
    title: blog[0].title,
    desc: blog[0].datetime,
    content: blog[0].blogtext
  });
  }catch(err){
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
