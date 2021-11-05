var HEX_225095 = "#225095";
var HEX_d4121a = "#d4121a";
var HEX_fac901 = "#fac901";
var HEX_Oe2721 = "#0e2721";
var HEX_ffffff = "#ffffff";
var piet = [HEX_225095, HEX_d4121a, HEX_fac901, HEX_Oe2721, HEX_ffffff];
var selectedColor = "#ffffff";
var index = 0;
var canvas;

function nextColor() {
  selectedColor = piet[index];
  if (index + 1 == 5) {
    index = 0;
  } else {
    index++;
  }
}

function setup() {
  canvas = createCanvas(400, 400);
  // canvas.doubleClicked(nextColor);
  canvas.mouseClicked(createShape);
}

function createShape() {
  fill(selectedColor);
  // quad(mouseX, mouseY, mouseX, mouseY+20, mouseX+20, mouseY+30, mouseX+20, mouseY+10);
  quad(mouseX, mouseY, mouseX, mouseY+20, mouseX+40, mouseY+50, mouseX+40, mouseY+30);
  strokeWeight(0);
}

function draw() {
  // strokeWeight(0);
  // fill(selectedColor);
  // ellipse(mouseX, mouseY, 80, 80);
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    nextColor();
  }
  return false;
}