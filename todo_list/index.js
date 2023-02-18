const express    = require('express');
const exphbs     = require('express-handlebars');
const conn       = require('./db/conn');
const todo       = require('./models/Todo');
const TodoRoutes = require('./routes/todoRoutes');
const app        = express();

app.engine('handlebars',exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views','./views');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use('/',TodoRoutes);

conn.sync().then(
    app.listen(3000)
).catch(
    (err)=>console.log(err)
);