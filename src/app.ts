import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());



app.use("/api/order", orderRoutes);

export default app;