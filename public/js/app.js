
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#mesg-1')
const messageTwo = document.querySelector('#mesg-2')
const messageThree = document.querySelector('#mesg-3')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const Stock = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/stock?stock='+Stock).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.name
                messageTwo.textContent = data.description
                messageThree.textContent = data.eps
            }
        })
    })

    //console.log(location)

})