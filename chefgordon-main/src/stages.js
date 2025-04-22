import {
  initialStage, one, two, three, four, five, six, eight, nine, ten, eleven, twelve, thirteen, finalStage
} from './stages/index.js';

import { storage } from './storage.js';

export const stages = [
  {
    descricao: '0',
    stage: initialStage,
  },
  {
    descricao: '1',
    stage: one,
  },
  {
    descricao: '2',
    stage: two,
  },
  {
    descricao: '3',
    stage: three,
  },
  {
    descricao: '4',
    stage: four,
  },
  {
    descricao: '5',
    stage: five,
  },
  {
    descricao: '6',
    stage: six,
  },

  {
    descricao: '8',
    stage: eight,
  },
  {
    descricao: '9',
    stage: nine,
  },
  {
    descricao: '10',
    stage: ten,
  },
  {
    descricao: '11',
    stage: eleven,
  },
  {
    descricao: '12',
    stage: twelve,
  },
  {
    descricao: '12',
    stage: thirteen,
  },
  {
    descricao: '13',
    stage: finalStage,
  },
];

export function getStage({ from }) {
  if (storage[from]) {
    return storage[from].stage;
  } else {
    storage[from] = {
      stage: 0,
      itens: [],
      address: '',
      token: [],
      username: [],
      staticdata: []
    };

    return storage[from].stage;
  }
}
