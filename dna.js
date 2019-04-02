function DNA() {
  this.genes = []
  for (let i = 0; i < lifespan; i++) {
    this.genes[i] = p5.Vector.random2D().setMag(0.5)
  }
}
