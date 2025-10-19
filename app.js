const express= require('express');
const dotenv = require('dotenv')
dotenv.config();
const userRouter = require('./routes/user.routes')
const { body, validationResult } = require('express-validator');
const connectToDB = require('./config/db')
connectToDB();
const cookieParser = require('cookie-parser');
const app= express();
const indexRouter = require('./routes/index.routes')


app.use(express.json());
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use('/user',userRouter)
app.use('/', indexRouter)

process.on('uncaughtException', (err)=>{
    console.log('Uncaught Exception');
    console.log(err);

})

app.listen(3000,()=>{
    console.log('Running on port 3000')
});

