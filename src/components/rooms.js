

const finalRoom = { 
  title: 'Escape Room',
  image: 'https://i1.wp.com/roomescapeartist.com/wp-content/uploads/2017/12/THE-BASEMENT-The-Elevator-Shaft-3.jpg?resize=550%2C413&ssl=1',
  description: `You walk into a room, hmmmmm...it smells like carrots. At the far 
    end is a door with a big shiny padlock.`,
  items: [
    {
      key: 'padlock',
      description: 'padlock at the end of the room'
    }
  ],
  doors: {
    s: 'scary',
    e: 'box'
  },

  use(item) {
    if(item.key === 'smallKey') {
      const padlock = this.items.find(item => item.key === 'padlock');
      if(!padlock) return;

      delete padlock.prevent;
      return 'Your small key fits into the padlock and you open the door. You have escaped!';
    }
  }
};



const box = {
  title: 'Box Room ',
  image: 'http://media.moddb.com/images/mods/1/23/22725/2013-04-29_00006.jpg',
  description: `You walk into a room that is flat, with the exception of a small box with a key in 
  the middle of the room. There is a door to the west. What do you do?`,
  items: [
    {
      key: 'smallKey',
      description: 'a small key'
    },
  ],

  doors: {
    w: 'finalRoom',
    s: 'bunny'
  }
};

const bunny = {
  title: 'Angry Bunny Room',
  image: 'https://vignette.wikia.nocookie.net/bubbleguppies/images/d/da/Angry_bunny.png/revision/latest?cb=20130406140727',
  description: `As you walk in the room, there is a door to the north. You see a large bunny 
  with his arms crossed and he looks pissed. All of a sudden,
  from across the room, you hear his tummy growl....`,
  items: [
    {
      key: 'bunny',
      description: 'An Angry Bunny',
      prevent: 'A Hungry Bunny, he wont let you pass north'
    }
  ],
  doors: {
    n: 'box',
    w: 'scary'
  },
  use(item) {
    if(item.key === 'carrot') {
      const bunny = this.items.find(item => item.key === 'bunny');
      if(!bunny) return;

      delete bunny.prevent;

      return `The bunny quickly eats the carrot and smiles! He says "I was so hungry, 
      it's that low blood sugar thing, I get cranky every time!. So, it looks like you guys need to get
      out of here. If you head to the north door,  in that room you will find a box on the floor, 
      the box contains the key to the padlock.`;
    }
  }
};

const scary = {
  title: 'Scary Smelly Room',
  image: 'https://orig00.deviantart.net/b906/f/2016/140/7/3/ddcouloirartstation_by_tohad-da34cwg.jpg',
  description: `Your are in a dark smelly room, there are three doors in this room, one 
  to the north, one to the east and one to the west, which one to try first?`,
  items: [],
  doors: {
    n: 'finalRoom',
    w: 'carrot',
    e: 'bunny'
  }
};

const carrot = {
  title: 'Why a Carrot?',
  image: 'https://bfgblog-a.akamaihd.net/uploads/2012/08/PA4_L_Altar.jpg', 
  description: `Sunshine is beaming from a single small opening on the ceiling, the only door is 
    the one you came through. The room is dark, with the exception of a small alter with light shining on it. On this alter is a carrot. `,
  items: [
    {
      key: 'carrot',
      description: 'Carrot on an Alter'
    }
  ],
  doors: {
    e: 'scary'
  }
};

export const rooms = {
  finalRoom,
  box,
  bunny,
  scary,
  carrot
};

export const start = scary;
