const treasure = {
  description: "Treasure room.......",
  items: [],
  image: '',
  doors: {
    s: 'great hall'
  }
}

const greatHall = {
  description: 'Great Hall...........',
  items: [],
  image: '',
  doors: {

  },
  use(item) {
    if(item.key === 'bird') {
      this.doors.n = 'treasure';
      this.description = 'You can bah blah blah.........';
      return 'Some description of what happened when tou did the thing';
    }
    return false;
  }
}

const dankChamber = {
  description: 'Dank chamber......',
  items: [],
  image: '',
  doors: {

  }
}

const courtyard = {
  description: 'Courtyard...... ',
  items: [
    {
      key: 'bird',
      description: 'bird in a cage'
    }
  ],
  image: '',
  doors: {

  }
}

export const rooms = {
  treasure, 
  greatHall,
  dankChamber,
  courtyard
}

export const start = dankChamber;