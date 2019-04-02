function Drone(dna) {
  this.position = createVector(20, 240)
  this.velocity = createVector()
  this.acc = createVector()
  this.fitness = 0
  this.completed = false
  this.crashed = false

  if (dna)
    this.dna = dna
  else
    this.dna = new DNA()
  
  this.update = (target, obstacles) => {
    this.verifyTarget(target)
    this.verifyObstacles(obstacles)

    this.acc = this.getAcc()
    this.velocity.add(this.acc)

    if (!this.completed && !this.crashed)
      this.position.add(this.velocity)
  }

  this.verifyTarget = (target) => {
    const distance = dist(this.position.x, this.position.y, target.position.x, target.position.y)
    if (distance < target.radius)
      this.completed = true
  }

  this.verifyObstacles = (obstacles) => {
    for (let obstacle of obstacles) {
      if (this.position.x < obstacle.position.x + obstacle.width
       && this.position.x > obstacle.position.x
       && this.position.y < obstacle.position.y + obstacle.height
       && this.position.y > obstacle.position.y) {
          this.crashed = true
        }
    }
  }
  
  this.draw = () => {
    push()
    ellipse(this.position.x, this.position.y, 10)
    pop()
  }
  
  this.getAcc = () => {
    return this.dna.genes[frame]
  }

  this.calcFitness = (target) => {
    const distance = dist(this.position.x, this.position.y, target.position.x, target.position.y)
    this.fitness = 1 / distance

    if (this.completed)
      this.fitness *= 10
    if (this.crashed)
      this.fitness /= 2
  }
}