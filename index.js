import express from "express";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
