
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#mesg-1')
const messageTwo = document.querySelector('#mesg-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log('No address entered')
            }else{
                console.log(data.location)
            }
        })
    })

    //console.log(location)

})