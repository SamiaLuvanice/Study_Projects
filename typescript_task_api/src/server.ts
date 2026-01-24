import express from 'express';
import { errorHandler } from './middlewares/error-handler.js';
import { router } from './routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
