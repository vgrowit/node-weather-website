const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bdbe0523cbca3d07170e3b6ba226e262&query=' +longitude + ',' +latitude
    request({url, json: true}, (error, {body}) => {

        if(error){
            callback('unable to reach out to API', undefined)
        } else if (body.error){
            callback('unable to get the details needed with the params', undefined)
        }else{
            callback(undefined, body)
        }
    })
}

module.exports = forecast