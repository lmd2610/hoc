const express = require('express');
const bodyParser =  require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();

const port =3000;

app.set('view engine','pug');
app.set('views',"./views");
const userRoute = require("./routes/user.routes");
const authRoute = require('./routes/auth.routes');
const middlewware = require('./middleware/auth.middleware');



app.use(cookieParser())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));



app.set('view engine' , 'pug');
app.set('views','./views');



app.get('/', function(req,res){
  res.render('index',{
    name: 'Duc123'
      });

});
app.get('/styles/custom.css',function(req,res){
	res.send('abc');
});

app.use('/users',userRoute);
app.use('/auth',authRoute);
app.listen(port, function () {
  console.log('Start server port 3000')
})
