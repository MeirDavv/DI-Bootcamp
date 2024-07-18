import express from 'express';

const app = express();

const data = [
    {id: 1, title: 'Power of habit', author: 'Charles Duhigg', publishedYear:2012},
    {id: 2, title: 'Power of now', author: 'Ekhart Tolle', publishedYear:1997},
    {id: 3, title: 'How to win friends and influence people', author: 'Dale Carnegie', publishedYear:1936},
]

app.use(express.json());

app.listen(5002, ()=> console.log('run on 5002'));

app.get('/api/books', (req,res)=>{
    res.json(data)
});

app.get('/api/books/:id', (req,res)=>{
    const bookId = parseInt(req.params.id);
    const book = data.find((book)=> book.id === bookId)
    if(!book){
        return res.status(404).send('Book not found');
    }
    res.status(200).json(book);
})

app.post('/api/books', (req,res) => {
    const newBook ={
        id: data.length,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    data.push(newBook);
    res.status(201).json(newBook);
});