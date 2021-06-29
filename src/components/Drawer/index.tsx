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
  return (
    <div onClick={onClose} className={classNames(styles.container, {
      [styles.open]: open
    })}>
      <div onClick={event => {
        event.stopPropagation()
      }} className={classNames(styles.drawer, {
        [styles.active]: open
      })}>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
