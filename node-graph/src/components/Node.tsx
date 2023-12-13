import * as React from 'react';

import { useRecoilState } from 'recoil';

import { NodeListState } from '../context/NodeListContext';
import { CanvasState } from '../context/CanvasContext';

import styles from './Node.module.css';
import { MODIFY_MODE, TNode } from '../types';

function Node(props: TNode) {
  const { id, x, y, text, modifyMode, clicked } = props;

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

  const onDragStart = (e: any) => {
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;
    setOffset({ x: offsetX, y: offsetY });
  };

  const onDrag = (e: any) => {
    // todo: 원위치로 돌아갔다 오는 현상 어케 해결할지 고민... 이전 상태를 따로 관리해줄지 아니면 다른 방법이 있을지?
    // const changedNodeList = nodeList.map(node => {
    //   if (node.id === id) {
    //     return {
    //       ...node,
    //       x: e.clientX - canvas.left - offset.x,
    //       y: e.clientY - canvas.top - offset.y,
    //     };
    //   } else {
    //     return node;
    //   }
    // });
    // setNodeList(changedNodeList);
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const onDragEnd = (e: any) => {
    const endX = e.clientX - canvas.left - offset.x;
    const endY = e.clientY - canvas.top - offset.y;

    const nodeWidth = 100;
    const nodeHeight = 50;

    let overlapCount = 0;
    nodeList.forEach(node => {
      if (node.id !== id) {
        if (
          endX < node.x + nodeWidth &&
          endX + nodeWidth > node.x &&
          endY < node.y + nodeHeight &&
          endY + nodeHeight > node.y
        ) {
          overlapCount++;
        }
      }
    });

    if (overlapCount >= 2) {
      alert('노드가 다른 노드와 겹칩니다. 원래 위치로 되돌립니다.');
      return;
    } else {
      const updatedNodeList = nodeList.map(node => {
        if (node.id === id) {
          return { ...node, x: endX, y: endY };
        }
        return node;
      });
      setNodeList(updatedNodeList);
    }
  };

  const onMouseOver = (e: any) => {
    console.log(e.target.id);
  };

  return (
    <div
      draggable
      id={id + ''}
      onDoubleClick={onDoubleClick}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onMouseOver={onMouseOver}
      className={`${styles.node} ${clicked ? styles.clickedNode : ''}`}
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
