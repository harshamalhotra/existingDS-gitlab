import {
  parseFloatWithPrecision,
  DTCGToFigmaColorFormat,
  convertValue,
  getVariableType,
} from './figma_sync_tokens_utilities.mjs';

describe('Sync Tokens Utilities', () => {
  describe('parseFloatWithPrecision', () => {
    it('should parse integer strings', () => {
      expect(parseFloatWithPrecision('42')).toBe(42);
      expect(parseFloatWithPrecision('0')).toBe(0);
      expect(parseFloatWithPrecision('-15')).toBe(-15);
    });

    it('should parse decimal strings', () => {
      expect(parseFloatWithPrecision('3.14')).toBe(3.14);
      expect(parseFloatWithPrecision('0.5')).toBe(0.5);
      expect(parseFloatWithPrecision('-2.7')).toBe(-2.7);
    });

    it('should parse numeric values', () => {
      expect(parseFloatWithPrecision(42)).toBe(42);
      expect(parseFloatWithPrecision(3.14)).toBe(3.14);
      expect(parseFloatWithPrecision(-2.7)).toBe(-2.7);
    });

    it('should fix common floating-point precision issues', () => {
      expect(parseFloatWithPrecision(0.1 + 0.2)).toBe(0.3);
      expect(parseFloatWithPrecision(1.1)).toBe(1.1);
      expect(parseFloatWithPrecision(0.10000000149011612)).toBe(0.1);
    });

    it('should throw error for non-numeric strings', () => {
      expect(() => parseFloatWithPrecision('abc')).toThrow('Cannot convert "abc" to float');
    });
  });

  describe('DTCGToFigmaColorFormat', () => {
    it('converts DTCG color with explicit alpha to Figma format', () => {
      const input = {
        colorSpace: 'srgb',
        components: [255, 128, 0],
        alpha: 0.8,
      };

      const result = DTCGToFigmaColorFormat(input);

      expect(result).toEqual({
        r: 255,
        g: 128,
        b: 0,
        a: 0.8,
      });
    });

    it('converts DTCG color without alpha (defaults to 1)', () => {
      const input = {
        colorSpace: 'srgb',
        components: [0, 150, 255],
      };

      const result = DTCGToFigmaColorFormat(input);

      expect(result).toEqual({
        r: 0,
        g: 150,
        b: 255,
        a: 1,
      });
    });

    it('handles alpha value of 0 (fully transparent)', () => {
      const input = {
        colorSpace: 'srgb',
        components: [100, 200, 50],
        alpha: 0,
      };

      const result = DTCGToFigmaColorFormat(input);

      expect(result).toEqual({
        r: 100,
        g: 200,
        b: 50,
        a: 0,
      });
    });

    it('handles decimal RGB values', () => {
      const input = {
        colorSpace: 'srgb',
        components: [0.5, 0.8, 0.2],
        alpha: 0.6,
      };

      const result = DTCGToFigmaColorFormat(input);

      expect(result).toEqual({
        r: 0.5,
        g: 0.8,
        b: 0.2,
        a: 0.6,
      });
    });

    it('handles edge case with alpha explicitly set to undefined', () => {
      const input = {
        colorSpace: 'srgb',
        components: [255, 255, 255],
        alpha: undefined,
      };

      const result = DTCGToFigmaColorFormat(input);

      expect(result).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      });
    });

    it('throws error when components array is missing', () => {
      const input = {
        colorSpace: 'srgb',
        alpha: 0.5,
      };

      expect(() => DTCGToFigmaColorFormat(input)).toThrow();
    });
  });

  describe('convertValue', () => {
    it('should convert color tokens with components', () => {
      const token = {
        $value: { colorSpace: 'srgb', components: [1, 0, 0], alpha: 1 },
        $type: 'color',
      };

      const result = convertValue(token);

      expect(result).toEqual({ r: 1, g: 0, b: 0, a: 1 });
    });

    it('should convert dimension tokens', () => {
      const token = {
        $value: { value: 16 },
        $type: 'dimension',
      };

      const result = convertValue(token);

      expect(result).toBe(16);
    });

    it('should convert number tokens', () => {
      const token = {
        $value: 0.5,
        $type: 'number',
      };

      const result = convertValue(token);

      expect(result).toBe(0.5);
    });

    it('should convert string tokens', () => {
      const token = {
        $value: '600',
        $type: 'fontWeight',
      };

      const result = convertValue(token);

      expect(result).toBe('600');
    });
  });

  describe('getVariableType', () => {
    it('should map token types to Figma variable types', () => {
      expect(getVariableType('color')).toBe('COLOR');
      expect(getVariableType('dimension')).toBe('FLOAT');
      expect(getVariableType('number')).toBe('FLOAT');
      expect(getVariableType('string')).toBe('STRING');
      expect(getVariableType('fontWeight')).toBe('FLOAT');
    });

    it('should default to STRING for unknown types', () => {
      expect(getVariableType('unknown')).toBe('STRING');
    });
  });
});
