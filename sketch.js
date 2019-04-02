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
