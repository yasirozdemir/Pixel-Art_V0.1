let containerNode = document.getElementsByClassName("container")[0]; // container selected

// color input
let colorInput = document.getElementById("color-input");

// ONLOAD ACTIONS

window.onload = onloadActions();

function onloadActions() {
  createPixelsOnLoad();
}

//-----------------------------------

let colorInputContainer = document.getElementById("color-picker-container");

colorInput.onchange = function () {
  colorInputContainer.style.backgroundColor = colorInput.value;
};
colorInputContainer.style.backgroundColor = colorInput.value;

function createPixelsOnLoad() {
  // pixels created and click event listener added to all
  for (let i = 1; i <= 115 * 55; i++) {
    // 115 pixels for each row, there must be 55 rows to fill the container
    let pixel = document.createElement("div"); // creating pixels

    pixel.classList.add("pixels"); // adding class to pixels
    pixel.setAttribute("id", `pixel-${i}`);

    containerNode.appendChild(pixel); // appending pixels to the container

    pixel.addEventListener("click", function () {
      // adding event listener to all pixels
      let clickedPixelID = pixel.getAttribute("id");
      console.log(clickedPixelID); //TODO: clicked pixel ID is declared in case of any need
      pixel.style.backgroundColor = colorInput.value;
    });
  }
}

let pixelsNode = document.getElementsByClassName("pixels"); // pixels array

function paintOnMouseOver() {
  // TODO: add a button to stop it
  for (let pixel of pixelsNode) {
    pixel.addEventListener("mouseover", function () {
      pixel.style.backgroundColor = colorInput.value;
    });
  }
}

function clearAll() {
  for (let pixel of pixelsNode) {
    pixel.style.backgroundColor = "rgb(243, 243, 243)";
  }
}

function eraser() {
  // TODO: add a button to change it with brush
  for (let pixel of pixelsNode) {
    pixel.addEventListener("click", function () {
      pixel.style.backgroundColor = "rgb(243, 243, 243)";
    });
  }
}

// TODO:s -------------------------------------------
// add ERASER
// add SHOW PIXEL BORDERS BUTTON
// add SAVE BUTTON
// add a CUSTOM CURSOR (paint, eraser etc.)
