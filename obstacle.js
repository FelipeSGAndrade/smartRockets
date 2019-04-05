function Obstacle(beginPosition, endPosition) {
  this.beginPosition = beginPosition
  this.endPosition = endPosition
  this.width = 10

  this.draw = () => {
    push()
    stroke(255)
    strokeWeight(this.width)
    line(this.beginPosition.x, this.beginPosition.y, this.endPosition.x, this.endPosition.y)
    pop()
  }
}
