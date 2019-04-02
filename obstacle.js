function Obstacle(position, width, height) {
  this.position = position
  this.width = width
  this.height = height

  this.draw = () => {
    push()
    rect(position.x, position.y, width, height)
    pop()
  }
}
