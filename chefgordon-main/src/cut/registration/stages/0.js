import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '*CUT virtual assistant*. \n\n* Select option to proceed*\n---------------------------------------------\n 0️⃣ - ```Registration Records``` \n 1️⃣- ```Bursary```\n 2️⃣- ```Student Learning and Research```\n 3️⃣ - ```Student Access Control```\n 4️⃣ - ```Library Links```\n 5️⃣ - ```Newsroom/ Notice(s)```\n 6️⃣ - ```E LEARNING DATA BUNDLES```\n 7️⃣ - ```Student Health Services```';
  },
};
