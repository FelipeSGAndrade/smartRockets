function DNA(genes) {

  this.initialize = () => {
    this.mutationChance = 0.005

    if(genes)
      this.genes = genes
    else {
      this.generateRandomGenes()
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

  this.mutate = () => {
    for (let i = 0; i < this.genes.length; i++) {
      const shouldMutate = random() < this.mutationChance
      if (shouldMutate) {
        this.genes[i] = this.getRandomForce()
      }
    }
  }

  this.generateRandomGenes = () => {
    this.genes = []
    for (let i = 0; i < lifespan; i++) {
      this.genes[i] = this.getRandomForce()
    }
  }

  this.getRandomForce = () => {
    return p5.Vector.random2D().setMag(0.2)
  }

  this.initialize()
}
