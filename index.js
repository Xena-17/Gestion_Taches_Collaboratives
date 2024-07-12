const express = require('express');
const UserRoutes = require('./Routes/UserRoutes');
const TaskRoutes= require('./Routes/TaskRoutes');
const CommentRoutes= require('./Routes/CommentRoutes');
const CollaborationRoutes = require('./Routes/CollaborationRoutes');

const app = express();
const port = 3001;
// Précise que notre API fonctionne avec des fichiers JSON
app.use(express.json());


app.get('/hello', (request, result) => {
    // Envoie les données a l'utilisateur
    result.send('Hello World !!');
})

app.use('/users', UserRoutes);
app.use('/tasks', TaskRoutes);
app.use('/comments', CommentRoutes);
app.use('/collaborations', CollaborationRoutes);



app.listen(port,()=>{
    console.log(`Server is running on port http://127.0.0.1:${port}`);
})