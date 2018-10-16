// Enemies our player must avoid
var Enemy = function(y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=-100;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt; // You should multiply any movement by the dt parameter
    if (this.x>500){
      //switch statement used to randomly Assign enemies to Y axis.
      // random number between 1-5 reassign enemy speeds and y coordinate
    switch  (Math.floor(Math.random() * 5) + 1){
      case 1:
      this.x= -100;
      this.y= 134;
      break;
      case 2:
      this.x= -100;
      this.y= 217;
      break;
      case 3:
      this.x= -100;
      this.y= 51;
      break;
      case 4:
      this.x = -1000;
      this.y= 217;
      this.speed = Math.floor(Math.random() * (250 - 200 + 1) ) + 200;
      case 5:
      this.x = -500;
      this.y= 134;
      this.speed = Math.floor(Math.random() * (120 - 100 + 1) ) + 100;
      case 6:
      this.x = -500;
      this.y= 51;
      this.speed = 300;
    }
  }// compares player & Enemy coordinates,
  //if match restart player and enemypositions
  else {
  if (this.x - player.x> -50 && this.x - player.x<50  && player.y==this.y) {setTimeout(function (){ player.x=200; player.y=300; enemy1.x=-400; enemy2.x=-100; enemy3.x=-600; alert(" YOU HAVE BROUGHT DISHONOR TO US ALL.\n \t \t  DON'T DO IT AGAIN");},10); }
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=200;
    this.y=300;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
  }
Player.prototype.handleInput = function(e) {
  switch (e) {
    case 'up':
      if(this.y>-20){
        this.y-=83;}
      break;
    case 'down':
    if(this.y<380){
      this.y+=83;}
      break;
    case 'left':
    if(this.x>0){
      this.x+=-100;}
      break;
      case 'right':
      if(this.x<400){
        this.x+=100;}
        break;
  }
    }
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(51, 200);
const enemy2 = new Enemy(134, 300);
const enemy3 = new Enemy(217, 100);
const player = new Player();
var allEnemies = [enemy1,enemy2,enemy3];
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
 // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
