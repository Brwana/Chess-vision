//decleration of used global variables
const chessBoard = document.getElementById("chessBoard");
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
document.getElementById("correctAnswersCount").textContent = `${correctAnswersCount}`;
document.getElementById("wrongAnswersCount").textContent = `${wrongAnswersCount}`;
let correctAnswers = [];
let wrongAnswers = [];
const charsOfChessBoardCoordinates = "abcdefgh";



function createChessBoard() {

    for (i = 8; i > 0; i--) {

        for (j = 0; j < 8; j++) {

            const chessBoardSquare = document.createElement('button');
            chessBoardSquare.id = charsOfChessBoardCoordinates.charAt(j) + i;
            chessBoard.appendChild(chessBoardSquare);
            const rowsAndColumnsAreBothEvenOrOdd = i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0;
            if (rowsAndColumnsAreBothEvenOrOdd) {

                chessBoardSquare.className = "white";
            }
            else {
                chessBoardSquare.className = "black";
            }

        }
        //add a new line after 8 squares
        chessBoard.appendChild(document.createElement('br'));
    }

    chessBoard.addEventListener('click', handleButtonClick);


}


function createRandomCoordinates() {
    const randomCoordinates = document.getElementById("random_coordinates");
    indexchar = Math.floor((Math.random() * 8));
    num = Math.floor((Math.random() * 8)) + 1;
    randomCoordinates.textContent = `${charsOfChessBoardCoordinates.charAt(indexchar)}${num}`;
    // return (charsOfChessBoardCoordinates.charAt(indexchar)+num);
}




/*This function compares the clicked button with the random coordinates- 
 generated and append the results in correct and wrong answers arraies*/

function handleButtonClick(event) {
    let randomCoordinates = document.getElementById("random_coordinates").textContent;
    // event.target => the clicked button
    if (event.target.id == randomCoordinates) {
        var greenColoredCorrectAnswer = document.createElement('span'); //to display the correct answer in green color
        greenColoredCorrectAnswer.classList.add('correctAnswerColor');
        greenColoredCorrectAnswer.textContent = `${randomCoordinates}`;
        document.getElementById("results").append(greenColoredCorrectAnswer, " ");
        document.getElementById("correctAnswersCount").textContent = `${correctAnswersCount += 1}`;
    }
    else {
        var redColoredWrongAnswer = document.createElement('span');// to display the wrong answer in red color
        redColoredWrongAnswer.classList.add('wrongAnswerColor');
        redColoredWrongAnswer.textContent = `${randomCoordinates}`;
        document.getElementById("results").append(redColoredWrongAnswer, "  ");
        document.getElementById("wrongAnswersCount").textContent = `${wrongAnswersCount += 1}`;
    }
    createRandomCoordinates();


}
// functions calling
createChessBoard();
createRandomCoordinates();