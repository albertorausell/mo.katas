
const marsDimensions = [3,3];
  
class Rover {

  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation.toUpperCase();
  }

  move(movs) {
    movs.forEach(m => {
      switch (this.orientation) {
        case 'N':
          if (m === 'f') this.checkAndTry(this.x, this.y + 1);
          if (m === 'b') this.checkAndTry(this.x, this.y - 1);
          if (m === 'l') this.orientation = 'W'
          if (m === 'r') this.orientation = 'E'
          break;
        case 'S':
          if (m === 'f') this.checkAndTry(this.x, this.y - 1);
          if (m === 'b') this.checkAndTry(this.x, this.y + 1);
          if (m === 'l') this.orientation = 'E'
          if (m === 'r') this.orientation = 'W'
          break;
        case 'E':
          if (m === 'f') this.checkAndTry(this.x + 1, this.y);
          if (m === 'b') this.checkAndTry(this.x - 1, this.y);
          if (m === 'l') this.orientation = 'N'
          if (m === 'r') this.orientation = 'S'
          break;
        case 'W':
          if (m === 'f') this.checkAndTry(this.x - 1, this.y);
          if (m === 'b') this.checkAndTry(this.x + 1, this.y);
          if (m === 'l') this.orientation = 'S'
          if (m === 'r') this.orientation = 'N'
          break;
      
        default:
          break;
      }
    })
  }

  checkAndTry(newX, newY) {
    newX = newX >= marsDimensions[0] ? 0 : newX;
    newX = newX < 0 ? marsDimensions[0] - 1 : newX;
    
    newY = newY >= marsDimensions[1] ? 0 : newY;
    newY = newY < 0 ? marsDimensions[1] - 1 : newY;

    this.x = newX;
    this.y = newY;
  }
}

module.exports = Rover