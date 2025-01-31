import React from 'react';
import { Input, Button, Spin, Card, Form, message } from 'antd';
import { useShortenUrl } from '../hooks/useShortenUrl';

const URLForm: React.FC = () => {
  const { shorten, loading } = useShortenUrl();
  const [form] = Form.useForm();

  const handleSubmit = async (values: { longUrl: string }) => {
    const { longUrl } = values;
    try {
      await shorten(longUrl);
      form.resetFields();
    } catch (error) {
      message.error("An error occurred while shortening the URL."+error);
    }
  };

  return (
    <Card title="URL Shortener" style={{ maxWidth: 600, margin: 'auto' }}>
      <Form
        name="url-shortener"
        onFinish={handleSubmit}
        initialValues={{ longUrl: '' }}
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Long URL"
          name="longUrl"
          rules={[
            { required: true, message: 'Please enter a URL!' },
            { type: 'url', message: 'Please enter a valid URL!' }
          ]}
        >
          <Input placeholder="Enter a long URL" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            color="cyan" 
            variant="solid"
            htmlType="submit"
            block
            disabled={loading}
          >
            {loading ? <Spin /> : 'Shorten URL'}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default URLForm;
