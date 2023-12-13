import * as React from 'react';

import { useRecoilState } from 'recoil';

import { NodeListState } from '../context/NodeListContext';

import styles from './NodeList.module.css';

function NodeList() {
  const [nodeList, setNodeList] = useRecoilState(NodeListState);

  const onClickNode = (e: any) => {
    console.log(e.target.id);
    const updatedNodeList = nodeList.map(node => {
      if (node.id === +e.target.id) {
        return { ...node, clicked: true };
      } else {
        return { ...node, clicked: false };
      }
    });
    setNodeList(updatedNodeList);
  };

  return (
    <div id="nodeList">
      {nodeList.map(node => (
        <div
          id={node.id + ''}
          key={node.id}
          onClick={onClickNode}
          className={node.clicked ? styles.clicked : ''}
        >
          {node.id}. position: [x: {node.x}, y: {node.y}] content: {node.text}
        </div>
      ))}
    </div>
  );
}

export default NodeList;
