import { FigmaClient } from './figma_sync_tokens_client.mjs';

global.fetch = jest.fn();

describe('FigmaClient', () => {
  let client;

  beforeEach(() => {
    client = new FigmaClient('test-token', 'test-file-id');
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with token and fileId', () => {
      expect(client.token).toBe('test-token');
      expect(client.fileId).toBe('test-file-id');
      expect(client.collections.size).toBe(0);
      expect(client.variables.size).toBe(0);
    });
  });

  describe('getCollection', () => {
    it('should return collection by name', () => {
      const collection = { id: '1', name: 'Constants' };
      client.collections.set('Constants', collection);

      const result = client.getCollection('Constants');

      expect(result).toEqual(collection);
    });

    it('should throw error if collection not found', () => {
      expect(() => client.getCollection('NonExistent')).toThrow(
        'Collection "NonExistent" not found',
      );
    });
  });

  describe('getVariable', () => {
    it('should return variable by name', () => {
      const variable = { id: 'var-1', name: 'color-red' };
      client.variables.set('color-red', variable);

      const result = client.getVariable('color-red');

      expect(result).toEqual(variable);
    });

    it('should return undefined if variable not found', () => {
      const result = client.getVariable('nonexistent');

      expect(result).toBeUndefined();
    });
  });

  describe('request', () => {
    it('should make successful API request', async () => {
      const mockResponse = { meta: { variables: {} } };
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await client.request('GET', '/files/test-file-id/variables/local');

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.figma.com/v1/files/test-file-id/variables/local',
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'X-Figma-Token': 'test-token',
          }),
        }),
      );
    });

    it('should throw error on failed request', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        text: async () => 'Unauthorized',
      });

      await expect(client.request('GET', '/test')).rejects.toThrow('Figma API (401)');
    });

    it('should include body in POST request', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      await client.request('POST', '/test', { key: 'value' });

      expect(global.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({ key: 'value' }),
        }),
      );
    });
  });
});
