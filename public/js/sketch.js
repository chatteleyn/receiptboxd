function drawLine(y) {
  fill(0);
  textSize(20);
  textStyle(NORMAL);
  textAlign(CENTER);
  let w = textWidth("- ");
  text("- ".repeat(floor((width * 0.9) / w)), width / 2, y);
}

function drawMovie() {}

function drawAllMovies() {
  textAlign(LEFT);
  fill(0);
  textSize(20);
  textStyle(BOLD);
  text("Movie name", width * 0.05, 255);
  textAlign(RIGHT);
  text("Rating", width * 0.95, 255);
}

function drawReceipt() {
  textFont("Helvetica");
  textAlign(CENTER);
  fill(0);
  textSize(40);
  textStyle(BOLD);
  text("RECEIPTBOXD", width / 2, 80);
  textSize(20);
  textStyle(NORMAL);
  text("blablaba blablabla", width / 2, 115);
  text("blablaba blablabla", width / 2, 140);
  drawLine(180);
  textAlign(LEFT);
  text("User: test", width * 0.05, 205);
  textAlign(RIGHT);
  text("Date: July 2023", width * 0.95, 205);
  drawLine(230);
  drawAllMovies();
}

function setup() {
  createCanvas(600, 1500);

  background(240);
  drawReceipt();
  //getMovies("chatteleyn");
  getDiaryData("chatteleyn");
}

function draw() {}
