// import { TRADES } from 'app.constants';

// const tradeApi = {
//   getAll: async () =>
//     new Promise((resolve) => {
//       resolve({
//         data: TRADES,
//       });
//     }),
// };

// export default tradeApi;

const API_URI = '/fakeApi';

// Fake API
const tradeApi = {
  trades: {
    async list() {
      const result = await fetch(`${API_URI}/trades`, { method: 'GET' });
      return result.json();
    },
    async show(id: string) {
      const result = await fetch(`${API_URI}/trades/${id}`, {
        method: 'GET',
      });
      return result.json();
    },
    async update(data: any) {
      const result = await fetch(`${API_URI}/trades/${data.id}`, {
        method: 'GET',
      });
      const json = await result.json();
      const update = { ...json, ...data };

      return update;
    },
    async remove(id: string) {
      const result = await fetch(`${API_URI}/trades/${id}`, {
        method: 'GET',
      });
      return result.json();
    },
  },
  users: {},
};

export default tradeApi;
