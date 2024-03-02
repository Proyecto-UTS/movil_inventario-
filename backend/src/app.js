import express from "express";
import inventoryRoutes from './routes/inventory'
import cors from 'cors'
import morgan from "morgan";

const app = express();
app.use (cors());
app.use (morgan("dev"))
app.use (express.json())
app.use(inventoryRoutes)
export default app