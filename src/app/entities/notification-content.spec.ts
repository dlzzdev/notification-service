import { Content } from './notification-content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Your order has been shipped');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Your')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
