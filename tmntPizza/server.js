const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`listing on http://localhost:${port}`)
});

let menu = [
    {
        name: "Beneath These Streets",
        price: 9,
        topping: "granola, and licorice",
        quantity: 0
    }
]

app.get('/pizza', (req, res)=> {
    res.json(menu)
})

