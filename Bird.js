class Bird extends Base {
    constructor(x, y) {
    super(x,y,50,50)
      this.image = loadImage("sprites/bird.png")
      this.image.scale = 0.1
    

    }
    display(){
     this.body.position.x = mouseX
     this.body.position.y = mouseY

    super.display()

    }
  }