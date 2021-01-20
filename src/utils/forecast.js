const request = require('request')

const forecast = (symbol, callback) => {

    //const url = 'http://api.weatherstack.com/current?access_key=bdbe0523cbca3d07170e3b6ba226e262&query=' +longitude + ',' +latitude
    const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+symbol+'&apikey=4ZA79YA61J6L5WIQ'
    request({url, json: true}, (error, {body}) => {

        if(error){
            callback('unable to reach out to API', undefined)
        } else if (body.error){
            callback('unable to get the details needed with the params', undefined)
        }else{
            console.log(symbol)
            console.log(body)
            callback(undefined, body)
        }
    })
}

module.exports = forecast