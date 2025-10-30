"use client";

import { Calendar } from "../_calendar/calendar";
import { Button, Form, Input, Checkbox } from "antd";
import { Formik } from "formik";

export const RegistrationForm = () => {
  return (
    <Formik
      render={() => (
        <div className="bg-white/50 rounded-3xl p-10 w-full">
          <Form className="flex flex-col">
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
                rules={[{ required: true }]}
              >
                <Input placeholder="Электронная почта" />
              </Form.Item>

              <Form.Item
                className="w-[45%]"
                name={["user", "phone"]}
                rules={[{ required: true }]}
              >
                <Input placeholder="Номер телефона" />
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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    />
  );
};
