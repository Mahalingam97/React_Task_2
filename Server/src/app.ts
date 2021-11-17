import express, {Application} from "express";
var cors = require('cors');
const app:Application = express();
const PORT:number = 5000;
let corsOptions = {
  origin: '*' // Sensitive
};
app.use(cors(corsOptions))
app.use('/', require('./routes/search'));
app.listen(PORT,()=>{
    console.log(`Server is listening at port : ${PORT}`);
})
