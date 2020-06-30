import { schema } from 'normalizr';

// definite normalizr entity schemas
export const userEntity = new schema.Entity('users');
export const messageEntity = new schema.Entity('messages', { user: userEntity });
export const tradeEntity: any = new schema.Entity('trades', {
  buyer: userEntity,
  seller: userEntity,
  messages: [messageEntity],
});
