

const express = require('express')
const path = require('path')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname)
console.log(__filename)

const app = express()
const port = process.env.PORT || 3000

//Define paths for express config
const parentdirectorypath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials')
// console.log(parentdirectorypath)
// console.log(viewspath)
// console.log(partialspath)


//setup handlers engine and views
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialspath)

app.use(express.static(parentdirectorypath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Stock Screener', 
        name: 'Prasanth Vedantam'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Vedantam'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Vedantam'
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help extensions',
        name: 'Vedantam', 
        errorMessage: 'Help article not found'

    })
})

app.get('/stock', (req, res) => {
    console.log(req.query.stock)
    console.log(res.error)
    if(!req.query.stock){
        return res.send({
            errorMessage: 'address must be provided'
        })
    }
    geocode(req.query.stock, (error, symbol) => {
        if (error){
            return res.send({error})
        }
        forecast(symbol, (error, forecastData) => {
            if (error){
                return res.send({error})
            }
            res.send({
                //forecast: forecastData.current.weather_descriptions[0],
                name: forecastData.Name,
                description: forecastData.Description,
                eps: forecastData.EPS
            })
        })
    })

})

app.get('/products', (req, res) => {
    //console.log(req.query.search)
    if(!req.query.search){
        //console.log('Search key needs to be provided')
        return res.send({errorMessage: 'Search key needs to be provided'})
    }
    res.send({
        products:[]
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vedantam', 
        errorMessage: 'Page not found'

    })
})



// app.get('/help', (req, res) => {
//     res.send([
//     {
//         name: 'vedantam',
//         age: 45
//     },
//     {
//         name: 'prasanth',
//         age: 45.5
//     }])
// })
// app.get('/about', (req, res) => {
//     res.send('<h1>About page</h1>')
// })

app.listen(port, (req, res) => {
    console.log('serve is up on the port' +port)
})
