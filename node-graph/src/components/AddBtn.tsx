import * as React from 'react';

import { useRecoilState } from 'recoil';

import { NodeListState } from '../context/NodeListContext';

import styles from './AddBtn.module.css';
import { MODIFY_MODE, TNode } from '../types';

function AddBtn() {
  const [nodeList, setNodeList] = useRecoilState(NodeListState);

  const onClickAddBtn = (e: any) => {
    const newIdx = nodeList.length + 1;
    const newNode: TNode = {
      id: newIdx,
      x: newIdx * 5,
      y: newIdx * 5,
      text: '',
      modifyMode: MODIFY_MODE.OFF,
      clicked: false,
    };

    setNodeList(prev => {
      return [...prev, newNode];
    });
  };

  return (
    <button className={styles.addButton} onClick={onClickAddBtn}>
      +
    </button>
  );
}

export default AddBtn;
