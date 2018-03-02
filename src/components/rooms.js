const treasure = {
  title: 'The Treasure Room',
  description: 'There is gold everywhere. You are cray rich now. Way to go!',
  items: [],
  doors: {
    s: 'greatHall'
  }
};
  
const greatHall = {
  title: 'The Great Hall',
  description: 'You are in a great hall. There is a door to the south. And a monster blocking the door to the north',
  items: [],
  doors: {
    s: 'dankChamber'
  }
};
  
const dankChamber = {
  title: 'Dank Chamber',
  description: 'You are standing in a dank hall. There is light comign fron the door to the east, also another door to the north',
  items: [],
  doors: {
    e: 'courtyard',
    n: 'greatHall',
    w: 'emptyRoom'
  }
};
  
  
const courtyard = {
  title: 'Courtyard',
  description: 'You are in a lovely courtyard. You see a small bird in a gilded cage.',
  items:[
    {
      key: 'bird',
      description: 'Bird in a Cage',
      prevent: 'The bird becomes highly agitated and you cannot pick up the cage'
    }
  ],
  doors: {
    w: 'dankChamber'
  }
};
  

export const rooms = {
  treasure,
  greatHall,
  dankChamber,
  courtyard
};
  
export const start = dankChamber;