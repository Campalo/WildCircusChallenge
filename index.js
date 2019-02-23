/***
 * SwithTheme 
 ***/
//set the theme to 'light' by default
switchTheme('light');

//Theme parameter should be 'dark' or 'light'
function switchTheme(theme) {
  document.documentElement.className=theme;
  document.getElementById("switch").className=theme;
}



/***
 * Go to top 
 ***/ 
//Call the function who show the "top" button when the user scroll down xpx from the top of the document
window.onscroll=function() {scrollFunction()};

//If the user scroll down more than xpx, then show the "top" button ; if not, keep the button hidden
function scrollFunction() {
  if (document.documentElement.scrollTop>600) {
    document.getElementById("top").style.transform="translateY(0)";   /* visible */
  } else {
    document.getElementById("top").style.transform="translateY(100px)";   /* hidden */
  }
}

//Scroll to the top of the document when the user clicks on the "top" button
function topFunction() {
  document.documentElement.scrollTop = 0;
}



/***
 * Game
 ***/
// Set game level to 1 by default
let level=1;
const gifList=[
  "url(https://media.giphy.com/media/qixJFUXq1UNLa/giphy.gif)", // monkey happy
  "url(https://media.giphy.com/media/3oAt1WIhiFvFvc0mRO/giphy.gif)", // cats
  "url(https://media.giphy.com/media/RlhQbYtETaRfG/giphy.gif)", // monkey biking
  "url(https://media.giphy.com/media/WU8nnAdxZWeM8/giphy.gif)", // magician
  "url(https://media.giphy.com/media/ava8sWgcW387C/giphy.gif)", // monkey playing music
  "url(https://media.giphy.com/media/l2YWs1NexTst9YmFG/giphy.gif)", // abracadabra
  "url(https://media.giphy.com/media/LpUgnQyOwjvR6/giphy.gif)", // magician monkey
]
start();

// Fonction launched when the user clicks on next or previous buttons
function next() {
  if (level < gifList.length) { 
    level+=1; start();
  } else { // Surprise awaits you at the last level 😉
    document.getElementById("board").style.setProperty("background-image", "url(https://media.giphy.com/media/ehhuGD0nByYxO/giphy.gif)");
  }
}

function previous() {
  if (level > 1) level -=1;
  start();
}

function start() {
  const board=document.getElementById("board");
  board.style.setProperty("--lvl", level);
  board.style.setProperty("background-image", gifList[level - 1]); // Arrays start at 0, while level starts at 1.
  
  // Remove all children from the board
  while(board.firstChild) {
    board.removeChild(board.firstChild)
  }

  // Add new children to the board
  for (let i=0; i < level*level; i++) {
    const tile=document.createElement("div");
    tile.style.setProperty("background-color", "var(--action)");
    board.appendChild(tile);
  
  // Set and then decrease tile's opacity
    let opacity=1;
    tile.onclick=function() {
      opacity -= 0.4;
      tile.style.setProperty("opacity", opacity);
    }
  }
}

