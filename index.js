import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
const blogs = [];

// REQUIRED
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs });
});

app.get("/create", (req, res) => {
  res.render("form.ejs");
});

app.get("/blog/sample", (req, res) => {
  res.render("sample.ejs");
});

app.post("/submit-blog", (req, res) => {
  const slug = req.body.title
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();

  const blog = [
    slug,
    req.body.title,
    req.body.desc,
    req.body.blog
  ];

  blogs.push(blog);
  res.redirect(`/blog/${slug}`);
});

app.get("/blog/:slug", (req, res) => {
  const slug = req.params.slug;
  const index = blogs.findIndex(blog => blog[0] === slug);

  if (index === -1) {
    return res.status(404).send("Blog not found");
  }

  res.render("blog.ejs", {
    slug: blogs[index][0],
    title: blogs[index][1],
    desc: blogs[index][2],
    content: blogs[index][3]
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
