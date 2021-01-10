class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
    this.pilot=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
if(this.body.speed>10&&this.body.position.x>200){
  var pos=[this.body.position.x,this.body.position.y];
  this.pilot.push(pos);
}
    


    for(var i=0;i<this.pilot.length;i++){
      image(this.smokeimage,this.pilot[i][0],this.pilot[i][1])
    }


  }
}
