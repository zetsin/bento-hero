import React from 'react';
import classNames from 'classnames'
import styles from "./index.module.scss"
import Drawer, { DrawerProps } from 'components/Drawer';
import moment from "moment"
import { useEffect } from 'react';

export interface DateTimePickerProps extends DrawerProps {
  title?: string;
  startAt?: Date;
  endAt?: Date;
  onChange?: (startAt: Date, endAt: Date) => void;
  fullSlot?: Date[];
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  title,
  startAt,
  endAt,
  onChange,
  fullSlot,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  useEffect(() => {
    if(endAt) {
      setSelectedDate(endAt)
    }
    else {
      onChange?.(moment().startOf("hour").add(0.5, 'hour').toDate(), moment().startOf("hour").add(1, 'hour').toDate())
    }
  }, [endAt, onChange])

  return (
    <Drawer {...props}>
      <div className={styles.root}>
        <div className={styles.title}>
          <p>
            {title}
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.dates}>
            {Array.from({
              length: 7
            }).map((item, index) => {
              const date = moment().startOf("day").add(index, 'day')
              const same = date.isSame(selectedDate, "day")

              return (
                <div key={index} onClick={() => {
                  setSelectedDate(date.toDate())
                }} className={classNames(styles.date, {
                  [styles.samedate]: same
                })}>
                  {date.calendar()}
                </div>
              )
            })}
          </div>
          <div className={styles.times}>
            {Array.from({
              length: 24 * 2
            }).map((item, index) => {
              const startTime = moment(selectedDate).startOf("day").add(index / 2, 'hour')
              const endTime = startTime.clone().add(0.5, 'hour')
              const same = startTime.isSame(startAt, "hour") && endTime.isSame(endAt, "hour")
              const full = fullSlot?.some(item => startTime.isSameOrBefore(item) && endTime.isSameOrAfter(item))
              const disabled = endTime.isBefore(moment()) || full

              return (
                <div key={index} className={styles.time}>
                  <label className={classNames({
                    [styles.disabled]: disabled
                  })}>
                    {startTime.format("H:mm A")}-{endTime.format("H:mm A")}
                    <br />
                    <span className={styles.full}>{full ? "Slot Full" : <br />}</span>
                    <input type="radio" checked={same} disabled={disabled} onChange={(event) => {
                      onChange?.(startTime.toDate(), endTime.toDate())
                      props?.onClose?.()
                    }} />
                    <span className={styles.mark}></span>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default DateTimePicker;
