import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Hey, welcome to mozzart. CUT portal chatbot. \n\n*To connect your account, please follow the steps below:* \n\n```Choose option 1 to accept; anything else will decline our Terms & Conditions.``` \n------------------------------------------------------------  \n1️⃣ - ACCEPT\n❌ - DECLINE';
  },
};
