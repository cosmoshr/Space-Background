import { Container, Graphics } from "pixi.js";

export default class Background extends Container
{
  zIndex = -10000

  constructor(width, height, density)
  {
    super()

    this.width = width
    this.height = height
    this.density = density
  }

  generate() 
  {
    this.grid = this.width * this.height

    for (let i = 0 )
  }
}

class TestCircles extends Graphics 
{
  constructor(x, y, radius) 
  {
    super()

    circle.beginFill(0x9966FF)
    circle.drawCircle(0, 0, radius)
    circle.endFill()

    this.radius = radius
    this.x = x
    this.y = y
  }
}