import React from "react";
import moment from "moment";
import styles from "./index.module.scss";
import { ReactComponent as Clock } from "icons/clock-solid.svg";
import DateTimePicker from "components/DateTimePicker";

const DeliveryInformationCard: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const [dateRange, setDateRange] = React.useState<{
    startAt?: Date;
    endAt?: Date;
  }>({});

  return (
    <div className={styles.card}>
      <Clock className={styles.clock} />
      <div className={styles.time}>
        <span className={styles.label}>Delivery time:</span>
        <span>
          {moment(dateRange.startAt).format("H:mm A")}-
          {moment(dateRange.endAt).format("H:mm A")} on{" "}
          {moment(dateRange.endAt).format("M/D")}
        </span>
      </div>
      <button
        className={styles.edit}
        onClick={() => {
          setOpen(true);
        }}
      >
        Edit
      </button>
      <DateTimePicker
        title="Schedule a Delivery Time"
        startAt={dateRange.startAt}
        endAt={dateRange.endAt}
        onChange={(startAt, endAt) => {
          setDateRange({
            startAt,
            endAt,
          });
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullSlot={[
          moment().add(1, "hour").toDate(),
          moment().add(1.5, "hour").toDate(),
        ]}
      />
    </div>
  );
};

export default DeliveryInformationCard;
