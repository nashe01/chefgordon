import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {

      storage[from].stage = 2;

      return (
        '*Please enter your Registration Number and password in the following format:* \n---------------------------------- \n\n```e.g. C21145485H:Pass@123``` \n\n • Ensure that your Registration Number is in the format of a letter followed by eight digits and ending with a letter (e.g., C21145485H). \n\n• Your password should be a combination of letters, numbers, and special characters. \n\n• For security purposes, please do not share your password with anyone.'
      );
    } else if (message === '2') {
      storage[from].stage = 5;
      return (
        '\nThank you for trying our chatbot. `\n``Accept T&C\'s to use our chatbot```\n\n'
      );
    }

    return '❌ *Enter a valid option, please.*\n⚠️ ```NB: ONLY ONE OPTION AT A TIME``` ⚠️';
  },
};
