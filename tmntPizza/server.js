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
        id:0,
        name: "Beneath These Streets",
        price: 9,
        topping: "granola, and licorice",
        quantity: 0
    }
]

app.get('/pizza', (req, res)=> {
    res.json(menu)
})
app.get( '/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    menu.map((item) => {

        if (item.id === id) {
            res.status(200).json(menu);
        }
    })
});

app.put('/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const body = req.body.data.quantity;

    const update = menu.find(item => item.id === id)

    update.quantity = body;
    res.json("updated");
})

