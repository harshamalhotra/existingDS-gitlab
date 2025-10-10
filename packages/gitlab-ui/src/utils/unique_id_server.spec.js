/**
 * @jest-environment node
 */

import { GlUniqueId } from './unique_id';

describe('GlUniqueId in a server environment', () => {
  let mockCrypto;

  beforeEach(() => {
    mockCrypto = { getRandomValues: jest.fn() };
  });

  describe('when window is undefined (server-side)', () => {
    beforeEach(() => {
      global.window = undefined;
    });

    it('throws an error', () => {
      expect(() => GlUniqueId()).toThrow('Cannot generate a unique ID');
    });
  });

  describe('when window.crypto is undefined', () => {
    beforeEach(() => {
      global.window = {};
    });

    it('throws an error', () => {
      expect(() => GlUniqueId()).toThrow('Cannot generate a unique ID');
    });
  });

  describe('when window.crypto is null', () => {
    beforeEach(() => {
      global.window = {
        crypto: null,
      };
    });

    it('throws an error', () => {
      expect(() => GlUniqueId()).toThrow('Cannot generate a unique ID');
    });
  });

  describe('edge cases', () => {
    beforeEach(() => {
      global.window = {
        crypto: mockCrypto,
      };
    });

    it('handles crypto.getRandomValues throwing an error', () => {
      mockCrypto.getRandomValues.mockImplementation(() => {
        throw new Error('Crypto API error');
      });

      expect(() => GlUniqueId()).toThrow('Crypto API error');
    });
  });
});
