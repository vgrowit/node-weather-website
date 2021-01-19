
const request = require('request')


const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhdmVkIiwiYSI6ImNranVhdTg5ejMxNmIyem1qNXJtMWU4ZjgifQ.cuA598uTwEtFE6AR-tHrtg&limit=1%2'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('unable to reach out to API', undefined)
        }else if (body.features.length === 0){
            callback('unable to get the details needed with the params', undefined)
        }else{
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0]
            })
        }

    })

}

module.exports = geocode
