import * as React from 'react';

import styles from './App.module.css';
import Canvas from './components/Canvas';
import Node from './components/Node';
import NodeList from './components/NodeList';
import { MODIFY_MODE, TNode } from './types';
import { useRecoilState } from 'recoil';
import { NodeListState } from './context/NodeContext';
import { CanvasState } from './context/CanvasContext';

// todo: 다른 노드에 드랍하면 두 노드가 연결됨
// todo: 노드 꾸미기: 가장자리 마우스오버 - 엣지포인트
// todo: 우측 노드 클릭시 해당노드 강조, 노드에 연결된 다른 노드는 opacity 0.5, 다른 노드는 숨김처리

// todo: 드래그앤 드롭 캔버스 안에서만 이루어지도록 처리
// todo: 드래그앤 드롭시 상위 컴포넌트나 다른 컴포넌트 안건드리고 해당 노드만 변경되도록 처리

function App() {
  const [nodeList, setNodeList] = useRecoilState(NodeListState);
  const [canvas, setCanvas] = useRecoilState(CanvasState);

  const canvasRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const rect = (canvasRef.current as HTMLElement).getBoundingClientRect();
      setCanvas({ top: rect.top, left: rect.left });
    }
  }, []);

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
        <Canvas ref={canvasRef}>
          {nodeList.map(node => (
            <Node key={node.id} {...node} />
          ))}
        </Canvas>
        <NodeList />
      </div>
    </div>
  );
}

export default App;
