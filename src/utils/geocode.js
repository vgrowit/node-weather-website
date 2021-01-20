
const request = require('request')


const geocode = (address, callback) => {

    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhdmVkIiwiYSI6ImNranVhdTg5ejMxNmIyem1qNXJtMWU4ZjgifQ.cuA598uTwEtFE6AR-tHrtg&limit=1%2'
    const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+encodeURIComponent(address)+'&apikey=4ZA79YA61J6L5WIQ'
    //const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + encodeURIComponent(address) + '&apikey=4ZA79YA61J6L5WIQ'
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('unable to reach out to API', undefined)
        }else if (body.bestMatches.length === 0){
            callback('unable to get the details needed with the params', undefined)
        }else{
            entries = Object.entries(body.bestMatches[0])

            console.log(entries[0][0], entries[0][1])
            console.log(entries[3][0], entries[3][1])
            console.log(entries[1][0], entries[1][1])
            
            // location: body.bestMatches[0][0],
            // latitude: body.bestMatches[0].symbol,
            // longitude: body.bestMatches[0].name
            //console.log(data)
            //console.log(body.bestMatches[0].4. region)
            // console.log(body.bestMatches[0].{1. symbol})
            // console.log(body.bestMatches[0].{2. name})
            callback(undefined, entries[0][1])
            // callback(undefined, {
            //     // location: body.features[0].place_name,
            //     // latitude: body.features[0].center[1], 
            //     // longitude: body.features[0].center[0]
            //     //location: entries[1][1],
            //     symbol: entries[0][1]
            //     //longitude: entries[3][1]
                
            // })
        }

    })
}

module.exports = geocode
