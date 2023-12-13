import { atom, selector } from 'recoil';
import { TNode } from '../types';

const initialNodeListState: TNode[] = [
  {
    id: 0,
    x: 5,
    y: 5,
    text: '',
    modifyMode: 'off',
    clicked: false,
  },
];

export const NodeListState = atom({
  key: 'nodeListState',
  default: initialNodeListState,
});

const nodeCountState = selector({
  key: 'nodeCountState',
  get: ({ get }) => {
    const nodeList = get(NodeListState);

    return nodeList.length;
  },
});
