import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    storage[from].stage = 3;

    return (
      '\nEnter your Password```e.g Pass@123```\n\n'
    );
  },
};
