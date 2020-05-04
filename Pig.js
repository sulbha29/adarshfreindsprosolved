class Pig extends BaseClass {
  constructor(x, y,image){
 
    super(x,y,20,20,image);
     this.image = image;
    this.Visiblity = 255;
  }

 display(){
   //console.log(thi
   

   if(this.body.speed < 7){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 60;
     tint(255,this.Visiblity);
     image(this.image,this.x,this.y)
     pop();
   }
   
 }
score(){
  if(this.Visiblity<0&&this.Visiblity>-100){
    score=score+1;
  }
}


};