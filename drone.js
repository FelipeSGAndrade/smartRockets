function Drone(dna) {
  this.position = createVector(20, 240)
  this.velocity = createVector()
  this.acc = createVector()
  this.fitness = 0;

  if (dna)
    this.dna = dna
  else
    this.dna = new DNA()
  
  this.update = (target) => {
    this.acc = this.getAcc()
    this.velocity.add(this.acc)

    const distance = dist(this.position.x, this.position.y, target.position.x, target.position.y)
    if (distance > target.radius)
      this.position.add(this.velocity)
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

    if (distance <= target.radius)
      this.fitness *= 10
  }
}
