const buffetPalace = {
  title: 'Buffet Palace',
  description: 'Eat buffet here',
  doors: {
    n: 'crashPad'
  }
};

const losGorditos = {
  title: 'Los Gorditos',
  description: 'Best burrito ever, eat the garbage burrito',
  doors: {
    e: 'crashPad'
  }
};

const sushiBurrito = {
  title: 'Sushi Burrito',
  description: 'Sushi burrito place',
  doors: {
    w: 'crashPad'
  }
};

const pineState = {
  title: 'Pine State Biscuits',
  description: 'The best chicken biscuit place ever',
  doors: {
    s: 'crashPad'
  }
};

const crashPad = {
  title: 'Crash Pad',
  description: 'You are at the crash pad where you rest from all the food you eat.',
  doors: {
    s: 'buffetPalace',
    w: 'losGorditos',
    e: 'sushiBurrito',
    n: 'pineState'
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