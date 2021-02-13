class Timer{
    gameTime = 0;
    timerInterval = null;
    start(){
        clearInterval(this.timerInterval);
        this.gameTime=0;
        this.timerInterval = setInterval(()=>{
            this.gameTime+=60;
            this.showTime();
        }, 60)
    }
    showTime(){
        let timeDiv = document.querySelector("div#timer");
        let t = this.gameTime;
        let formatTime = `${Math.floor(t/1000/60)}:${Math.floor((t/1000)%60)}:${t%1000}`;
        timeDiv.innerHTML = formatTime;
    }
    stop(){
        clearInterval(this.timerInterval);
    }
}

