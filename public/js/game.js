let randrange = (max) => {
    let randarr = [];
    while (randarr.length < max){
        let rand = Math.floor(Math.random() * ((max+1)-1) +1);
        if(randarr.indexOf(rand) === -1){
            randarr.push(rand);
        }
    }
    return randarr;
};
class Card{
    constructor(id, symbol, color) {
        this.id = id;
        this.symbol = symbol;
        this.color = color;
    }
}
class Game{
    tab = ["♥","♦","♣","♠","♪","♫"];
    colors = ["black", 'red','green','blue','cyan','pink']
    cards = [];
    activeCard = null;
    gameTimer = new Timer();

    newGame(size){
        if(size > this.tab.length){
            console.log("Brak symboli do rozegrania");
            return 0;
        } else {
            this.cards = [];
            let cardID = 1;
            for (let i = 0; i < size; i++) {
                this.cards.push(new Card(cardID++, this.tab[i], this.colors[i]));
                this.cards.push(new Card(cardID++, this.tab[i], this.colors[i]));
            }
            this.shuffle();
            this.draw();
            this.gameTimer.start();
        }
    }

    draw(){
        let GameDiv = document.querySelector("div#game");
        GameDiv.innerHTML = "";
        for(let i=0 ; i<this.cards.length ; i++){
            let cardDiv = document.createElement("div");
            if(this.cards[i].symbol === null){
                cardDiv.innerHTML = "&nbsp;";
                cardDiv.classList.add("emptycard");
                GameDiv.appendChild(cardDiv);
                continue;
            }
            // cardDiv.innerText = this.cards[i].symbol;
            cardDiv.style.color = `black`;
            cardDiv.innerText = "X";
            // cardDiv.style.color = `${this.cards[i].color}`;
            cardDiv.addEventListener('click', ()=>{
            cardDiv.innerText = this.cards[i].symbol;
            cardDiv.style.color = `${this.cards[i].color}`;
                cardDiv.classList.toggle("select");
                this.pair(i);
            });
            cardDiv.setAttribute('id',`card-${this.cards[i].id}`)
            GameDiv.appendChild(cardDiv);
        }
    }

    shuffle(){
        let randarr = [];
        let max = this.cards.length;
        while (randarr.length < max){
            let rand = Math.floor(Math.random() * ((max+1)-1) +1);
            if(randarr.indexOf(rand) === -1){
                randarr.push(rand);
            }
        }
        let tempCards = [...this.cards];
        this.cards = [];
        for (let i=0 ; i < randarr.length ; i++){
            let ind = randarr[i]-1;
            this.cards.push(tempCards[ind]);
        }
    }

    pair(cardID){
        console.log(`in mathod pair: ${cardID}`);
        if(this.activeCard === null){
            this.activeCard = cardID;
        } else {
            if(this.activeCard === cardID){
                this.activeCard = null;
                return;
            }
            if(this.cards[this.activeCard].symbol === this.cards[cardID].symbol){
                console.log("dopasowano");
                    this.cards[this.activeCard].symbol = null;
                    this.cards[cardID].symbol = null;

                    this.draw();
            } else {
                console.log("róźne symbole");
                this.hideCards();
            }
            this.activeCard = null;
        }
        this.isEnd();
    }
    hideCards(){
            let selectedDiv = document.querySelectorAll("div.select");
            setTimeout(()=>{
                selectedDiv.forEach(ele => {
                    ele.classList.remove("select");
                    ele.innerText = "X";
                    ele.style.color = `black`;
                });
            },500)
    }
    isEnd(){
        for (let i = 0 ; i < this.cards.length ; i++){
            if(this.cards[i].symbol !== null){
                return;
            }
        }
        console.log("KONIEC GRY");
        this.gameTimer.stop();
    }
}
let A = new Game();
