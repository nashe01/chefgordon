import { storage } from '../storage.js';

export const one = {
  exec({ message, from }) {

    if (message === '1') {
      storage[from].stage = 0;

      return '🍴 Today\'s Menu:\n1. Creamy Mushroom Risotto 🍄\n2. Grilled Lemon Chicken 🍋\n3. Vegan Buddha Bowl 🌱\n\nReply with the dish number for step-by-step instructions or type "More" for additional options!';
    } else if (message === '2') {
      storage[from].stage = 0;

      return (
        '📅 Let\'s schedule your cooking session!\nReply with a date and time (e.g., "Tomorrow at 7 PM"), and I’ll confirm your slot.'
      );

    } else if (message === '3') {
      storage[from].stage = 2;

      return (
        '👨‍🍳 Tell me the ingredients you have, separated by commas (e.g., "chicken, tomatoes, garlic"), and I’ll create a custom recipe for you!'
      );
    } else if (message === '4') {
      storage[from].stage = 3;

      return (
        '🥗 What are your dietary preferences? (e.g., "vegetarian, keto, gluten-free")\nI’ll help plan meals tailored to your needs.'
      );
    }
    else if (message === '5') {
      storage[from].stage = 4;
      return (
        '🛒 Tell me what meals you’re planning, and I’ll create a grocery list for you (e.g., "Pasta, Salad, Stir-fry").'
      );
    }

    else if (message === '6') {
      storage[from].stage =5;

      return (
        '🥡 What leftovers do you have? I’ll suggest how to transform them into a new dish (e.g., "rice, chicken, vegetables").'
      );

    }

    else if (message === '7') {
      storage[from].stage = 6;

      return ('✨ What cooking topic do you need help with? (e.g., "cutting onions," "perfect pasta"). I’ll share expert tips and tricks!');
    }

    else if (message === '8') {
      storage[from].stage = 0;
      return (
        '📞 Please describe your issue or question, and I’ll connect you to a support representative.'
      );
    }

    else if (message === '9') {
      storage[from].stage = 0;
      return (
        '📸 Please upload an image of the ingredients you have, and I’ll identify them and suggest recipes!'
      );
    }

    else if (message === '10') {
      storage[from].stage = 7;
      return (
        '🥗 Please type the name of a meal or ingredient, and I’ll provide its nutritional value.'
      );
    }

    else if (message === '11') {
      storage[from].stage = 8;
      return (
        '📖 Please type the name of a meal to learn more about its origin, history, and popularity.'
      );
    }

    else if (message === '12') {
      storage[from].stage = 9;
      return;
    }

    else if (message === '13') {
      storage[from].stage = 10;
      return (
        '🌍 Please type the name of a region or cuisine (e.g., "Italian," "Japanese") to explore dishes from there.'
      );
    }



    else {
      storage[from].stage = 0;
      return '❌ I didn’t understand that. Please reply with a valid.';
    }

  },
};