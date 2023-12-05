import * as React from "react";
import { TNode } from "../types";

type NodeListProps = {
  nodeList: TNode[];
};

function NodeList({ nodeList }: NodeListProps) {
  return (
    <div id="nodeList">
      {nodeList.map((node) => (
        <div key={node.id}>
          {node.id}. position: [x: {node.x}, y: {node.y}] content: {node.text}
        </div>
      ))}
    </div>
  );
}

export default NodeList;
