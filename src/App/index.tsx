import React from "react";
import styles from "./index.module.scss";
import DeliveryInformationCard from "./components/DeliveryInformationCard";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <p>Order Summary</p>
      </header>
      <div className={styles.body}>
        <p>Delivery Information:</p>
        <DeliveryInformationCard />
      </div>
    </div>
  );
};

export default App;
