const Rover = require('../src/rover');
const Mars = require('../src/variables');

/*
Mars rover moves through


                       N
        --------------------------------
        |   0,2   |   1,2   |   2,2    |
        --------------------------------
    W   |   0,1   |   1,1   |   2,1    |    E
        --------------------------------
        |   0,0   |   1,0   |   2,0    |
        --------------------------------
                       S 

*/

describe('Rover', () => {
  it('starts at a given position and orientation', () => {
    let rover = new Rover(0, 0, 'N')

    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.orientation).toEqual('N')
  })

  describe('facing north', () => {
    it('moves forwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'N')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    //changed test for sphere planet
    it('moves backwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'N')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })

    //own tests
    it('turns rigth', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'N')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns left', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'N')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })
  });

  describe('facing south', () => {
    it('moves forwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'S')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('S')
    })

    it('moves backwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'S')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('S')
    })

    it('turns rigth', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'S')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns left', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'S')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })
  });

  describe('facing east', () => {
    it('moves forwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'E')

      rover.move(['f'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('moves backwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'E')

      rover.move(['b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns rigth', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'E')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })

    it('turns left', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'E')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })
  });
  
  describe('facing west', () => {
    it('moves forwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'W')

      rover.move(['f'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('moves backwards', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'W')

      rover.move(['b'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns rigth', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'W')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('turns left', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'W')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })
  });
  describe('sequence of commands', () => {
    it('4 commands', () => {
      Mars.dimensions = [3,3];
      Mars.obstacles = [];
      let rover = new Rover(0, 0, 'N')

      rover.move(['f','l','b','r'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })
  });
  it('obstacles', () => {
    Mars.dimensions = [3,3];
    Mars.obstacles = [[1,0]];
    let rover = new Rover(0, 0, 'N')

    rover.move(['f','f','r','f','l','f'])

    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.orientation).toEqual('N')
  })
})
