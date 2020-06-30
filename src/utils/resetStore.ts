import { reset as resetUser } from 'features/user/userSlice';
import { reset as resetTrade } from 'features/trade/tradesSlice';

export default function resetStore(dispatch: Function) {
  dispatch(resetUser());
  dispatch(resetTrade());
}
