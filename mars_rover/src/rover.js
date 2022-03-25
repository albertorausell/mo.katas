const Mars = require('./variables');
const ObstacleDetectionError = require('./obstacleDetectionError');
class Rover {

  constructor(x, y, orientation) {
    if (this._isObstacle(x,y)) {
      throw new ObstacleDetectionError("There is an obstacle in the place you want to launch!");
    }
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  move(movs) {
    let safetyPosition = {
      position: [this.x, this.y],
      orientation: this.orientation
    };
    try {
      movs.forEach(m => {
        switch (this.orientation) {
          case 'N':
            if (m === 'f') this._checkAndTry(this.x, this.y + 1);
            if (m === 'b') this._checkAndTry(this.x, this.y - 1);
            if (m === 'l') this.orientation = 'W'
            if (m === 'r') this.orientation = 'E'
            break;
          case 'S':
            if (m === 'f') this._checkAndTry(this.x, this.y - 1);
            if (m === 'b') this._checkAndTry(this.x, this.y + 1);
            if (m === 'l') this.orientation = 'E'
            if (m === 'r') this.orientation = 'W'
            break;
          case 'E':
            if (m === 'f') this._checkAndTry(this.x + 1, this.y);
            if (m === 'b') this._checkAndTry(this.x - 1, this.y);
            if (m === 'l') this.orientation = 'N'
            if (m === 'r') this.orientation = 'S'
            break;
          case 'W':
            if (m === 'f') this._checkAndTry(this.x - 1, this.y);
            if (m === 'b') this._checkAndTry(this.x + 1, this.y);
            if (m === 'l') this.orientation = 'S'
            if (m === 'r') this.orientation = 'N'
            break;
        
          default:
            break;
        }
      });
      return "Commands successful perfomed!";
    } catch (error) {
      if (error instanceof ObstacleDetectionError) {
        this._rollbackTrace(safetyPosition); 
        return error.message;
      } else {
        this._rollbackTrace(safetyPosition); 
        throw error;
      }
    }
  }

  inspectArea() {
    let graphicalMars = "", localString = "";
    for (let i = 0; i < Mars.dimensions[1]; i++) {
      localString = "";
      for (let j = 0; j < Mars.dimensions[0]; j++) {
        localString += "|";
        if (this.x === j && this.y === i) {
          localString += "R";
        } else if (Mars.obstacles.some(([x,y]) => {return x===j && y ===i})) {
          localString += "o";
        } else {
          localString += "_"
        }
      }
      graphicalMars = localString + "\n" + graphicalMars;
    }
    return graphicalMars;
  }

  _checkAndTry(newX, newY) {
    newX = newX >= Mars.dimensions[0] ? 0 : newX;
    newX = newX < 0 ? Mars.dimensions[0] - 1 : newX;
    
    newY = newY >= Mars.dimensions[1] ? 0 : newY;
    newY = newY < 0 ? Mars.dimensions[1] - 1 : newY;

    if (this._isObstacle(newX, newY)) {
      let message = `Obstacle detected at [${newX},${newY}]`;
      console.log(message);
      throw new ObstacleDetectionError(message); }

    this.x = newX;
    this.y = newY;
  }

  _rollbackTrace({position: [x, y], orientation: ori}) {
    this.x = x;
    this.y = y;
    this.orientation = ori;
  }

  _isObstacle(x, y) {
    let isObstacle = false;
    Mars.obstacles.forEach((obs) => {
      if (obs[0] == x && obs[1] == y) isObstacle = true;
    });
    return isObstacle;
  }
}

module.exports = Rover