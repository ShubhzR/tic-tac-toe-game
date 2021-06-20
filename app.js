var player = 'X';

function printResult(resultMessage){
    document.getElementById("result").innerHTML = resultMessage;
    document.getElementById("message").innerHTML = "(For next game, Please click on the reset button)";
}

function validate() {
    var matrix = getState();
    // console.log(matrix);
    var i;
    for(i=0;i<3;i++){
        if(matrix[i][0] != "" && matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]){
            printResult("Player " + player + " is Winner!");
            return;
        }
    }

    for(i=0;i<3;i++){
        if(matrix[0][i] != "" && matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]){
            printResult("Player " + player + " is Winner!");
            return;
        }
    }
    if(matrix[0][0] != "" && matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]
     || matrix[0][2] != "" && matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]){
        printResult("Player " + player + " is Winner!");
        return;
     }
     
    let isDraw = true;
     for(i=0 ; i<3 ; i++){
        for(j=0 ; j<3 ; j++){
            if(matrix[i][j] === ""){
                isDraw = false;
            }
        }
    }
    if(isDraw === true){
        printResult("Well Played, It's a draw!");
    }
}  
function getState() {
    var matrix = [];
    var i;
    for(i=0 ; i<3 ; i++){
        for(j=0 ; j<3 ; j++){
            var id = "" + i + j;
            if(j==0)
                matrix[i] = [];
            matrix[i].push(document.getElementById(id).innerHTML);
        }
    }
    return matrix;
}

document.getElementsByClassName("cell-container")[0].addEventListener("click",(e)=>{
    var id = e.target.id;
    if(document.getElementById(id).innerHTML === "" && document.getElementById("result").innerHTML === ""){
        if(player === 'X'){
            document.getElementById(id).innerHTML = "X";
            validate();
            player = 'O';
        }
        else if(player === 'O'){
            document.getElementById(id).innerHTML = "O";
            validate();
            player = 'X';
        }
        document.getElementById("player").innerHTML = player;
    }
})

document.getElementById("resetButton").addEventListener("click",(e)=>{
   let i=0,j=0;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            document.getElementById(""+i+j).innerHTML = ""; 
        }
    }
    player = 'X';
    document.getElementById("result").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("player").innerHTML = player;
})

