import * as React from 'react';
import styles from './Canvas.module.css';

type CanvasProps = {
  children: React.ReactNode;
};

const Canvas = React.forwardRef<HTMLDivElement, CanvasProps>(
  (props: CanvasProps, ref) => {
    const { children } = props;

    React.useEffect(() => {}, []);

    return (
      <div ref={ref} id="canvas" className={styles.canvas}>
        {children}
      </div>
    );
  }
);

export default Canvas;
