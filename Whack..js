// Creating the mole to randomly pop up on one of the 25 squares
function popUp() {
    if (document.querySelector(".mole")) {
        document.querySelector(".mole").classList.remove(".mole");
    }
    let holeNum = Math.floor(Math.random * 25 + 1);
    let current = document.getElementById(`hole${holeNum}`);
    current.classList.add("mole");
}
popUp();
