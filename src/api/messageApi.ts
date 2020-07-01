import { MESSAGES } from 'app.constants';

const messageApi: any = {
  messages: {
    async update(data: any) {
      return new Promise((resolve) => {
        const response = [...MESSAGES, ...data];
        resolve(response);
      });
    },
  },
};

export default messageApi;
