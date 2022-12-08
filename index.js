const express=require('express');
const bodyParser=require('body-parser');
const { default: mongoose }=require('mongoose');
const route=require('./src/routes/route');

const app=express();

app.use(bodyParser.json());



mongoose.connect("mongodb+srv://rajgupta07082000:0Um5TBcHGam3DxeZ@cluster0.p92r9bx.mongodb.net/rajgupta07082000-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});