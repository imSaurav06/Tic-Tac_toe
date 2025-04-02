let boxs = document.querySelectorAll(".box");
let reset_btn = document.querySelectorAll("#Reset");

let turnO =true ;// player.x , player.y

//2D Array
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 boxs.forEach((box) => {
    box.addEventListener("click", ()=>{
        
        console.log("Box clicked");
        if(turnO){
            box.innerHTML='O';
            turnO=false;
        }
        else{
        box.innerHTML='X';
        turnO=true;
        }
        box.disabled = true;
        checkwinner();

    });

   
});

const checkwinner=() =>{
    for(let pattern of winpattern){
        
        let pos1val = boxs[pattern[0]].innerHTML;
        let pos2val = boxs[pattern[1]].innerHTML;
        let pos3val = boxs[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val!= "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val)
            console.log("Winner");

        }
    }
    
};
