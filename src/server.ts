import { Server } from 'miragejs';
import { TRADES } from 'app.constants';

export function makeServer() {
  // setup mirage server
  let server = new Server({
    routes() {
      this.namespace = '/fakeApi';
      this.get('/trades', () => TRADES);
      this.get('/trades/1', () => TRADES[0]);
      this.get('/trades/2', () => TRADES[1]);
      this.get('/trades/3', () => TRADES[2]);
      this.passthrough((request) => {
        return !request.url.includes('/fakeApi');
      });
    },
  });

  return server;
}
