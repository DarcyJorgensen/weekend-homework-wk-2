let score = document.getElementById( "score" );
let timer = document.getElementById( "timer");

let startGame = document.getElementById("startGame");

// let imageMole = document.getElementsByName(src: /mole.png, title:"imageMole", alt: "imageMole", id: "imageMole")method;

let gameRunning = false;

startGame.addEventListener("click", (e)=>{
   if (gameRunning == false){
       timer.innerText = "10";
       score.innerText = "0";
       gameRunning = true;

    popUp();
   
    let countDown = setInterval(() => {

        if(timer.innerText == 0)
        {
            clearInterval(countDown);
            gameRunning = false;
        }
        else{
            timer.innerText--;
        }
       
    }, 1000);
}
})
// Creating the mole to randomly pop up on one of the 25 squares
function popUp() {
    let holeNum = Math.floor(Math.random() * 25 + 1);
    let current = document.getElementById(`hole${holeNum}`);
    current.classList.add("mole");

    current.addEventListener("click", (e) => {
        if (e.target.id === current.id && current.classList.contains("mole")){
            score.innerText++;
            popDown();
        }
    })

    // Increment pop-up time, not always the same time
    setTimeout(() => {
        popDown();
        if(timer.innerText != 0)
        {
            popUp();
        }
    }, 1000 * Math.floor(Math.random() * 2 +1));
}


function popDown() {
    if (document.querySelector(".mole")) {
        document.querySelector(".mole").classList.remove("mole");
    }
}
