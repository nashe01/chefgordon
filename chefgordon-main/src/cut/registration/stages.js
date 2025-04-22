import {
    initialStage,
    stageOne,
    stageTwo,
    finalStage,
  } from './stages/index.js';
  
  import { storage } from './storage.js';
  
  export const registrationStages = [
    {
      descricao: 'Welcome',
      stage: initialStage,
    },
    {
      descricao: 'Username',
      stage: stageOne,
    },
    {
      descricao: 'Password',
      stage: stageTwo,
    },
    {
      descricao: 'Finalize',
      stage: finalStage,
    },
  ];
  
  export function getRegistrationStage({ from }) {
    if (storage[from]) {
      return storage[from].stage;
    } else {
      storage[from] = {
        stage: 0,
        itens: [],
        address: '',
      };
  
      return storage[from].stage;
    }
  }
  