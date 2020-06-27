export const API = {
  users: 'users',
};

export const PATHS = {
  index: '/',
  trades: '/trades',
};

export const USERS = [
  {
    id: '1',
    userName: 'Mckinsey',
    trades: 4,
  },
  {
    id: '2',
    userName: 'Kinney',
    trades: 1,
  },
];

export const TRADES = [
  {
    id: '1',
    userId: 1,
    amount: 0.0031231,
    currency: 'usd',
    method: 'Paypal',
    status: 'Not paid',
    tradeHash: '23a1d4d',
    seen: false,
  },
  {
    id: '2',
    userId: 1,
    amount: 0.0019953,
    currency: 'usd',
    method: 'iTunes Gift Card',
    status: 'Paid',
    tradeHash: '14314as',
    seen: true,
  },
  {
    id: '3',
    userId: 1,
    amount: 0.4034512,
    currency: 'usd',
    method: 'Amazon Gift Card',
    status: 'Not paid',
    tradeHash: 'l5kfd2a',
    seen: false,
  },
];

export const MESSAGES = [
  {
    id: '1',
    userId: 1,
    tradeId: '1',
    timeStamp: '123',
    text: 'Hi, I would like to buy some Bitcoin.',
  },
  {
    id: '2',
    userId: 2,
    tradeId: '1',
    timeStamp: '124',
    text: 'Sure, here you go.',
  },
];
