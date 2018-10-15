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
    switch  (Math.floor(Math.random() * 5) + 1){
      case 1:
      this.x= -100;
      this.y= 140;
      break;
      case 2:
      this.x= -100;
      this.y= 220;
      break;
      case 3:
      this.x= -100;
      this.y= 60;
      break;
      case 4:
      this.x = -1000;
      this.y= 220;
      this.speed = Math.floor(Math.random() * (250 - 200 + 1) ) + 200;
      case 5:
      this.x = -500;
      this.y= 140;
      this.speed = Math.floor(Math.random() * (150 - 100 + 1) ) + 100;
      case 6:
      this.x = -1000;
      this.y= 60;
      this.speed = 300;
    }
  }// which will ensure the game runs at the same speed for
    // all computers.
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
    this.handleInput = function(e){
  switch (e) {
    case 'up':
      this.y+=-83;
      break;
    case 'down':
      this.y+=83;
      break;
    case 'left':
      this.x+=-100;
      break;
      case 'right':
        this.x+=100;
        break;
    default:

  }
}
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(60, 200);
const enemy2 = new Enemy(140, 300);
const enemy3 = new Enemy(220, 100);
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
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
  } // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
