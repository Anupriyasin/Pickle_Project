import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Card, Typography, Box } from '@mui/material';
import './index.css';
import pickleImage from '../src/assets/images/bg.jpg';

const LoginForm = () => {
  const [form] = Form.useForm();

  return (
    <div className='container' style={{ height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100%',
          backgroundImage: `url(${pickleImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Card sx={{ padding: 4, width: 400, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Log in to your account
          </Typography>
          <Form
            form={form}
            layout="vertical"
            name="login-form"
            onFinish={() => {}}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
            </Form.Item>
            <Typography align="center">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </Typography>
          </Form>
        </Card>
      </Box>
    </div>
  );
};

export default LoginForm;
