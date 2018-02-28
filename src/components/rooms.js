const entry = {
  title: 'The Entry Room',
  image: 'entry.jpg',
  description: 'The main door leading outside locked behind you. You must find another way out. You see the floor of the entry is crumbling under your feet.  A staircase sits in the north end of the room.  A door to the north is unreachable beyond the crumbling floor. You notice a door to the west and east also.',
  items: [],
  doors: {
    n: 'secondFloor',
    w: 'dining',
    e: 'living'
  }
};

const dining = {
  title: 'Dining Room',
  image: 'dining.jpg',
  description: 'You find a dining room. A mismatched set of chairs surround a wood table. A door to the north has a huge hole in it.',
  items: [],
  doors: {
    n: 'den',
    e: 'entry',
  }
};

const den = {
  title: 'Den',
  image: 'den.jpg',
  description: 'The ceiling is in near perfect condition, a hint to the once great beauty of the house.  The only other door in the room is sealed off with bricks.',
  items: [],
  doors: {
    s: 'dining'
  },
  use(item){
    if(item.key === 'book'){
      this.doors.n = 'outside';
      this.description = 'The brick door lays in pieces on the floor.  The door appears to lead outside.';
      return 'You open the book and read a cryptic passage hand written inside the cover.  The brick sealing the door crumbles.';
    }
  }
};

const living = {
  title: 'Living Room',
  image: 'living.jpg',
  description: 'A couch and arm chair reside in the middle of the living room. The couch seems to have barely survived the collapse of the ceiling.',
  items: [
    {
      key: 'brick',
      description: 'brick'
    }
  ],
  doors: {
    w: 'entry'
  }
};

const secondFloor = {
  title: 'Second Floor Landing',
  image: 'secondFloor.jpg',
  description: 'The second floor has collapsed.  Light streams in from another hole in the ceiling.  You see three doors that are safe to get too.  One to the north, west and east.  South will take you back downstairs.',
  items: [],
  doors: {
    w: 'bedroom',
    n: 'piano',
    e: 'bedroom2',
    s: 'entry',
  }
};

const bedroom = {
  title: 'Bedroom',
  image: 'bedroom.jpg',
  description: 'You enter a small bedroom with a single bed. The wall is crumbling but the room shows the most sign of life.',
  items: [
    {
      key: 'book',
      description: 'Old decaying book'
    }, 
    {
      key: 'jacket',
      description: 'Dust covered suit jacket'
    }, 
    {
      key: 'figurine',
      description: 'Lady figurine'
    }
  ],
  doors: {
    e: 'secondFloor'
  }
};

const piano = {
  title: 'Piano Room',
  image: 'piano.jpg',
  description: 'The ceiling lays in pieces on the floor in front of you.  The beauty of the plaster walls and trim arer still noticable. A piano rests in front of a fireplace.',
  items: [
    {
      key: 'firePoker',
      description: 'Wrought iron poker'
    }
  ],
  doors: {
    s: 'secondFloor'
  }
};

const bedroom2 = {
  title: 'Second Bedroom',
  image: 'bedroom2.jpg',
  description: 'A larger bedroom with two beds lays in front of you. It reminds you of a cheap motel, a surpising room to find in such a grand home.',
  items: [],
  doors: {
    w: 'secondFloor'
  }
};

const outside = {
  title: 'Outside',
  image: 'outside.jpg',
  description: 'You managed to escape the house.',
  items: [],
  doors: {
    s: 'den'
  }
};

export const rooms = {
  entry,
  dining,
  den,
  living,
  secondFloor,
  bedroom,
  piano,
  bedroom2,
  outside
};

export const start = entry;