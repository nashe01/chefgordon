import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const finalStage = {
  exec({ from, message }) {
    storage[from].stage = 0;
    return '\nAccount Verified \```Press 1 To start using your chatbot```\n';
  },
};
