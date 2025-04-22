import { storage } from '../storage.js';
import axios from 'axios';

const axiosInstance = axios.create();

export const initialStage = {
  async exec({ from, client }) {
    storage[from].stage = 1;
    client.sendMessage(from,
      "👋 Hello! How are you?\n\n" +
      "I am Chef Gordon, your personal chef assistant! 🍳\n\n" +
      "How can I assist you today?\n\n" +
      "1. VIEW TODAY'S MENU\n" +
      "2. BOOK A MEAL PREPARATION SLOT\n" +
      "3. REQUEST A CUSTOM RECIPE\n" +
      "4. PLAN MEALS BASED ON DIETARY PREFERENCES\n" +
      "5. GENERATE A GROCERY LIST\n" +
      "6. GET TIPS FOR USING LEFTOVERS\n" +
      "7. COOKING TIPS OR HACKS\n" +
      "8. CONTACT SUPPORT\n" +
      "9. UPLOAD INGREDIENT IMAGE\n" +
      "10. NUTRITIONAL INFORMATION\n" +
      "11. MEAL INFORMATION\n" +
      "12. SUGGEST MEALS BY TIME\n" +
      "13. SUGGEST GEOGRAPHIC-SPECIFIC MEALS"
    );
    return;
  },
};
