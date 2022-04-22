const express = require('express');
const service = require('./src/service');

const app = express();
const PORT = 3000;

//Nos permite recibir informacion de tipo JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Listado de usuarios',
        body: service.getUsers()
    });
});

app.get('/:id', (req, res) => {
    //let id = req.params.id; es lo mismo
    let { params : { id } } = req;   
    let response = service.getUser(id);
    res.json( response );
});

app.post('/', (req, res) => {
    let { body: newUser } = req;
    let response = service.createUser(newUser);
    res.status(201).json({
        message: 'Usuario creado',
        user: response
    });
});

app.put('/:id', (req, res) => {
    let { body: newUser } = req;
    let { params: { id } } = req;
    let response = service.modifyUser(id, newUser);
    res.json(response);
});

app.delete('/:id', (req, res) => {
    let { params: { id } } = req
    let response = service.deleteUser(id);
    res.json(response);
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));