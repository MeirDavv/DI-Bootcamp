const express = require ('express');

const app = express();

const data = [
    {'id' : 1, title : 'Top 10 healthy foods to eat', content: 'A balanced diet is essential for maintaining good health, and incorporating a variety of nutrient-rich foods can help achieve this. Top healthy foods to include in your diet are leafy greens like spinach and kale, which are packed with vitamins and minerals; berries such as blueberries and strawberries, known for their high antioxidant content; nuts like almonds and walnuts, which provide healthy fats and protein; fatty fish such as salmon and mackerel, rich in omega-3 fatty acids; whole grains like quinoa and brown rice, offering fiber and essential nutrients; legumes such as lentils and chickpeas, excellent sources of plant-based protein; avocados, which provide healthy monounsaturated fats; cruciferous vegetables like broccoli and Brussels sprouts, known for their cancer-fighting properties; sweet potatoes, high in vitamins A and C; and yogurt, which supports gut health with probiotics. Incorporating these foods into your daily meals can contribute significantly to overall well-being. '},
    {'id' : 2, title : 'Top 3 deadly animals', content: 'The top three deadly animals, known for causing significant human fatalities, are mosquitoes, snakes, and box jellyfish. Mosquitoes, while small, are incredibly dangerous due to their ability to transmit deadly diseases like malaria, dengue fever, and Zika virus, resulting in millions of deaths annually. Snakes, particularly venomous species like the Indian cobra, black mamba, and inland taipan, cause thousands of fatalities each year through their potent bites. The box jellyfish, found in the waters around Australia and Southeast Asia, has tentacles containing venom that can cause heart failure, paralysis, and death within minutes, making it one of the most lethal creatures in the ocean.'},
    {'id' : 3, title : 'The 5 most beautiful flowers', content: 'Flowers captivate with their stunning beauty and diverse forms, with some standing out as exceptionally exquisite. Roses, with their classic charm and variety of colors, symbolize love and admiration, making them a perennial favorite. Orchids, known for their intricate and exotic blooms, come in a wide range of colors and shapes, representing elegance and strength. Tulips, with their vibrant hues and smooth petals, herald the arrival of spring and signify perfect love. Lilies, boasting large, fragrant blooms, are celebrated for their grace and purity, often used in weddings and religious ceremonies. Lastly, the cherry blossom, with its delicate pink and white flowers, epitomizes the fleeting beauty of life and is a breathtaking sight during its short blooming season. Each of these flowers offers a unique and captivating beauty that enchants admirers around the world.'}
];

app.use(express.json());

app.listen(5002, ()=> console.log('Run on 5002'))

app.get('/posts', (req,res) =>{
    res.send(data);
});

app.get('/posts/:id', (req,res) =>{
    const postId = parseInt(req.params.id);
    const post = data.find((obj) => obj.id === postId);
    if(!post){
        return res.status(404).send("Product not found");
    }
    res.json(post);
});


app.post("/posts" , (req,res) => {
    const newPost = {
        id: data.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    data.push(newPost);
    res.status(201).json(newPost);
})

app.put("/posts/:id",  (req, res) =>{
    const id = Number(req.params.id);
    const index = data.findIndex((obj)=> obj.id === id);
    if(index === -1){
        return res.status(404).send("Post not found");
    }
    const updatedPost = {
        id: data[index].id,
        title: req.body.title,
        content: req.body.content
    };
    data[index] = updatedPost;
    res.status(200).json("Post updated");
});

app.delete("/posts/:id", (req,res)=>{
    const id = Number(req.params.id);
    const index = data.findIndex((obj)=> obj.id === id);
    if(index === -1){
        return res.status(404).send("Post not found");
    }
    data.splice(index,1);
    res.status(200).json("Product deleted");
});

app.use((req,res)=>{
    res.status(404).send('Route not found');
})