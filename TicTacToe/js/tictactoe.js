//this keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves, determines win conditions
let selectedSquares= [];

//placing an x or o in a square
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/o.png")';
        } else {
            select.style.backgroundImage = 'url("images/x.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer= 'O';
        } else {
            activePlayer = 'X';
        }
        audio('media/place.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare= String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare); 
                success= true;
            };
        }
    }
}

function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100) }
    else if (arrayIncludes ('3X', '4X', '5X')) { drawWinLine(50,304,558,304) }
    else if (arrayIncludes ('6X', '7X', '8X')) { drawWinLine(50,508,558,508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100,50,100,558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304,50,304,558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508,50,508,558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100,508,510,90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100,100,520,520) }
    //O array
    else if (arrayIncludes ('3O', '4O', '5O')) { drawWinLine(50,304,558,304) }
    else if (arrayIncludes ('6O', '7O', '8O')) { drawWinLine(50,508,558,508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100,50,100,558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304,50,304,558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508,50,508,558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100,508,510,90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100,100,520,520) }
    //checking for a tie if none of above conditions are met.
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9){
    audio('media/tie.mp3');
    //sets a .3 second timer before the reset game is called.
    setTimeout(function () { resetGame(); }, 500);
    }
    
        //function checks if an array includes 3 strings, used to check for each win condition.
        function arrayIncludes(squareA, squareB, squareC) {
            //these 3 variables will be used to check for 3 in a row.
            const a = selectedSquares.includes(squareA);
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);
            //if the 3 variables we pass are all included in the array then
            //true is returned else if condition executes drawLine() function.
            if (a === true && b === true && c === true) { return true; }
        }
}

//this makes the body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    //this makes the body element clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//takes a string parameter of the path for placement sound ('media/place.mp3')
function audio(audioURL) {
    let audio= new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //indicates the start of a lines y axis is
        y1 = coordY1,
        //indicates the end of a lines x axis
        x2 = coordX2,
        //indicates the end of a lines y axis
        y2 = coordY2,
        //variable stores temp x axis data updated in the animation loop
        x = x1,
        //same as above but temp stores y axis data
        y = y1;

        function animateLineDrawing() {
            //this variable creats a loop
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //this method clears content from the last loop iteration
            c.clearRect(0,0,608,608);
            //this method starts a new path
            c.beginPath();
            //this method moves us to a starting point in the line
            c.moveTo(x1,y1);
            //this method indicates the end point of the line
            c.lineTo(x, y);
            //this method sets the width of the line, the next method sets the color of the line
            c.lineWidth = 10;
            c.strokeStyle = 'rgba(70,225,33,.8)';
            //this method draws everything laid out above.
            c.stroke();
            //this method checks if we've reached the endpoints. each condition then adds 10 to either the
            //x or y endpoint based on if statement
            if (x1 <= x2 && y1 <= y2) {
                if (x < x2) { x+= 10; }
                if (y < y2) { y += 10;}
                //this condition is similar to those above and is neccessary for 6, 4, 2 win condition.
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
            //this conditinn is similar to the one above. Neccessary for 6, 4, 2 win condition.
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) { x += 10; }
                if (y > y2) { y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        }

        //this function clears our canvas after out win line is drawn.
        function clear() {
             //first line clears animation loop, second line clears our canvas
            //the third line clears the animation loop.
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0,0,608,608);
            cancelAnimationFrame(animationLoop);
        }
        //this line disables clicking whilee win sound is playing
        disableClick();
        //this line plays the win audio
        audio('media/winGame.mp3');
        //this line calls out main loop animation.
        animateLineDrawing();
        //this line waits 1 sec then clears canvas, resets game, ands allows clicking again.
        setTimeout(function () { clear(); resetGame(); }, 1000);
    }

    function resetGame() {
        //this for loop iterates through each HTML square element. 
        for (let i = 0; i < 9; i++) {
            //this variable gets the HTML variable i.
            let square = document.getElementById(String(i));
            //this removes the elements backgroundImage.
            square.style.backgroundImage = '';
        }
        //this resets the array so it is empty and platers can start over
        //slectedSquares refers to squares selected by players.
        selectedSquares = [];
    }