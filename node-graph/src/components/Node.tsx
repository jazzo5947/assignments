import * as React from 'react';

import { useRecoilState } from 'recoil';

import { NodeListState } from '../context/NodeContext';
import { CanvasState } from '../context/CanvasContext';

import styles from './Node.module.css';
import { MODIFY_MODE, TNode } from '../types';

function Node(props: TNode) {
  const { id, x, y, text, modifyMode } = props;

  const [nodeList, setNodeList] = useRecoilState(NodeListState);
  const [canvas, setCanvas] = useRecoilState(CanvasState);

  const [nodeText, setNodeText] = React.useState(text);
  const [mode, setMode] = React.useState(modifyMode);

  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  const onDoubleClick = (e: any) => {
    setMode(MODIFY_MODE.ON);
  };

  const onChangeNodeText = (e: any) => {
    setNodeText(e.target.value);
  };

  const onDrag = (e: any) => {
    const changedNodeList = nodeList.map(node => {
      if (node.id === id) {
        return {
          ...node,
          x: e.clientX - canvas.left - offset.x,
          y: e.clientY - canvas.top - offset.y,
        };
      } else {
        return node;
      }
    });

    setNodeList(changedNodeList);
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const onDragStart = (e: any) => {
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;
    setOffset({ x: offsetX, y: offsetY });
  };

  return (
    <div
      draggable
      id={id}
      onDoubleClick={onDoubleClick}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragOver={onDragOver}
      className={styles.node}
      style={{ left: x, top: y }}
    >
      <div className={styles.nodeInputWrapper}>
        <input
          className={styles.nodeInput}
          type="text"
          value={nodeText}
          disabled={mode === MODIFY_MODE.OFF}
          onChange={onChangeNodeText}
        />
      </div>
    </div>
  );
}

export default Node;
