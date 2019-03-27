const popSize = 10
let rockets = []
const lifespan = 200
let frame = 0

function setup() {
  createCanvas(640, 480);
  
  createRockets()
}

function createRockets() {
  rockets = []
  for (let i = 0; i < popSize; i++) {
    rockets.push(new Rocket())
  }
}

function draw() {
  background(0);
  rockets.forEach(rocket => {
    rocket.update()
    rocket.draw()    
  })
  
  frame++  
  if (frame > lifespan) {
    frame = 0;
    createRockets()
  }
}

function DNA() {
  this.genes = []
  for (let i = 0; i < lifespan; i++) {
    this.genes[i] = p5.Vector.random2D().setMag(0.5)
  }
}

function Rocket() {
  this.position = createVector(20, 240)
  this.velocity = createVector()
  this.acc = createVector()
  this.dna = new DNA()
  
  this.update = () => {
    this.velocity.add(this.acc)
    this.position.add(this.velocity)
    this.acc = this.getAcc()
  }
  
  this.draw = () => {
    ellipse(this.position.x, this.position.y, 25)
  }
  
  this.getAcc = () => {
    return this.dna.genes[frame]
  }
}
