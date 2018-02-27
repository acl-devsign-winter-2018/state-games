const lobby = {
  description: 'Welcome to the Museum of Museums! Enjoy your visit -- we haven\'t had any guests for quite some time!',
  items: [],
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/SZ_%E6%B7%B1%E5%9C%B3%E5%8D%9A%E7%89%A9%E9%A4%A8_Shenzhen_Museum_lobby_hall_interior_transparent_ceiling_Aug-2010.jpg',
  doors: {
    e: 'shipyard',
    w: 'giftShop',
    n: 'modernArt'
  }
};

const shipyard = {
  description: 'Before you is a vast graveyard of abandoned ships! Find the wrench and give it to the keeper of the reliquary if you want access to the dinosaur exhibit.',
  items: [
    {
      key: 'wrench',
      description: 'wrench for the mechanic'
    }
  ],
  image: 'https://media.guim.co.uk/aeb79eaa2ade14dd0515df6c774a262f241d8d67/0_0_3000_2217/2000.jpg',
  doors: {
    w: 'lobby',
    n: 'mammals'
  }
};

const mammals = {
  description: 'You have entered the mammal room.',
  items: [],
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73nhK6NYf73DlTHabp7K7whejAZdm5qH6zG0F_1Wuj911DSy8ng',
  doors: {
    e: 'fish',
    w: 'modernArt',
    n: 'dolls',
    s: 'shipyard'
  },
};

const fish = {
  description: 'You have entered the fish room. Hungry? I sure am, but I don\'t eat fish. I will trade you this coelacanth sandwich for a biscuit from the cafeteria.',
  items: [],
  image: 'https://s3-media2.fl.yelpcdn.com/bphoto/ZUlXZiLvmzppTPA8DBlIOA/348s.jpg',
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
  description: 'Every museum has to have a modern art room, even the Museum of Museums! Fret not! Continue through the next door for a challenge and far more interesting exhibits.',
  items: [],
  image: 'https://news.artnet.com/app/news-upload/2014/10/private-museums-de-la-cruz-collections-2-550x400.jpg',
  doors: {
    s: 'lobby',
    n: 'reliquary',
    e: 'mammals',
    w: 'cafeteria'
  },
};

const dinosaurs = {
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
  description: 'You can look but do not touch! ',
  items: [],
  image: 'https://i.kinja-img.com/gawker-media/image/upload/s--NA_hST5X--/c_scale,f_auto,fl_progressive,q_80,w_800/195ebcu7q7t4ojpg.jpg',
  doors: {
    w: 'lobby',
    n: 'cafeteria'
  },

};

const cafeteria = {
  description: 'You must be hungry from all your adventuring! Well, you found our famous cafe but, as you can see, we\'re not exactly equipped to serve anything but botulism. Take this petrified biscuit to the fish room and trade it for a coelacanth sandwich.',
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
  description: 'You come into a room more terrifying than anything you have seen before. This is the doll museum. Hurry and move along now, before they all wake up!',
  items: [],
  image: 'https://estatesales.org/thegoods/wp-content/uploads/2016/03/Creepy-Doll-4.jpg',
  doors: {
    s: 'mammals',
    w: 'reliquary'
  },
};

const reliquary = {
  description: 'Reliquary...... ',
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