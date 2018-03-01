

const escaped = { 
  title: 'Escape Room',
  description: `You walk into a room, hmmmmm...it smells like carrots. At the far 
    end is a door with a big shiny padlock.`,
  items: [],
  doors: {
    s: 'scary',
    e: 'rock'
  }
};

const rock = {
  title: 'Rock Room ',
  description: `You walk into a room that is flat, with the exception of 2 fist sized 
    rocks in the middle of the room. There is a door to the north. What do you do?`,
  items: [],
  doors: {
    w: 'escaped',
    s: 'bunny'
  }
};

const bunny = {
  title: 'Angry Bunny Room',
  description: `As you walk in the room, there is a door to the north. You see a cute
    but rather large bunny standing in the room, his arms are crossed,
    and he looks pissed. All of a sudden, from across the room, you hear his tummy growl....`,
  items: [],
  doors: {
    n: 'rock',
    w: 'scary'
  }
};

const scary = {
  title: 'Scary Smelly Room',
  image: 'https://orig00.deviantart.net/b906/f/2016/140/7/3/ddcouloirartstation_by_tohad-da34cwg.jpg',
  description: `Your are in a dark smelly room, there are three doors in this room, one 
  to the north, one to the east and one to the west, which one to try first?`,
  items: [],
  doors: {
    n: 'escaped',
    w: 'carrot',
    e: 'bunny'
  }
};

const carrot = {
  title: 'Why a Carrot Room?',
  description: `Sunshine is beaming from a single small opening on the ceiling, the only door is 
    the one you came through. The room is dark,
    with the exception of a small alter with light shining on it. On this alter is a carrot `,
  items: [],
  doors: {
    e: 'scary'
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
