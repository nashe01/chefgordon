import {
    initialStage,
    stageOne,
    stageTwo,
    finalStage,
  } from './stages/index.js';
  
  import { storage } from './storage.js';
  
  export const authStages = [
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
  
  export function getAuthStage({ from }) {
    if (storage[from]) {
      return storage[from].stage;
    } else {
      storage[from] = {
        stage: 0,
        credentials: [],
        address: '',
        token:[],
        username:[]

      };
  
      return storage[from].stage;
    }
  }
  