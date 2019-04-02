function Population() {
  this.drones = []
  this.popsize = 100
  this.matingPool = []

  for (let i = 0; i < this.popsize; i++) {
    this.drones[i] = new Drone();
  }

  this.update = (target) => {
    this.drones.forEach(drone => {
      drone.update(target)
      drone.draw()    
    })
  }

  this.generatePopulation = (target) => {
    this.evaluate(target)
    this.selection()
  }

  this.evaluate = (target) => {
    let maxFit = 0
    for (let drone of this.drones) {
      drone.calcFitness(target)

      if (drone.fitness > maxFit)
        maxFit = drone.fitness
    }

    maxFitParagraph.html(maxFit)

    this.matingPool = [];
    for (let drone of this.drones) {
      drone.fitness = drone.fitness / maxFit
      const n = drone.fitness * 100

      for (let i = 0; i < n; i++) {
        this.matingPool.push(drone)
      }
    }
  }

  this.selection = () => {
    const newPopulation = []

    for (let i = 0; i < this.popsize; i++) {
      const parentA = random(this.matingPool).dna
      const parentB = random(this.matingPool).dna
      const child = parentA.crossover(parentB)

      newPopulation[i] = new Drone(child)
    }

    this.drones = newPopulation
  }
}
