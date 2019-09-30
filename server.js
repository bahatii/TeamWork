import express from 'express';
import bodyParser from 'body-parser';


const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: false
}));
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the teamwork endpoint API'
    });
});
app.listen(PORT)
console.log("listening.......");
export default app;