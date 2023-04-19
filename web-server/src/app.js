const path=require('path') //allows you to interact with file paths easily
const express=require('express'); //to handling requests, and handling HTTP methods.
const hbs=require('hbs') //handlebars to write html part
const app=express();
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')// allow us to render web pages using template files
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => { //path & call back // to use http req & http res
res.render('index', { // to render an HTML view.
title: 'ExpressApp',
name: 'Bansh'
})
})
app.get('/about', (req, res) => {
res.render('about', {
title: 'About Me',
name: 'Bansh'
})
})

app.get('/about/*',(req,res)=>
{
res.render('404',
{
title:'404',
name:'bansh',
errormessage:"About page not found"
})
})

app.get('/help', (req, res) => {
res.render('help', {
helpText: 'This is some helpful text.',
title: 'Help',
name: 'Bansh'
})
})

app.get('/help/*',(req,res)=>
{
res.render('404',
{
title:'404',
name:'bansh',
errormessage:"Help page not found"
})
})


app.get('/intro', (req, res) => {
res.render('intro', {
helpText: 'This is some introductory text.',
title: 'Intro',
name: 'Bansh'
})
})

app.get('/intro/*',(req,res)=>
{
res.render('404',
{
title:'404',
name:'bansh',
errormessage:"intro page not found"
})
})

app.get('/history', (req, res) => {
res.render('history', {
helpText: 'This is some historical text.',
title: 'History',
name: 'Bansh'
})
})

app.get('/history/*',(req,res)=>
{
res.render('404',
{
title:'404',
name:'bansh',   
errormessage:"History page not found"
})
})

app.listen(3000, () => {
console.log('Server is up on port 3000.')
})