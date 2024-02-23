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
