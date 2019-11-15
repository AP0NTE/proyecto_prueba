import { MyDB } from './my-db';

describe('MyDB', () => {
  it('should create an instance', () => {
    expect(new MyDB()).toBeTruthy();
  });
});
