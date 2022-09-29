window.onload = () => {

    // getting the elements by ID
    const topleft = document.getElementById("0");
    const topmid = document.getElementById("1");
    const topright = document.getElementById("2");
    const midleft = document.getElementById("3");
    const mid = document.getElementById("4");
    const midright = document.getElementById("5");
    const bottomleft = document.getElementById("6");
    const bottommid = document.getElementById("7");
    const bottomright = document.getElementById("8");

    let marked = 0;
    let turn = 0;

    var red = document.createElement("img");
    var yellow = document.createElement("img");
    red.src = "red.png";
    yellow.src = "yellow.png";

    //
    const tick = (e) => {
        if(marked == 0){
            marked = 1;
            if(turn == 0){
                turn = 1; //set the turn to yellow
                topleft.appendChild(red); //add red coin
            }
            else{
                turn = 0; //set the turn to red
                var div = document.getElementById("topleft");
                topleft.appendChild(yellow); //add yellow coin
            }
        }
        else{
            
        }
    }

    // add functionality to the elements
    topleft.addEventListener("click", tick);  

}