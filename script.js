// define container and make it a flexbox
const container = document.querySelector("div");
container.classList.add("container");


// add button to send prompt to user requesting grid dimensions (in squares)
// send button to container
const userPromptBtn = document.createElement("button");
userPromptBtn.textContent = "Resize Grid";
userPromptBtn.justifyContent = "center";
userPromptBtn.style.width = "200px";
container.appendChild(userPromptBtn);

// add flexbox for grid to populate into
// send flexbox to container
const flex = document.createElement("div");
flex.classList.add("flex");
container.appendChild(flex);

// add eventListener for button click
// call drawBoxes with given input
userPromptBtn.addEventListener("click", () => {
    const userInput = prompt("Please enter new grid dimensions: ");
    if(userInput > 100) {
        userInput = prompt("Please choose a number under 100");
    } else {
       drawBoxes(userInput);
    }
});

drawBoxes(16);

// function to populate grid with squares
function drawBoxes(squares) {
    const boxes = flex.querySelectorAll("div");
    // clear grid before each use
    boxes.forEach((box) => {
        console.log("REMOVE BOXES");
        box.remove();
    });

// loop through and create squares as divs to occupy the container
    for(i = 0; i < (squares*squares); i++) {
        const box = document.createElement("div");
        // give each box a height & width of 960/squares pixels
        let dimension = 960/squares + "px";
        box.style.width = dimension;
        box.style.height = dimension;
        // create a "hover" eventListener to change the background color of
            // a div when the mouse enters its borders   
        box.addEventListener("mouseenter", () => {
            box.classList.add("black");
            });
        flex.appendChild(box);
    }
}