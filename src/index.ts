import express, {Request, Response} from "express";
import Routes from './api/routes/index.routes'

const app = express();
const port  = 5000;

app.use(express.json());

app.use('/api/v0', Routes)

app.post("/", (req : Request, res : Response) => {
   let {name} = req.body;
   console.log(name);
   
    res.send("Hello test router get end point");
});

app.listen(port , () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});