import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    storage[from].stage = 3;
    storage[from].credentials.push(message);
    console.log(message);
    return (
      `\nSelect an Option to connect your account with credentials - '${storage[from].credentials[0]}'\n \n1️⃣ Connect Account \n ❌ Cancel`
    );
  },
};
