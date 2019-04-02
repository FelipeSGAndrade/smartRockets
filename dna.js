function DNA(genes) {
  if(genes)
    this.genes = genes
  else {
    this.genes = []
    for (let i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D().setMag(0.2)
    }
  }

  this.crossover = (parent) => {
    const newGenes = []
    const mid = floor(random(this.genes.length))

    for (let i = 0; i < this.genes.length; i++) {
      if (i > mid)
        newGenes[i] = this.genes[i]
      else
        newGenes[i] = parent.genes[i]
    }

    return new DNA(newGenes);
  }
}
