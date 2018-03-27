import { user, USER, CLEAR_USER } from './reducers';

it('user starts as null', () => {
  const state = user(undefined, {});
  expect(state).toBe(null);
});

it('adds a user', () => {
  const state = user(undefined, { type: USER, payload: 'add user' });
  expect(state).toBe('add user');
});

it('sets user state back to null', () => {
  const state = user('set user', { type: CLEAR_USER });
  expect(state).toBe(null);
});