const Rover = require('../src/rover');


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
      let rover = new Rover(0, 0, 'N')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    //changed test for sphere planet
    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })

    //own tests
    it('turns rigth', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns left', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })
  });

  describe('facing south', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'S')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('S')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'S')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('S')
    })

    it('turns rigth', () => {
      let rover = new Rover(0, 0, 'S')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns left', () => {
      let rover = new Rover(0, 0, 'S')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })
  });

  describe('facing east', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'E')

      rover.move(['f'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'E')

      rover.move(['b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns rigth', () => {
      let rover = new Rover(0, 0, 'E')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })

    it('turns left', () => {
      let rover = new Rover(0, 0, 'E')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })
  });
  
  describe('facing west', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'W')

      rover.move(['f'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'W')

      rover.move(['b'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns rigth', () => {
      let rover = new Rover(0, 0, 'W')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('turns left', () => {
      let rover = new Rover(0, 0, 'W')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })
  });
})
