import { MESSAGES } from 'app.constants';

const messageApi = {
  getAll: async () =>
    new Promise((resolve) => {
      resolve({
        data: MESSAGES,
      });
    }),
};

export default messageApi;
