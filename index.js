
const express = require('express');


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
    const id = req.params.id -1;
    const author = authors[id]
    res.send(`${author.name}, ${author.nationality}`)
});
app.get('/authors/:id/books', (req, res) => {
    const id = req.params.id -1;
    res.send(authors[id].books)
});

app.get('/json/authors/:id/', (req, res) =>{
    const id = req.params.id -1;
    res.json({
        name: authors[id].name,
        nationality: authors[id].nationality
    });
})
app.get('/json/authors/:id/books', (req, res) =>{
    const id = req.params.id -1;
    res.json({
        books: authors[id].books
        
    });
})


app.listen(3000, () =>{
   console.log('server on port 3000');
});
