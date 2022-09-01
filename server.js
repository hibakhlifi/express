

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port , err=>{err? console.log(err):console.log(`Server app listening on port ${port}`)});
     
const middleware = (req, res, next) => {
    let date = new Date();

    
    if((date.getHours()<=9 || date.getHours() >=17) || (date.getDay()==6 || date.getDay()==0)) {return res.send('<h1> The web application is only available during working hours (Monday to Friday,  from 9 to 17) </h1>')}
    next()
}


app.use(middleware)



app.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/public/ContactUs.html')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/HomePage.html')
})
app.get('/ourservice', (req, res) => {
    res.sendFile(__dirname + '/public/OurService.html')
})


