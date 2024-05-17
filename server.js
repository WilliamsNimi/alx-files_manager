import express from 'express';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '200mb'}));
app.use(router);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);

export default app;
