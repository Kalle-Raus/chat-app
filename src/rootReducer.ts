import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'features/user/userSlice';
import tradeReducer from 'features/trade/tradesSlice';
import messageReducer from 'features/message/messageSlice';

const rootReducer = combineReducers({
  users: userReducer,
  trades: tradeReducer,
  messages: messageReducer,
});

export default rootReducer;
