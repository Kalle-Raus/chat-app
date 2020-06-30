export const API = {
  users: 'users',
  trades: 'trades',
  messages: 'messages',
};

export const PATHS = {
  index: '/',
  trades: '/trades',
};

export const USERS = [
  {
    id: '1',
    userName: 'John',
    img: 'man_avatar.png',
    trades: 4,
    ratings: {
      positive: 37,
      negative: 1,
    },
  },
  {
    id: '2',
    userName: 'Mary',
    img: 'woman_avatar.png',
    trades: 1,
    ratings: {
      positive: 3,
      negative: 0,
    },
  },
];

export const TRADES = [
  {
    id: '1',
    img: 'man_avatar.png',
    buyer: {
      id: '1',
      userName: 'John',
      trades: 4,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    seller: {
      id: '2',
      img: 'woman_avatar.png',
      userName: 'Mary',
      trades: 1,
      ratings: {
        positive: 3,
        negative: 0,
      },
    },
    amount: 30,
    currency: 'usd',
    method: 'Paypal',
    status: '',
    paid: false,
    type: 'buy',
    tradeHash: '23a1d4d',
    seen: false,
    messages: [
      {
        id: '1',
        user: {
          id: '1',
          img: 'man_avatar.png',
          userName: 'John',
          trades: 4,
          ratings: {
            positive: 37,
            negative: 1,
          },
        },
        tradeId: '1',
        timeStamp: '123',
        text: 'Hi, I would like to buy some Bitcoin.',
      },
      {
        id: '2',
        user: {
          id: '2',
          img: 'woman_avatar.png',
          userName: 'Mary',
          trades: 1,
          ratings: {
            positive: 3,
            negative: 0,
          },
        },
        tradeId: '1',
        timeStamp: '124',
        text: 'Sure, here you go.',
      },
    ],
  },
  {
    id: '2',
    buyer: {
      id: '1',
      img: 'man_avatar.png',
      userName: 'John',
      trades: 4,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    seller: {
      id: '2',
      img: 'woman_avatar.png',
      userName: 'Mary',
      trades: 1,
      ratings: {
        positive: 3,
        negative: 0,
      },
    },
    amount: 50,
    currency: 'usd',
    method: 'iTunes Gift Card',
    status: '',
    paid: true,
    type: 'buy',
    tradeHash: '14314as',
    seen: true,
    messages: [
      {
        id: '1',
        user: {
          id: '1',
          img: 'man_avatar.png',
          userName: 'John',
          trades: 4,
          ratings: {
            positive: 37,
            negative: 1,
          },
        },
        tradeId: '1',
        timeStamp: '123',
        text: 'Hi, I would like to buy 50 USD worth of Bitcoin.',
      },
      {
        id: '2',
        user: {
          id: '2',
          userName: 'Mary',
          img: 'woman_avatar.png',
          trades: 1,
          ratings: {
            positive: 3,
            negative: 0,
          },
        },
        tradeId: '1',
        timeStamp: '124',
        text: 'Sure, here you go.',
      },
    ],
  },
  {
    id: '3',
    buyer: {
      id: '1',
      userName: 'John',
      img: 'man_avatar.png',
      trades: 4,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    seller: {
      id: '2',
      img: 'woman_avatar.png',
      userName: 'Mary',
      trades: 1,
      ratings: {
        positive: 3,
        negative: 0,
      },
    },
    amount: 43,
    currency: 'usd',
    method: 'Amazon Gift Card',
    status: '',
    paid: false,
    type: 'buy',
    tradeHash: 'l5kfd2a',
    seen: false,
    messages: [
      {
        id: '1',
        user: {
          id: '1',
          userName: 'John',
          img: 'man_avatar.png',
          trades: 4,
          ratings: {
            positive: 37,
            negative: 1,
          },
        },
        tradeId: '1',
        timeStamp: '123',
        text: 'Hi, I would like to buy 43 USD worth of Bitcoin.',
      },
      {
        id: '2',
        user: {
          id: '2',
          img: 'woman_avatar.png',
          userName: 'Mary',
          trades: 1,
          ratings: {
            positive: 3,
            negative: 0,
          },
        },
        tradeId: '1',
        timeStamp: '124',
        text: 'Sure, here you go.',
      },
    ],
  },
];

export const MESSAGES = [
  {
    id: '1',
    user: {
      id: '1',
      userName: 'John',
      img: 'man_avatar.png',
      trades: 4,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    tradeId: '1',
    timeStamp: '123',
    text: 'Hi, I would like to buy some Bitcoin.',
  },
  {
    id: '2',
    user: {
      id: '2',
      img: 'woman_avatar.png',
      userName: 'Mary',
      trades: 1,
      ratings: {
        positive: 3,
        negative: 0,
      },
    },
    tradeId: '1',
    timeStamp: '124',
    text: 'Sure, here you go.',
  },
];
