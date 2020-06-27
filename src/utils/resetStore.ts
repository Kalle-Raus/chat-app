import { reset as resetUser } from 'features/user/userSlice';

export default function resetStore(dispatch: Function) {
  dispatch(resetUser());
}
