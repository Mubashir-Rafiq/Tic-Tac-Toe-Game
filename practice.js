let gameBtns = document.querySelectorAll(".btns") ;
let hiddenCont = document.querySelector(".hiddenContainer");
let winDeclareBtn = document.querySelector('.result'); 
let resetBtn = document.querySelector('#resetBtn');
let newGameBtn = document.querySelector('.newGame');
let gameName = document.querySelector('.gameName');


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] ;

function checkWinner(){
    for(var pattern of winPatterns){
        let val1 = gameBtns[pattern[0]].innerText ;
        let val2 = gameBtns[pattern[1]].innerText ;
        let val3 = gameBtns[pattern[2]].innerText ;

        if (val1 != "" &&  val2 != "" &&  val3 != "" ){
            if(val1 === val2 && val2 === val3){
                hiddenCont.classList.add('show');
                gameName.innerHTML = 'Below is the Last Game Played';
                resetBtn.disabled = true;
                winDeclareBtn.innerText = `'${val1}' is the Winner!! `;
                for(let btn of gameBtns){
                    btn.disabled = true;
                }
                return true;
            }
        }
    }
}


let playerT = 'X' ;
let count = 0;

gameBtns.forEach( (button) => {
    button.addEventListener('click', () => {
        if(playerT === 'X'){
            playerT = 'O';
            button.innerText = 'X';
            button.style.color = '#9f29ff';
        }
        else{
            playerT = 'X';
            button.innerText = 'O';
            button.style.color = '#ffcc00';
        }
        count++;
        button.disabled = true ;

        let isWinner = checkWinner();

        if(!isWinner && count ===9 ){
            hiddenCont.classList.add('show');
            resetBtn.disabled = true;
            winDeclareBtn.innerText = `The Game is a Draw! :) `;
        }

    });
});

const resetGame = () =>{
        playerT = 'X';
        count = 0;
        for (let btn of gameBtns){
            btn.innerText = '';
            btn.disabled = false ;
        }
};

resetBtn.addEventListener('click' , resetGame);

newGameBtn.addEventListener('click' , () => {
    resetBtn.disabled = false;
    resetGame();
    hiddenCont.classList.remove('show');
    gameName.innerText = 'Tic Tac Toe Game';
});



