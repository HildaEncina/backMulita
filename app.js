const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/api/paquetes', require('./routes/paqueteRoutes'));
app.use('/api/camiones', require('./routes/camionRoutes'));
app.use('/api/empresa', require('./routes/empresaRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Servidor corriendo en puerto ${PORT}`));
