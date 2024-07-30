let gameBtns = document.querySelectorAll(".btns") ;
let hiddenCont = document.querySelector(".hiddenContainer");
let winDeclareBtn = document.querySelector('.result'); 
let resetBtn = document.querySelector('#resetBtn');
let newGameBtn = document.querySelector('.newGame');
let gameName = document.querySelector('.gameName');
let playerTurn = document.querySelector(".turn");


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
                // console.log(val1.tagName);
                hiddenCont.classList.add('show');
                winDeclareBtn.innerText = `'${val1}' is the Winner!! `;
               
                gameName.innerHTML = 'Below is the Last Game Played';
                resetBtn.disabled = true;

               
                
                for(let btn of gameBtns){
                    btn.disabled = true;
                }
                window.scrollTo({
                    top : 0,
                    left : 0,
                    behavior : 'smooth'
                });
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
            playerTurn.innerText = `Player  '${playerT}'  Turn`;
            button.innerText = 'X';
            button.style.color = '#9f29ff';
        }
        else{
            
            playerT = 'X';
            playerTurn.innerText = `Player  '${playerT}'  Turn`;
            button.innerText = 'O';
            button.style.color = '#ffcc00';
        }
        count++;
        button.disabled = true ;

        newGameBtn.innerText = 'New Game';

        let isWinner = checkWinner();

        if(!isWinner && count ===9 ){
            // hiddenCont.classList.add('show');
            resetBtn.disabled = true;
            winDeclareBtn.innerText = `The Game is a Draw! :) `;
            window.scrollTo({
                top : 0,
                behavior : 'smooth'
            });
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
    // hiddenCont.classList.remove('show');
    gameName.innerText = 'Tic Tac Toe Game';
});



