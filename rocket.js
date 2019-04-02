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
