const buffetPalace = {
  title: 'Buffet Palace',
  description: 'Eat buffet here',
  doors: {
    n: 'crashPad'
  },
  items: [
    {
      key: 'buffet',
      description: 'Endless buffet forever'
    }
  ]
};

const losGorditos = {
  title: 'Los Gorditos',
  description: 'Best burrito ever, eat the garbage burrito',
  doors: {
    e: 'crashPad'
  },
  items: [
    {
      key: 'burrito',
      description: 'Garbage Burrito'
    }
  ]
};

const sushiBurrito = {
  title: 'Sushi Burrito',
  description: 'Sushi burrito place',
  doors: {
    w: 'crashPad'
  },
  items: [
    {
      key: 'sushi',
      description: 'Spidercrab Sushi Burrito'
    }
  ]
};

const pineState = {
  title: 'Pine State Biscuits',
  description: 'The best chicken biscuit place ever',
  doors: {
    s: 'crashPad'
  },
  items: [
    {
      key: 'biscuit',
      description: 'Reggie Deluxe with egg and hash browns'
    }
  ]
};

const crashPad = {
  title: 'Crash Pad',
  description: 'You are at the crash pad where you rest from all the food you eat.',
  doors: {
    s: 'buffetPalace',
    w: 'losGorditos',
    e: 'sushiBurrito',
    n: 'pineState'
  },
  items: [],
  use(item) {
    if(item.key === 'burrito' && 'sushi' && 'biscuit' && 'buffet') {
      return 'Nice job, you have achieved much food master status!';
    }
  }
};

export const rooms = {
  buffetPalace,
  losGorditos,
  sushiBurrito,
  pineState,
  crashPad
};

export const start = crashPad;