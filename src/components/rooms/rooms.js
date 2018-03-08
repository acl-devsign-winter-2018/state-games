const hideout = {
  title: 'Hideout',
  description: 'Your Hideout is your safe zone. Nobody can enter your Hideout and you will not be harmed while here. Your Hideout is where you will rest to increase your health or train in your Dojo. You can enter and exit your hideout through the Underground Tunnel, but beware of the dangers that lurk.',
  actions:[
    {
      key: 'rest',
      description: 'Increase your health by taking a rest.'
    }
  ],
  doors: {
    d: 'dojo'
  }
};

const dojo = {
  title: 'Dojo',
  description: 'Your Dojo is where you will train. You will need skill to survive the outside world. You must train hard to defeat your foes, however, you will expend your health level. Proper rest is critical to maximize your training sessions. ',
  actions: [
    {
      key: 'train',
      description: 'Train to increase your skill level.'
    }
  ],
  doors: {
    h: 'hideout'
  }
};

const bloodRave = {};

const vampireLayer = {};

export const rooms = {
  hideout,
  dojo,
  bloodRave,
  vampireLayer
};

export const start = hideout;