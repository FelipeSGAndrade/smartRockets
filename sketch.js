const lifespan = 200
let population
let target
let frame = 0
let frameParagraph
let maxFitParagraph

const obstacles = []

function setup() {
  createCanvas(640, 480)
  population = new Population()
  frameParagraph = createP()
  maxFitParagraph = createP()
  target = new Target(createVector(500, 240), 25)

  obstacles.push(new Obstacle(createVector(300, 200), 10, 100))
}

function draw() {
  background(0)
  population.update(target, obstacles)
  target.draw()

  obstacles.forEach(obs => obs.draw())
  
  frame++  
  if (frame > lifespan) {
    frame = 0
    population.generatePopulation(target)
  }

  frameParagraph.html(frame)
}
