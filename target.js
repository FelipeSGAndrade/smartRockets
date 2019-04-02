function Target(position, radius) {
  this.position = position
  this.radius = radius

  this.draw = () => {
    push()
    fill('red')
    ellipse(this.position.x, this.position.y, this.radius)
    pop()
  }
}
