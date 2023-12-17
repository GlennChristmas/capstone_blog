import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.render('index.ejs');
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
