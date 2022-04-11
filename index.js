
const express = require('express');
const port = 3000;

const app = express();

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


app.get('/', (req, res) => {
    console.log(req);
    res.send('Authors API');
    
});

app.get('/authors/:id/', (req, res) => {
    let authorName = req.params.id;
    res.send(`${authors[authorName].name}, ${authors[authorName].nationality}`)
});
app.get('/authors/:id/books', (req, res) => {
    let authorName = req.params.id;
    res.send(`${authors[authorName].books}`)
});

app.get('/json/authors/:id/', (req, res) =>{
    let authorName = req.params.id;
    res.json({
        name: `${authors[authorName].name}`,
        nationality: `${authors[authorName].nationality}`
    });
})
app.get('/json/authors/:id/books', (req, res) =>{
    let authorBook = req.params.id;
    res.json({
        books: `${authors[authorBook].books}`,
        
    });
})


app.listen(port, () =>{
   console.log(`server on port: ${port}`);
});
