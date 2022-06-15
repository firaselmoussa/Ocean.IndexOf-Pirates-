let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
let block3 = document.getElementById("block3");
let block4 = document.getElementById("block4");
let block5 = document.getElementById("block5");
let block6 = document.getElementById("block6");
let block7 = document.getElementById("block7");
let block8 = document.getElementById("block8");
let block9 = document.getElementById("block9");
let block10 = document.getElementById("block10");
let block11 = document.getElementById("block11");
let block12 = document.getElementById("block12");
let block13 = document.getElementById("block13");
let block14 = document.getElementById("block14");
let block15 = document.getElementById("block15");
let block16 = document.getElementById("block16");
let block17 = document.getElementById("block17");
let block18 = document.getElementById("block18");
let block19 = document.getElementById("block19");
let block20 = document.getElementById("block20");
let block21 = document.getElementById("block21");
let block22 = document.getElementById("block22");
let block23 = document.getElementById("block23");
let block24 = document.getElementById("block24");
let block25 = document.getElementById("block25");
let block26 = document.getElementById("block26");
let block27 = document.getElementById("block27");
let block28 = document.getElementById("block28");
let block29 = document.getElementById("block29");
let block30 = document.getElementById("block30");
let block31 = document.getElementById("block31");
let block32 = document.getElementById("block32");
let block33 = document.getElementById("block33");
let block34 = document.getElementById("block34");
let block35 = document.getElementById("block35");
let block36 = document.getElementById("block36");

let restart = document.getElementById("restart-button");

restart.addEventListener("click", ()=>{
    window.location.reload();
})
let game_blocks = document.getElementById("game-div div");
let fireBtn = document.getElementById("fire-button");
let shipsCount = document.getElementById("pirate-ships-count");
let shotsCount = document.getElementById("shots-left-count");
let commands = document.getElementById("commands")
let weapon = document.getElementById("weapon");
let hint = document.getElementById("hint");
let hint_row = document.getElementById("hint_row");
let hint_column = document.getElementById("hint_column");
let index_of_block = document.getElementById("index_of_block");
let level;
let ships_count = 1;
let shots_count = 6;
let select_check = document.getElementById("select-check");
select_check.addEventListener("click",()=>{
    level = document.getElementById("level").value;
    if(gameOver == true){
        alert('Game Over! Restart')
    }else{
        if(level == 'Easy'){
        shots_count = 6;
        }else if(level == 'Intermediate'){
        shots_count = 4;
        }else if(level == 'Hard'){
        shots_count = 2;
        }
        shotsCount.innerText = shots_count;
    }
    
})

let hint_number;
let gameOver = false;
if( shots_count == 0){
    gameOver = true;
}

let array_of_blocks =[ block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32, block33, block34, block35, block36 ];

let array_of_ships = [];

window.addEventListener("load", ()=>{

    shipsCount.innerHTML = ships_count;
    shotsCount.innerHTML = shots_count;

for(g=0; g<1; g++){
    let x = Math.round((Math.random()*36));

    array_of_ships.push(array_of_blocks[x])

    hint_number = array_of_blocks.indexOf(array_of_blocks[x+1]);

    number_of_row =Math.ceil(hint_number/6);
    hint_row.innerHTML = number_of_row ;

    temp1 = Math.round(Math.sqrt(hint_number))
    temp2 = hint_number**2-temp1;
    temp3 = Math.round(Math.random()*10+1)**2

    isNaN(temp1)
    isNaN(temp2)
    if(isNaN(temp1) || isNaN(temp2)){
        index_of_block.innerHTML = 36
        hint_row.innerHTML = 6
    }else{
        index_of_block.innerHTML = '&#8730 [('+temp1*temp3+'+'+temp2*temp3+') &#247 '+temp3+']';
    }
    
    if(hint_number%2==0){
        
        hint_column.innerHTML = 'Even'
    } else{
        hint_column.innerHTML = 'Odd'
    }
}


}) //

let isClicked = false;
array_of_blocks.forEach(element => {

        element.addEventListener("click", ()=>{
        
            if(isClicked == false){
                element.style.border = '1px solid red';
                element.style.color = 'red';
                isClicked = true;
            }else{
                element.style.border = '1px solid white';
                element.style.color = 'white';
                isClicked = false;
            }
            
        
        fireBtn.addEventListener("click", ()=>{
            
            if(shots_count>=0){
                if(shipsCount.innerHTML != '0'){
            for(p =0; p<=array_of_ships.length; p++){
                if(element == array_of_ships[0]  && isClicked == true){
                    element.style.background = 'black';
                    element.innerHTML = (array_of_blocks.indexOf(element)+1)+'\n Hit! ';
                    // ships_count-=1;
                    shipsCount.innerHTML = '0';
                    gameOver = true
                    
                }else if(isClicked == true){
                    element.style.background = 'blue';
                    element.innerHTML = (array_of_blocks.indexOf(element)+1)+ '\n Miss! ';
                }
            }}else{
                
            }
        }else{
        shotsCount.innerHTML = 0;
    }
        })
    })
});


fireBtn.addEventListener("click",  ()=>{
    if(shots_count<=0){
        alert("you have no more shots!")
    }
    if(isClicked){

        shots_count-=1;
        shotsCount.innerHTML = shots_count;
        
        if(shots_count <= 0 && shipsCount.innerHTML != '0'){
            setTimeout(() => { 
            alert('YOU LOST! RESTART'); 
        }, 500);
        }else if( shipsCount.innerHTML == '0'){
            setTimeout(() => { 
            alert('YOU WON! RESTART') ;
        }, 500);
}
    
    }else{
        alert('choose a target')
    }
});



// //////////////
let creators_div = document.getElementById("creators-div");
    let creators_h3 = document.getElementById("creators-h3");
    let active = false;
        creators_h3.addEventListener("click", ()=>{
        if(active){
            active = false;
                creators_div.animate([
            {
                left: '-40px'
            },
            {
                left: '-140px'
            }
        ], {
            duration: 1000,
            fill: "forwards",
            easing:"ease-out"
        })
        }else{
                active = true;
                creators_div.animate([
            {
                left: '-140px'
            },
            {
                left: '-40px'
            }
        ], {
            duration: 1000,
            fill: "forwards",
            easing:"ease-out"
        })
        }

        
    })