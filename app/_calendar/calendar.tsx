"use client";
import "@ant-design/v5-patch-for-react-19";

import type { GetProps } from "antd";
import { useState } from "react";
import { DatePicker, TimePicker, Form } from "antd";
import dayjs from "dayjs";

type RangePickerProps = GetProps<typeof DatePicker>;

export const Calendar = () => {
  const [date, setDate] = useState<string | string[]>("");
  const format = "HH:mm";

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    const today = dayjs().startOf("day");
    const maxDate = today.add(30, "day");
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
    <div className="flex justify-around">
      <Form.Item
        className="w-[45%]"
        name={["user", "date"]}
        rules={[{ required: true, message: "Выберите дату" }]}
      >
        <DatePicker
          className="w-full"
          onChange={(_, dateString) => {
            setDate(dateString);
          }}
          inputReadOnly
          disabledDate={disabledDate}
          showNow={false}
          placeholder="Выберите дату"
        />
      </Form.Item>

      <Form.Item
        className="w-[45%]"
        name={["user", "time"]}
        rules={[{ required: true, message: "Выберите время" }]}
      >
        <TimePicker
          className="w-full"
          format={format}
          inputReadOnly
          disabledTime={disabledTime}
          hideDisabledOptions
          showNow={false}
          minuteStep={30}
          placeholder="Выберите время"
        />
      </Form.Item>
    </div>
  );
};
