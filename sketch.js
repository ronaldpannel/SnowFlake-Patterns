let canvas;
let num;
let size;
let margin = 10;
let scaleFactor;
let pallet = [
  "#ffffff",
  "#cce7ff",
  "#99d0ff",
  "#66bbff",
  "#339fff",
  "#0077ff",
  "#0055AA",
  "#003377",
];
let band = 100;
let scaleSlider;
let sizeSlider;
let saveButton;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("container");

  scaleSlider = createSlider(1.5, 2.5, 1.5, 0.1);
  scaleSlider.parent("container");
  scaleSlider.position(15, 410);
  scaleSlider.size(250);

  sizeSlider = createSlider(10, 100, 30, 5);
  sizeSlider.parent("container");
  sizeSlider.position(15, 450);
  sizeSlider.size(250);

  saveButton = createButton("Save Design");
  saveButton.parent("container");
  saveButton.position(300, 410);

  saveButton.mousePressed(saveDesign);
}

function draw() {
  background(0, 0, 80);
  noStroke();
  scaleFactor = scaleSlider.value();
  num = sizeSlider.value()
  size = (width - margin * 2) / num;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let x = margin + size / 2 + i * size;
      let y = margin + size / 2 + j * size;

      disFromCenter = dist(x, y, width / 2, height / 2);
      let scaledDis = pow(disFromCenter, scaleFactor);
      let index = floor(map(scaledDis, 0, band, 0, pallet.length));
      let colorIndex = index % pallet.length;
      fill(pallet[colorIndex]);
      ellipse(x, y, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
function saveDesign() {
  saveCanvas("SnowFlake Pattern");
}
