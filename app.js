const jokesDisplay = document.querySelector('#jokes')
const buttonDisplay = document.querySelector('button')

buttonDisplay.addEventListener('click',async()=>{
    try {
        let joke = await genrateJoke();
        jokesDisplay.innerHTML = joke
    } catch (error) {
        
    }
})

async function genrateJoke (){
    try {
        let data = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        let response = await data.json();
        return response.joke
    } catch (error) {
        console.log(error)
    }
}

let redBtn = document.querySelector('#red');
let blueBtn = document.querySelector('#blue');
let greyBtn = document.querySelector('#grey');
let seaGreenBtn = document.querySelector('#seaGreen');
let yellowBtn = document.querySelector('#yellow');
let orangeBtn = document.querySelector('#orange')



redBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'red';
})
blueBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'blue';
})
greyBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'grey';
})
seaGreenBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'seagreen';
})
yellowBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'yellow';
})
orangeBtn.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'orange';
})
