

const escaped = { 
  title: 'Escape Room',
  description: `You walk into a room, hmmmmm...it smells like carrots. At the far 
    end is a door with a big shiny padlock.`,
  items: [],
  doors: {
    s: 'scaryRoom',
    e: 'rockRoom'
  }
};

const rock = {
  title: 'Rock Room ',
  description: `You walk into a room that is flat, with the exception of 2 fist sized 
    rocks in the middle of the room. There is a door to the north. What do you do?`,
  items: [],
  doors: {
    w: 'escapedRoom',
    s: 'bunnyRoom'
  }
};

const bunny = {
  title: 'Angry Bunny Room',
  description: `As you walk in the room, there is a door to the north. You see a cute
    but rather large bunny standing in the room, his arms are crossed,
    and he looks pissed. All of a sudden, from across the room, you hear his tummy growl....`,
  items: [],
  doors: {
    n: 'rockRoom',
    w: 'scaryRoom'
  }
};

const scary = {
  title: 'Scary Smelly Room',
  description: `Your are in a dark smelly room, there are three doors in this room, one 
  to the north, one to the east and one to the west, which one to try first?`,
  items: [],
  doors: {
    n: 'escapedRoom',
    w: 'carrotRoom',
    e: 'bunnyRoom'
  }
};

const carrot = {
  title: 'Why a Carrot Room?',
  description: `Sunshine is beaming from a single small opening on the ceiling, the only door is 
    the one you came through. The room is dark,
    with the exception of a small alter with light shining on it. On this alter is a carrot `,
  items: [],
  doors: {
    e: 'scaryRoom'
  }
};

export const rooms = {
  escaped,
  rock,
  bunny,
  scary,
  carrot
};

export const start = scary;
