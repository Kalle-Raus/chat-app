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
    me: false,
    img: 'man_avatar.png',
    trades: 38,
    ratings: {
      positive: 37,
      negative: 1,
    },
  },
  {
    me: true,
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
    timeStamp: '2020-06-30T09:19:14.180Z',
    buyer: {
      id: '1',
      userName: 'John',
      me: false,
      trades: 38,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    seller: {
      me: true,
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
          me: false,
          trades: 38,
          ratings: {
            positive: 37,
            negative: 1,
          },
        },
        tradeId: '1',
        timeStamp: '2020-06-30T09:19:34.180Z',
        text: 'Hi, I would like to buy some Bitcoin.',
      },
      {
        id: '2',
        user: {
          me: true,
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
        timeStamp: '2020-06-30T09:39:34.180Z',
        text: 'Sure, here you go.',
      },
    ],
  },
  {
    id: '2',
    timeStamp: '2020-06-30T09:19:15.180Z',
    buyer: {
      id: '1',
      img: 'man_avatar.png',
      userName: 'John',
      me: false,
      trades: 38,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    seller: {
      me: true,
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
          me: false,
          trades: 38,
          ratings: {
            positive: 37,
            negative: 1,
          },
        },
        tradeId: '1',
        timeStamp: '2020-06-30T09:19:34.180Z',
        text: 'Hi, I would like to buy 50 USD worth of Bitcoin.',
      },
      {
        id: '2',
        user: {
          me: true,
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
        timeStamp: '2020-06-30T09:39:34.180Z',
        text: 'Sure, here you go.',
      },
    ],
  },
  {
    id: '3',
    timeStamp: '2020-06-30T09:19:24.180Z',
    buyer: {
      id: '1',
      userName: 'John',
      me: false,
      img: 'man_avatar.png',
      trades: 38,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    seller: {
      me: true,
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
          me: false,
          img: 'man_avatar.png',
          trades: 38,
          ratings: {
            positive: 37,
            negative: 1,
          },
        },
        tradeId: '1',
        timeStamp: '2020-06-30T09:19:34.180Z',
        text: 'Hi, I would like to buy 43 USD worth of Bitcoin.',
      },
      {
        id: '2',
        user: {
          me: true,
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
        timeStamp: '2020-06-30T09:39:34.180Z',
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
      me: false,
      img: 'man_avatar.png',
      trades: 38,
      ratings: {
        positive: 37,
        negative: 1,
      },
    },
    tradeId: '1',
    timeStamp: '2020-06-30T09:19:34.180Z',
    text: 'Hi, I would like to buy some Bitcoin.',
  },
  {
    id: '2',
    user: {
      me: true,
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
    timeStamp: '2020-06-30T09:39:34.180Z',
    text: 'Sure, here you go.',
  },
];
