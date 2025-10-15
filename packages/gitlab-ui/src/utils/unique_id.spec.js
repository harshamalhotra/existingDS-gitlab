/* eslint-disable no-param-reassign */

import { GlUniqueId } from './unique_id';

describe('GlUniqueId', () => {
  let originalWindow;
  let mockCrypto;

  beforeEach(() => {
    originalWindow = global.window;
    mockCrypto = {
      getRandomValues: jest.fn(),
    };
  });

  afterEach(() => {
    global.window = originalWindow;
    jest.clearAllMocks();
  });

  describe('when window.crypto is available', () => {
    beforeEach(() => {
      global.window = {
        crypto: mockCrypto,
      };
    });

    it('returns a 16-character hexadecimal string', () => {
      mockCrypto.getRandomValues.mockImplementation((arr) => {
        arr[0] = 0x12345678;
        arr[1] = 0x9abcdef0;
      });

      const result = GlUniqueId();
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^[0-9a-f]{1,16}$/);
      expect(result.length).toBeGreaterThan(0);
      expect(result.length).toBeLessThanOrEqual(16);
    });

    it('generates collision-resistant IDs at app scale', () => {
      // Simulate realistic number of IDs for a complex app
      const generatedIds = new Set();
      const iterations = 1000;

      mockCrypto.getRandomValues.mockImplementation((arr) => {
        arr[0] = Math.floor(Math.random() * 0xffffffff);
        arr[1] = Math.floor(Math.random() * 0xffffffff);
      });

      for (let i = 0; i < iterations; i += 1) {
        const id = GlUniqueId();
        expect(generatedIds.has(id)).toBe(false);
        generatedIds.add(id);
      }

      expect(generatedIds.size).toBe(iterations);
    });
  });

  describe('performance', () => {
    beforeEach(() => {
      global.window = {
        crypto: mockCrypto,
      };
      mockCrypto.getRandomValues.mockImplementation((arr) => {
        arr[0] = 0x12345678;
        arr[1] = 0x9abcdef0;
      });
    });

    it('executes quickly for multiple calls', () => {
      const startTime = performance.now();

      for (let i = 0; i < 100; i += 1) {
        GlUniqueId();
      }

      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Should complete 100 calls in under 10ms
      expect(executionTime).toBeLessThan(10);
    });
  });
});
