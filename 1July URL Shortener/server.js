const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./Models/shortUrl')
const app = express()

mongoose.connect('mongodb+srv://tarun:tarun@cluster0.rdc1d.mongodb.net/?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',async(req,res)=>{
   const shorturls = await ShortUrl.find()
   res.render('index',{shorturls:shorturls})
})
app.post('/shortUrls',async(req,res)=>{
await ShortUrl.create({full:req.body.url})
res.redirect('/')
})
app.get('/:shortUrl',async(req,res)=>{
 const shortUrl = await ShortUrl.findOne({short:req.params.shortUrl})
 if (shortUrl == null) return res.sendStatus(404);

    shortUrl.clicks++;
    shortUrl.save()
    res.redirect(shortUrl.full);
})

app.listen(5000)