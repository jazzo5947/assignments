import React from 'react';

import styles from './App.module.css';
import Canvas from './components/Canvas';
import Node from './components/Node';
import NodeList from './components/NodeList';
import { MODIFY_MODE, TNode } from './types';

// todo: Node 전역 상태관리 만들기
// todo: 드래그앤 드롭
// todo: 다른 노드에 드랍하면 두 노드가 연결됨
// todo: 노드 꾸미기: 가장자리 마우스오버 - 엣지포인트
// todo: 우측 노드 클릭시 해당노드 강조, 노드에 연결된 다른 노드는 opacity 0.5, 다른 노드는 숨김처리

function App() {
  const [nodeList, setNodeList] = React.useState<TNode[]>([]);

  const onClickAddBtn = (e: any) => {
    const newIdx = nodeList.length + 1;
    const newNode: TNode = {
      id: newIdx + '',
      x: newIdx * 5,
      y: newIdx * 5,
      text: '',
      modifyMode: MODIFY_MODE.OFF,
    };

    setNodeList(prev => {
      return [...prev, newNode];
    });
  };

  return (
    <div className="App">
      <div className={styles.titleWrapper}>
        <h1>Node Graph</h1>
        <button className={styles.addButton} onClick={onClickAddBtn}>
          +
        </button>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Canvas>
          {nodeList.map(node => (
            <Node key={node.id} {...node} />
          ))}
        </Canvas>
        <NodeList nodeList={nodeList} />
      </div>
    </div>
  );
}

export default App;
