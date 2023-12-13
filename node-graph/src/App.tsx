import * as React from 'react';

import { useRecoilState } from 'recoil';

import { NodeListState } from './context/NodeListContext';
import { CanvasState } from './context/CanvasContext';

import Canvas from './components/Canvas';
import Node from './components/Node';
import NodeList from './components/NodeList';
import AddBtn from './components/AddBtn';
import styles from './App.module.css';

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

  return (
    <div className="App">
      <div className={styles.titleWrapper}>
        <h1>Node Graph</h1>
        <AddBtn />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Canvas ref={canvasRef}>
          {nodeList.map(node => (
            <Node key={node.id + ''} {...node} />
          ))}
        </Canvas>
        <NodeList />
      </div>
    </div>
  );
}

export default App;
