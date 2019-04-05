const lifespan = 300
let population
let target
let frame = 0
let frameParagraph
let maxFitParagraph
let isDragging
let dragBeginX
let dragBeginY
let dragEndX
let dragEndY

const obstacles = []

function setup() {
  createCanvas(640, 480)
  population = new Population()
  frameParagraph = createP()
  maxFitParagraph = createP()
  createTarget(false)

  obstacles.push(new Obstacle(createVector(300, 200), createVector(300, 300)))
}

function draw() {
  background(0)
  population.update(target, obstacles)
  target.draw()

  obstacles.forEach(obs => obs.draw())

  if (isDragging) {
    drawDragging()
  }
  
  frame++  
  if (frame > lifespan) {
    frame = 0
    population.generatePopulation(target)
  }

  frameParagraph.html(frame)
}

function drawDragging() {
  push()
  stroke(255, 255, 255, 150)
  strokeWeight(10)
  line(dragBeginX, dragBeginY, dragEndX, dragEndY)
  pop()
}

function mousePressed() {
  dragBeginX = mouseX
  dragBeginY = mouseY
}

function mouseDragged() {
  isDragging = true
  dragEndX = mouseX
  dragEndY = mouseY
}

function mouseReleased() {
  if(isDragging) {
    isDragging = false
    obstacles.push(new Obstacle(createVector(dragBeginX, dragBeginY), createVector(dragEndX, dragEndY)))
  }
  else {
    createTarget(true)
  }
}

function mouseClicked() {
}

function createTarget(isMouseEvent) {
  if (isMouseEvent)
    target = new Target(createVector(mouseX, mouseY), 25)
  else
    target = new Target(createVector(500, 240), 25)
}
