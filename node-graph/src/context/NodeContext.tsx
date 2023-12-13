import { atom } from 'recoil';
import { TNode } from '../types';

const initialNodeListState: TNode[] = [
  {
    id: '0',
    x: 5,
    y: 5,
    text: '',
    modifyMode: 'off',
  },
];

export const NodeListState = atom({
  key: 'nodeListState',
  default: initialNodeListState,
});
