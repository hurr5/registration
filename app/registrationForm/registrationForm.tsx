"use client";

import { Calendar } from "../_calendar/calendar";
import { Form, Input, Checkbox, Button } from "antd";
import { MaskedInput } from "antd-mask-input";
import type { Dayjs } from "dayjs";

type FieldType = {
  user: {
    surname?: string;
    email?: string;
    phone?: string;
    comment?: string;
    certificate?: boolean;
    date?: Dayjs;
    time?: Dayjs;
  };
};

export const RegistrationForm = () => {
  const onFinish = (values: FieldType) => {
    const formatted = {
      user: {
        ...values.user,
        date: values.user.date?.format("YYYY-MM-DD"),
        time: values.user.time?.format("HH:mm"),
      },
    };
    console.log(formatted);
  };

  return (
    <div className="bg-white/30 rounded-3xl p-10 w-full">
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        initialValues={{
          name: "Mikhail",
        }}
      >
        <Calendar />
        <div className="flex justify-around">
          <Form.Item
            className="w-[45%]"
            name={["user", "name"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Имя" />
          </Form.Item>

          <Form.Item
            className="w-[45%]"
            name={["user", "surname"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Фамилия" />
          </Form.Item>
        </div>

        <div className="flex justify-around">
          <Form.Item
            className="w-[45%]"
            name={["user", "email"]}
            rules={[
              { required: true, message: "Необходимо ввести ваш email" },
              {
                pattern: /^[\w-_.]+@[\w]+\.[\w.]+$/,
                message: "Неверный формат email",
              },
            ]}
          >
            <Input placeholder="Электронная почта" />
          </Form.Item>

          <Form.Item
            className="w-[45%]"
            name={["user", "phone"]}
            rules={[{ required: true }]}
          >
            <MaskedInput
              mask="+7 (000) 000-00-00"
              placeholder="Номер телефона"
            />
          </Form.Item>
        </div>

        <div className="flex justify-center">
          <Form.Item className="w-[95%]" name={["user", "comment"]}>
            <Input.TextArea
              style={{ height: 150 }}
              placeholder="Расскажите подробнее о проблеме"
            />
          </Form.Item>
        </div>

        <Form.Item
          name={["user", "certificate"]}
          label="Сертификат на получение обуви"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            className="bg-white p-5 w-50 rounded-3xl active:bg-gray-300 transition-colors border-2 border-gray-500 mx-auto"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
