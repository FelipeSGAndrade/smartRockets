function Drone(dna) {
  this.position = createVector(20, 240)
  this.velocity = createVector()
  this.acc = createVector()
  this.fitness = 0
  this.completed = false
  this.crashed = false
  this.framesToComplete = null;

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
    if (this.completed) return

    const distance = dist(this.position.x, this.position.y, target.position.x, target.position.y)
    if (distance < 10) {
      this.completed = true
      this.framesToComplete = frame
    }
  }

  this.verifyObstacles = (obstacles) => {
    if (this.crashed) return

    for (let obstacle of obstacles) {
      if (this.position.x < obstacle.endPosition.x + obstacle.width
       && this.position.x > obstacle.beginPosition.x - obstacle.width
       && this.position.y < obstacle.endPosition.y
       && this.position.y > obstacle.beginPosition.y) {
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


    if (this.completed) {
      this.fitness += 10 * ( 1 / this.framesToComplete )
    }
    if (this.crashed)
      this.fitness /= 10
  }
}
