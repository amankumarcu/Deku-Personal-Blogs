import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";
const {Pool} = pg;

const app = express();
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }

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

app.post("/update/:slug",async(req,res)=>{
  const slug = req.body.id;
  try{
    res.render("update.ejs",{
      id : req.body.id,
      title: req.body.title,
      content: req.body.content
    })
  }catch(err){
    console.error(err);
  }
});

app.post("/updated/:slug",async(req,res)=>{
  const slug = req.body.id;
  const title = req.body.title;
  const content = req.body.content;
  try{
    const result = await pool.query("update blogs set title = $1, blogtext = $2 where id = $3 returning *",[title,content,slug]);
    console.log(result.row);
    res.redirect(`/blog/${slug}`);
  }catch(err){
    console.error(err);
  }
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
