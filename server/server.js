const express =require('express');
const apiRouter = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user',apiRouter);


app.listen(process.env.PORT || '3200',()=>{
    console.log(`Server is running in port: ${process.env.PORT || '3200'}`);
});