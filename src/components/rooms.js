const cell = {
  title: 'The Prison Cell',
  description: 'This is the Prison Cell. You are in the basement of the tower. The cell door is opened.',
  items: [],
  stairs: {
    u: 'lobby'
  }
};

const lobby = {
  title: 'The Main Lobby',
  description: 'You are now on the first floor. This appears to be the main lobby of the tower.',
  items: [],
  stairs: {
    d: 'cell',
    u: 'weapons'
  }
};

const weapons = {
  title: 'Weapons Facility',
  description: '2nd floor. This is the weapons facility. You are surrounded by the thousands of weapons. Guns, axes,knifes, bows, bombs, potions, and other deadly tools. You have found weapons dating back to biblical times as well as technology so advanced you have never seen before.',
  items: [],
  stairs: {
    d: 'lobby',
    u: 'gym'
  }
};

const gym = {
  title: 'Gymnasium',
  description: '3rd floor. You are in a large gymnasium. There is myst and fog surrounding you while techno music plays in the background.',
  items: [],
  stairs: {
    d: 'weapons',
    u: 'princess'
  }
};

const princess = {
  title: 'Princess Chambers',
  description: 'You have reached the top of the tower. This is where the Princess has been kept prisoner for many years. There are many leather bound books and it smells of rich mahogony.',
  items: [],
  stairs: {
    d: 'gym'
  }
};

export const rooms = {
  cell,
  lobby,
  weapons,
  gym,
  princess
};

export const start = cell;