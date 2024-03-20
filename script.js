/*
- #CD5C5C == 7
- .preventDefault()
- random * hex.length
*/
const colorEl=document.querySelector('.color')
const btnEl=document.querySelector('.btn')
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


btnEl.addEventListener('click', changeColor)


function changeColor(){
    let hexColor='#'
    for (let index = 0; index < 6; index++) {
        hexColor+=hex[getRandomNum()]
    }
    colorEl.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
}


function getRandomNum(){
    return Math.floor(Math.random() * hex.length)
}
