export type TNode = {
  id: number;
  x: number;
  y: number;
  text: string;
  modifyMode: string;
  fromId?: number;
  toId?: number;
  clicked: boolean;
};

export const MODIFY_MODE = { ON: 'on', OFF: 'off' };
