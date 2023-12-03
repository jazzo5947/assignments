import * as React from 'react';
import styles from './Canvas.module.css';

type CanvasProps = {
  children: React.ReactNode;
};

function Canvas({ children }: CanvasProps) {
  React.useEffect(() => {}, []);

  return (
    <div id="canvas" className={styles.canvas}>
      {children}
    </div>
  );
}

export default Canvas;
