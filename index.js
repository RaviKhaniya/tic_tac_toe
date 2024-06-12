let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let message= document.getElementById("msg");
let reset = document.querySelector(".reset");
let new_game = document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");
let playerx = true;

const winnings = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5],
    [6, 7, 8],
];



const checkwinner = () =>{
    for(let pattern of winnings){
      let p1 = boxes[pattern[0]].innerText;
      let p2 = boxes[pattern[1]].innerText;
      let p3 = boxes[pattern[2]].innerText;

      if(p1 != "" && p2 != "" && p3 != ""){
        if(p1 === p2 && p2 === p3){
            console.log("Winner");
            showwinner(p1);
           
        }
      }

      

    }
}

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        console.log("Box was clicked")
        if(playerx){
            box.innerHTML = "X";
            box.style.color = "#FF4FDF";
 
            playerx = false;
           
        }
        else{
            box.innerHTML = "O";
            box.style.color = "#FF54AD";
           
            playerx = true;
            
        }
        box.disabled = true;

        checkwinner();
        
        
    });
    
});

const disablebutton= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebutton= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
}

function showwinner(winner) {
    message.innerHTML = `Congratulation, winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebutton();
    
  }




const resetboxes = () =>{
    playerx = true;
    enablebutton();
}

reset.addEventListener("click",resetboxes);
new_game.addEventListener("click",enablebutton);

