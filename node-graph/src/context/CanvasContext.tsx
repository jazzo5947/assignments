import { atom } from 'recoil';

const initialCanvasState = {
  top: 0,
  left: 0,
};

export const CanvasState = atom({
  key: 'canvasState',
  default: initialCanvasState,
});
