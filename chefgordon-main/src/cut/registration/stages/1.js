import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '0') {

      storage[from].stage = 0;

      return (
        '\nRegistration Records selected ```Press *️⃣ To go select another option```\n\n'
      );
    } else if (message === '1') {
      storage[from].stage = 0;

      return (
        '\nBursary selected ```Press *️⃣ To go select another option```\n\n'
      );
    }else if (message === '2') {
      storage[from].stage = 0;

      return (
        '\nStudent Learning and Research selected ```Press *️⃣ To go select another option```\n\n'
      );
    }else if (message === '3') {
      storage[from].stage = 0;

      return (
        '\nStudent Access Control selected ```Press *️⃣ To go select another option```\n\n'
      );
    }else if (message === '4') {
      storage[from].stage = 0;

      return (
        '\nLibrary Links selected ```Press *️⃣ To go select another option```\n\n'
      );
    }else if (message === '5') {
      storage[from].stage = 0;

      return (
        '\nNewsroom/ Notice(s) selected ```Press *️⃣ To go select another option```\n\n'
      );
    }else if (message === '6') {
      storage[from].stage = 0;

      return (
        '\nElearning Data Bundles selected ```Press *️⃣ To go select another option```\n\n'
      );
    }else if (message === '7') {
      storage[from].stage = 0;

      return (
        '\nStudent Health Services selected \n```Press *️⃣ To go select another option```\n\n'
      );
    }

    return '❌ *Enter a valid option, please.*\n⚠️ ```NB: ONLY ONE OPTION AT A TIME``` ⚠️';
  },
};
