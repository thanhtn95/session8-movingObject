/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += speed;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function () {
    this.left -= speed;
  }
  this.moveUp = function () {
    this.top -= speed;
  }
  this.moveDown = function () {
    this.top += speed;
  }
  this.speedUp = function () {
    this.speed += 10;
  }

}

var hero = new Hero('Pepegon.jpg', 20, 30, 200, 30);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();