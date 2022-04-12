import { cleanText } from '../../modules/nuxt_lunr_content_bridge';

describe('NuxtLunrContentBridge', () => {
  describe('#cleanText', () => {
    it('only retains words at least two characters long', () => {
      expect(cleanText('Test a string')).toEqual('Test string');
    });

    it('only retains letters', () => {
      expect(cleanText('This is a question?')).toEqual('This is question');
    });

    it('correctly splits across multiple lines', () => {
      expect(
        cleanText(`
Test a
   multiline string
with indentation
`),
      ).toEqual('Test multiline string with indentation');
    });
  });
});
