const express = require('express');
const userRoutes = require('./Routes/UserRoutes');
const taskRoutes= require('./Routes/TaskRoutes');


const app = express();
const port = 3001;
// Précise que notre API fonctionne avec des fichiers JSON
app.use(express.json());


app.get('/hello', (request, result) => {
    // Envoie les données a l'utilisateur
    result.send('Hello World !!');
})

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);




app.listen(port,()=>{
    console.log(`Server is running on port http://127.0.0.1:${port}`);
})