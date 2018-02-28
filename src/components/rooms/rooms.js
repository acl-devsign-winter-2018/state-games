const hideout = {
  title: 'Hideout',
  description: 'Your Hideout is your safe zone. Nobody can enter your Hideout and you will not be harmed while here. Your Hideout is where you will rest to increase your health or train in your Dojo. You can enter and exit your hideout through the Underground Tunnel, but beware of the dangers that lurk ',
  items: [
    {
      key: 'rest',
      description: 'Increase your health by taking a rest.'
    }
  ],
  doors: {
    d: 'dojo'
  }
};

const dojo = {};

const bloodRave = {};

const vampireLayer = {};

export const rooms = {
  hideout,
  dojo,
  bloodRave,
  vampireLayer
};

export const start = hideout;