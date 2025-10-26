"use client";

import { useState } from "react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";

export const Calendar = () => {
  const [date, setDate] = useState<string | string[]>("");
  const format = "HH:mm";

  const disabledDate = (current) => {
    const today = dayjs().startOf("day");
    const maxDate = today.add(30, "day"); // ограничение на 30 дней вперёд
    return current && (current < today || current > maxDate);
  };

  const disabledTime = () => ({
    disabledHours: () => {
      return Array.from({ length: 24 }, (_, i) => i).filter(
        (hour) => hour < 9 || hour > 17
      );
    },
  });

  return (
    <div className="flex">
      <DatePicker
        onChange={(_, dateString) => {
          setDate(dateString);
        }}
        inputReadOnly
        disabledDate={disabledDate}
        showNow={false}
      />
      <TimePicker
        format={format}
        inputReadOnly
        disabledTime={disabledTime}
        hideDisabledOptions
        showNow={false}
        minuteStep={30}
      />
    </div>
  );
};
