const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')

app.get('/fact', (req, res) => {
    fetch('https://catfact.ninja/fact')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        res.render('home', {data})
    })
    .catch((e) => {
        console.log('Error!!!!', e)
    })
    
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('listening on port 3000')
})