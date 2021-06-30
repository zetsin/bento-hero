import React from 'react';
import classNames from 'classnames'
import styles from "./index.module.scss"

export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children
}) => {
  const drawerRef = React.useRef<HTMLDivElement>(null)
  const movingRef = React.useRef({
    startY: 0,
    endY: 0
  })

  return (
    <div onClick={onClose} className={classNames(styles.container, {
      [styles.open]: open
    })}>
      <div ref={drawerRef} onClick={event => {
        event.stopPropagation()
      }} className={classNames(styles.drawer, {
        [styles.active]: open
      })}>
        <div onTouchStart={event => {
          movingRef.current.startY = event.touches[0].clientY;
        }} onTouchMove={(event) => {
          movingRef.current.endY = event.touches[0].clientY;
          const distance = movingRef.current.endY - movingRef.current.startY

          if(distance < 0) {
            return
          }

          if(drawerRef.current) {
            drawerRef.current.style.bottom = `${-distance}px`;
          }
        }} onTouchEnd={event => {
          const distance = movingRef.current.endY - movingRef.current.startY

          if(distance > 50) {
            onClose?.()
          }

          movingRef.current.startY = 0
          movingRef.current.endY = 0

          if(drawerRef.current) {
            drawerRef.current.style.bottom = "0px"
          }
        }} className={styles.toggle}>
          <div className={styles.bar}></div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
