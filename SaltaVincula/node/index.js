const express = require ('express');
const cors = require('cors'); 
const app =express();

app.use(express.json());
// app.use(cors()); 


const corsOptions = {
    origin: ['http://localhost:8100', 'http://192.168.100.78:8100'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));


app.use(express.json());

const mensajes=[
    { nombre: 'Alicia', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '4+ mensajes nuevos' },
    { nombre: 'Persona Random', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
    { nombre: 'Gastón', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: 'Visto' },
    { nombre: 'Alicia', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '10+ mensajes nuevos' },
    { nombre: 'Juan', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
    { nombre: 'Juancito', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '1+ mensajes nuevos' },
    { nombre: 'Juana', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '4+ mensajes nuevos' },
    { nombre: 'Juancita', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: '2+ mensajes nuevos' },
    { nombre: 'Joana', fotoPerfil: '../../assets/img/modelo-foto-perfil.webp', texto: 'Visto' },

];

app.get('/',(req,res)=>{
    res.send('Node JS api');
});

// app.get('/api/mensajes', (req,res)=>{
//     res.send(mensajes);
// });

app.get('/api/mensajes', (req, res) => {
    const nombreBuscado = req.query.nombre;
    
    if (!nombreBuscado) {
        res.send(mensajes); // Si no hay un término de búsqueda, devolver todos los mensajes
    } else {
        // Filtrar mensajes por nombre, sin distinguir mayúsculas y minúsculas
        const mensajesFiltrados = mensajes.filter(mensaje =>
            mensaje.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
        );

        res.send(mensajesFiltrados);
    }
});
app.get('/api/mensajes/:nombre',(req,res)=>{
    const mensaje = mensajes.find(c=>c.nombre===req.params.nombre);
    if(!mensaje)return res.status(404).send('Mensaje no encontrado');
    else res.send(mensaje);
})

app.delete('/api/mensajes/:nombre',(req,res)=>{
    const mensaje = mensajes.find(c=>c.nombre===req.params.nombre);
    if(!mensaje) return res.status(404).send('Mensaje no encontrado');

    const index= mensajes.indexOf(mensaje);
    mensajes.splice(index,1);
    res.send(mensaje);
});

const port = process.env.port ||8000;
app.listen(port,()=>console.log(`Escuchando en puerto ${port}...`));