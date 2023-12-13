import * as React from 'react';
import { useRecoilState } from 'recoil';

import { TNode } from '../types';
import { NodeListState } from '../context/NodeContext';

type NodeListProps = {
  nodeList: TNode[];
};

function NodeList() {
  const [nodeList, setNodeList] = useRecoilState(NodeListState);

  return (
    <div id="nodeList">
      {nodeList.map(node => (
        <div key={node.id}>
          {node.id}. position: [x: {node.x}, y: {node.y}] content: {node.text}
        </div>
      ))}
    </div>
  );
}

export default NodeList;
