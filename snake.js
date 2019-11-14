/*
Gabriel Paiva Sousa - 2019/11/10
- Classic Snake game
- Order of development:
    - move square with arrow keys:
    .initially done in a by-pixel approach
    .changed to go-to-the-next-square (12/11)
    - make it:
        .go continuously
        . change direction with arrow keys
        .pause
        .grow
        .blink (, motherfucker, blink!)
        .go gradually faster
    - make food appear
    - detect border collision
    - detect self collision
*/


//BACKGROUND OBJECT REFERENCE
var back = document.getElementById("background");
//MOVING SQUARE OBJECT REFERENCE
var boxRef = document.getElementById("animate");
//initial square position
var x = 10*boxRef.offsetWidth;
var y = 8*boxRef.offsetHeight;
//sets initial position
boxRef.style.left = x + "px";
boxRef.style.top = y + "px";
//sets initial period
var period = 850;
//sets step
var step = boxRef.offsetWidth;
        
//get directional keys
document.body.addEventListener('keydown', function(event)
{
    switch (event.keyCode) {
        case 37:
            boxRef.style.left = (boxRef.offsetLeft-step)+"px";
            break;
        case 38:
            boxRef.style.top = (boxRef.offsetTop-step)+"px";
            break;
        case 39:
            boxRef.style.left = (boxRef.offsetLeft+step)+"px";
            break;
        case 40:
            boxRef.style.top = (boxRef.offsetTop+step)+"px";            
    }
});