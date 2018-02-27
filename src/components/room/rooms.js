import zubat from './images/flying_zubat.gif';
import masterball from './images/master_ball.png';
import masterballCave from './images/masterball_cave.jpg';
import mewtwoCave from './images/mewtwo_cave.jpg';
import mewtwo from './images/mewtwo.png';
import pokemonCenter from './images/pokecenter.jpg';
import pokeDollCave from './images/pokedoll_cave.jpg';
import pokeDoll from './images/pokedoll.png';
import startCave from './images/start_cave.png';

const startRoom = {
  title: 'Wet Cave',
  image: startCave,
  description: 'You do not know how long you\'ve been stuck in this cave, but all your pokemon have fainted. You are soaked and cold. You just want to find a way out...',
  items: [],
  doors: {
    w: 'masterballRoom',
    e: 'pokeDollRoom',
    n: 'mewtwoRoom'
  }
};

const masterballRoom = {
  title: 'Well-lit Cave',
  image: masterballCave,
  description: 'This section of cave has light pouring in from above, yet out of reach. Something catches your eye on the ground. Could it be? A master ball!',
  pokemon: [
    {
      key: 'zubat', //how to get zubat to show when masterball is clicked?
      image: zubat
    }
  ],
  items: [
    {
      key: 'master ball',
      image: masterball,
      description: 'A very rare prototype ball that catches pokemon instantly.',
      prevent: 'A wild zubat appears and swoops at your face! You cannot reach the ball. If only you could distract the zubat...'
    }
  ],
  doors: {
    e: 'startRoom'
  },
  use(item) {
    if(item.key === 'poke doll') {
      const masterBall = this.items.find(item => item.key === 'master ball');
      if(!masterBall) return;

      delete masterBall.prevent;
      
      return 'You throw the poke doll as a decoy and the zubat follows in pursuit! The masterball is now within your reach.';
    }
  }
};

const pokeDollRoom = {
  title: 'Pitted Cave',
  image: pokeDollCave,
  description: 'The stalactites and stalagmites are large in this cavernous room. You spot something soft and green.',
  items:[
    {
      key: 'poke doll',
      image: pokeDoll,
      description: 'An odd soft green doll. It isn\'t shaped like any pokemon in particular, but you know they are often used as decoys in battle with wild pokemon.'
    }
  ],
  doors: {
    w: 'startRoom'
  }
};

const mewtwoRoom = {
  title: 'Luminescent Cave',
  image: mewtwoCave,
  description: 'You turn the corner and find yourself in a cavernous room with soft light. The exit must be near! You feel eyes upon you. Before you stands a strange ominous creature, blocking your way. Any step you take toward the creature is prevented, as if an invisible wall were in front of you.',
  pokemon: [
    {
      key: 'mewtwo',
      image: mewtwo
    }
  ],
  items: [],
  doors: {
    s: 'startRoom',
  },
  use(item) {
    if(item.key === 'master ball') {
      this.doors.e = 'pokemonCenterRoom';
      this.description = 'The cavernous room with soft light is now unguarded, you may pass freely toward the light!';
      return 'You draw the Master Ball and toss it adeptly at the ominous creature. The creature disappears inside of the ball, which is now falling to the cavern floor. Before you can grab it, the ball rolls down a slope with astonishing speed and falls into a deep hole...';
    }
  }
};

const pokemonCenterRoom = {
  title: 'The Pokemon Center',
  image: pokemonCenter,
  description: 'You run to safety and barge into the pokemon center. You\'ve been through a lot but now you can heal your pokemon and forget this horrific experience.',
  items: [],
  doors: {
    s: 'mewtwoRoom'
  }
};

export const rooms = {
  masterballRoom,
  pokeDollRoom,
  mewtwoRoom,
  pokemonCenterRoom
};

export const start = startRoom;