/**
 * Function uses browser native crypto to return a sixteen
 * character base16 encoded string. It is often used to
 * generate collision-resistant IDs for aria markup such
 * as aria-activedescendant and aria-controls.
 *
 * @returns String
 */
export const GlUniqueId = () => {
  if (typeof window !== 'undefined' && window.crypto) {
    const arr32 = new Uint32Array(2);
    window.crypto.getRandomValues(arr32);
    return Array.from(arr32, (id) => id.toString(16)).join('');
  }

  throw new Error('Cannot generate a unique ID');
};
