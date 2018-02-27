const lobby = {
  title: '',
  description: 'Welcome to the Museum of Museums! Enjoy your visit -- we haven\'t had a guest for quite some time!',
  items: [],
  image: 'https://media.mnn.com/assets/images/2015/01/abandoned-room.jpg',
  doors: {
    n: 'modernArt',
    e: 'shipyard',
    w: 'giftShop'
  }
};

const shipyard = {
  title: 'The Shipyard',
  description: 'Before you is a vast graveyard of abandoned ships! Find the wrench and give it to the keeper of the reliquary if you want access to the dinosaur exhibit.',
  items: [
    {
      key: 'wrench',
      description: 'wrench for the mechanic'
    }
  ],
  image: 'https://media.guim.co.uk/aeb79eaa2ade14dd0515df6c774a262f241d8d67/0_0_3000_2217/2000.jpg',
  doors: {
    n: 'mammals',
    w: 'lobby'
  }
};

const mammals = {
  title: 'The Mammal Room',
  description: 'This is our once-famous mammal room. We are the only museum in the world with a taxidermied human specimen. People are animals, too!',
  items: [],
  image: 'http://cdn0.wideopenspaces.com/wp-content/uploads/2013/09/taxidermyroom.jpg',
  doors: {
    n: 'dolls',
    s: 'shipyard',
    e: 'fish',
    w: 'modernArt'
  },
};

const fish = {
  title: 'The Fish Room',
  description: 'You have stumbled upon a very smelly museum docent. He decided to just stick around after the museum lost funding, and never really leaves this room. \n "Hey!! Hungry? I sure am, but I don\'t eat fish. I will trade you this coelacanth sandwich for a biscuit from the cafeteria."',
  items: [],
  image: 'http://www.thisiscolossal.com/wp-content/uploads/2014/07/fish-og.jpg',
  doors: {
    w: 'mammals',
  },

  use(item) {
    if(item.key === 'biscuit') {
      this.items = [{ key: 'coelacanth sandwich', description: 'ancient fish sandwich' }];
      return 'Enjoy your delicious lunch!';
    }
    return false;
  }
};

const modernArt = {
  title: 'The MOMMOMA',
  description: 'Every museum has to have a modern art room, even the Museum of Museums! Fret not! Continue through the next door for far more interesting exhibits.',
  items: [],
  image: 'https://news.artnet.com/app/news-upload/2014/10/private-museums-de-la-cruz-collections-2-550x400.jpg',
  doors: {
    n: 'reliquary',
    s: 'lobby',
    e: 'mammals',
    w: 'cafeteria'
  },
};

const dinosaurs = {
  title: 'DINOSAURS!',
  description: 'You made it to the dinosaur room! Congratulations. Please take this femur as a memento of your visit to the Museum of Museums!',
  items: [
    {
      key: 'bone',
      description: 'femur'
    }
  ],
  image: 'https://www.amnh.org/extension/amnh/design/amnh_user/images/home-share.png',
  doors: {
    s: 'reliquary'
  },
};

const giftShop = {
  title: 'Gift Shop',
  description: 'You break it you buy it! ',
  items: [],
  image: 'https://i.kinja-img.com/gawker-media/image/upload/s--NA_hST5X--/c_scale,f_auto,fl_progressive,q_80,w_800/195ebcu7q7t4ojpg.jpg',
  doors: {
    n: 'cafeteria',
    w: 'lobby'
  },

};

const cafeteria = {
  title: 'The Cafe',
  description: 'You must be hungry from all your adventuring! Well, you found our famous cafe but, as you can see, we\'re not exactly equipped to serve anything but botulism. Take this petrified biscuit to the fish room and trade it for a coelacanth sandwich. Harold there loves a hard buscuit.',
  items: [
    {
      key: 'biscuit',
      description: 'Petrified biscuit'
    }
  ],
  image: 'https://ak.picdn.net/offset/photos/5591716372375f2a29e543cd/medium/offset_238460.jpg',
  doors: {
    s: 'giftShop',
    e: 'modernArt'
  },

};

const dolls = {
  title: 'The Doll Room',
  description: 'Ah, a personal favorite, the Doll Room. Hurry and move along now, before they all wake up!',
  items: [],
  image: 'https://estatesales.org/thegoods/wp-content/uploads/2016/03/Creepy-Doll-4.jpg',
  doors: {
    s: 'mammals',
    w: 'reliquary'
  },
};

const reliquary = {
  title: 'Reliquary Room',
  description: 'Welcome to the Reliquary Room! An old cranky mechanic is guarding the dinosaur exhibit from any visitors. She lost her wrench and is so mad that she won\t let anyone pass until she gets the tool she needs. You see, the aeolipile is broken and she desperately needs a steam turbine. Can you return her missing tool?',
  items: [],
  image: 'https://s3-media1.fl.yelpcdn.com/bphoto/_TFmriA9vE8rpr4wEgbFiw/ls.jpg',
  doors: {
    s: 'modernArt'
  },

  use(item) {
    if(item.key === 'wrench') {
      this.doors.n = 'dinosaurs';
      this.description = 'Welcome to the Reliquary Room! An old cranky mechanic is guarding the dinosaur exhibit from any visitors. She lost her wrench and is so mad that she won\t let anyone pass until she gets the tool she needs. You see, the aeolipile is broken and she desperately needs a steam turbine. Can you return her missing tool?';
      return 'You have made this old gal so happy! Enjoy the dinosaur exhibit!';
    }
    return false;
  }
};

export const rooms = {
  reliquary, 
  modernArt,
  lobby,
  dinosaurs,
  shipyard,
  giftShop,
  cafeteria,
  mammals,
  fish,
  dolls
};

export const start = lobby;