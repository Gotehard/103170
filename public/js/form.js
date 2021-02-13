let inputRange = document.querySelector("input#setGameSize");
document.querySelector("span#rangeDisplay").innerHTML = inputRange.value;

inputRange.addEventListener('change', ()=>{
    document.querySelector("span#rangeDisplay").innerHTML = inputRange.value;
});
let newGameButton = document.querySelector("button#startNewGame");
newGameButton.addEventListener('click', ()=>{
    A.newGame(inputRange.value);
});
