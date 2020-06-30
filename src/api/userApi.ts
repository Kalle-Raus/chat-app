import { USERS } from 'app.constants';

const userApi = {
  getAll: async () =>
    new Promise((resolve) => {
      resolve({
        data: USERS,
      });
    }),
};

export default userApi;
