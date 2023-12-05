import * as React from "react";

import styles from "./Node.module.css";
import { MODIFY_MODE, TNode } from "../types";

function Node(props: TNode) {
  const { id, x, y, text, modifyMode } = props;
  const [nodeText, setNodeText] = React.useState(text);
  const [mode, setMode] = React.useState(modifyMode);

  const [position, setPosition] = React.useState({ x: x, y: y });

  const onDoubleClick = (e: any) => {
    setMode(MODIFY_MODE.ON);
  };

  const onChangeNodeText = (e: any) => {
    setNodeText(e.target.value);
  };

  const onDrag = (e: any) => {
    console.log(e);
  };

  const onDragStart = (e: any) => {
    console.log(e);
  };

  const onDragEnd = (e: any) => {
    console.log(e);
  };

  return (
    <div
      draggable
      id={id}
      onDoubleClick={onDoubleClick}
      onDrag={onDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
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
