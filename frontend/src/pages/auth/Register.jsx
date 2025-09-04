// // src/components/RegisterPage.js
// import React from 'react';
// import {
//   Form,
//   Input,
//   Button,
//   Card,
//   Typography,
//   Space,
//   Divider,
//   Row,
//   Col,
//   Select,
//   DatePicker
// } from 'antd';
// import {
//   UserOutlined,
//   LockOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   IdcardOutlined,
//   ArrowLeftOutlined
// } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

// const { Title, Text } = Typography;
// const { Option } = Select;

// const RegisterPage = () => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px'
//     }}>
//       <Card
//         style={{
//           width: '100%',
//           maxWidth: 500,
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//           borderRadius: '12px'
//         }}
//         bodyStyle={{ padding: '32px' }}
//       >
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '32px' }}>
//           <Space direction="vertical" size="small" style={{ width: '100%' }}>
//             <Link to="/login" style={{ float: 'left', color: '#1890ff' }}>
//               <ArrowLeftOutlined /> Back to Login
//             </Link>
//             <Title level={2} style={{ color: '#1890ff', margin: '8px 0 0 0', clear: 'both' }}>
//               Create Account
//             </Title>
//             <Text type="secondary">
//               Join us today and start your journey
//             </Text>
//           </Space>
//         </div>

//         {/* Registration Form */}
//         <Form
//           name="register"
//           layout="vertical"
//           size="large"
//         >
//           <Row gutter={16}>
//             <Col xs={24} sm={12}>
//               <Form.Item
//                 label="First Name"
//                 name="firstName"
//                 rules={[{ required: true, message: 'Please input your first name!' }]}
//               >
//                 <Input
//                   prefix={<UserOutlined />}
//                   placeholder="John"
//                 />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={12}>
//               <Form.Item
//                 label="Last Name"
//                 name="lastName"
//                 rules={[{ required: true, message: 'Please input your last name!' }]}
//               >
//                 <Input
//                   prefix={<UserOutlined />}
//                   placeholder="Doe"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item
//             label="Email Address"
//             name="email"
//             rules={[
//               { required: true, message: 'Please input your email!' },
//               { type: 'email', message: 'Please enter a valid email!' }
//             ]}
//           >
//             <Input
//               prefix={<MailOutlined />}
//               placeholder="john.doe@example.com"
//             />
//           </Form.Item>

//           <Form.Item
//             label="Phone Number"
//             name="phone"
//             rules={[{ required: true, message: 'Please input your phone number!' }]}
//           >
//             <Input
//               prefix={<PhoneOutlined />}
//               placeholder="+1 234 567 8900"
//             />
//           </Form.Item>

//           <Row gutter={16}>
//             <Col xs={24} sm={12}>
//               <Form.Item
//                 label="Username"
//                 name="username"
//                 rules={[{ required: true, message: 'Please choose a username!' }]}
//               >
//                 <Input
//                   prefix={<IdcardOutlined />}
//                   placeholder="johndoe"
//                 />
//               </Form.Item>
//             </Col>
//             <Col xs={24} sm={12}>
//               <Form.Item
//                 label="Gender"
//                 name="gender"
//                 rules={[{ required: true, message: 'Please select your gender!' }]}
//               >
//                 <Select placeholder="Select gender">
//                   <Option value="male">Male</Option>
//                   <Option value="female">Female</Option>
//                   <Option value="other">Other</Option>
//                 </Select>
//               </Form.Item>
//             </Col>
//           </Row>

//           <Form.Item
//             label="Date of Birth"
//             name="dob"
//             rules={[{ required: true, message: 'Please select your date of birth!' }]}
//           >
//             <DatePicker
//               style={{ width: '100%' }}
//               placeholder="Select date"
//             />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password
//               prefix={<LockOutlined />}
//               placeholder="••••••••"
//             />
//           </Form.Item>

//           <Form.Item
//             label="Confirm Password"
//             name="confirmPassword"
//             rules={[{ required: true, message: 'Please confirm your password!' }]}
//           >
//             <Input.Password
//               prefix={<LockOutlined />}
//               placeholder="••••••••"
//             />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               style={{ width: '100%' }}
//               size="large"
//             >
//               Create Account
//             </Button>
//           </Form.Item>
//         </Form>

//         <Divider>Or sign up with</Divider>

//         {/* Social Sign Up Options */}
//         <Row gutter={[12, 12]}>
//           <Col xs={8}>
//             <Button 
//               style={{ width: '100%', background: '#DB4437', color: 'white', border: 'none' }}
//             >
//               Google
//             </Button>
//           </Col>
//           <Col xs={8}>
//             <Button 
//               style={{ width: '100%', background: '#4267B2', color: 'white', border: 'none' }}
//             >
//               Facebook
//             </Button>
//           </Col>
//           <Col xs={8}>
//             <Button 
//               style={{ width: '100%', background: '#333', color: 'white', border: 'none' }}
//             >
//               GitHub
//             </Button>
//           </Col>
//         </Row>

//         {/* Footer */}
//         <div style={{ textAlign: 'center', marginTop: '24px' }}>
//           <Text type="secondary">
//             Already have an account?{' '}
//             <Link to="/login" style={{ color: '#1890ff' }}>
//               Sign in
//             </Link>
//           </Text>
//         </div>

//         {/* Demo Note */}
//         <div style={{
//           marginTop: '20px',
//           padding: '12px',
//           background: '#f0f8ff',
//           borderRadius: '6px',
//           textAlign: 'center'
//         }}>
//           <Text type="secondary" style={{ fontSize: '12px' }}>
//             This is a demo registration form. No data will be saved.
//           </Text>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default RegisterPage;

import { ArrowLeftOutlined, UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { Card, Space, Form, Input, Button, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography;

export default function Register() {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
        <Card style={{ 
          width: '100%', 
          maxWidth: 450,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Link to="/login" style={{ float: 'left', color: '#1890ff' }}> 
                <ArrowLeftOutlined /> Back to Login 
              </Link>
              <Title level={2} style={{ color: '#1890ff', margin: '8px 0 0 0', clear: 'both' }}>
                Create Account
              </Title>
              <Text type="secondary">
                Join us today and start your journey
              </Text>
            </Space>
          </div>

          {/* Registration Form */}
          <Form
            name="register"
            layout="vertical"
            size="large"
          >
            {/* First Name and Last Name in a row */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}
                style={{ flex: 1, marginBottom: 0 }}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="First Name"
                />
              </Form.Item>
              
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name!' }]}
                style={{ flex: 1, marginBottom: 0 }}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Last Name"
                />
              </Form.Item>
            </div>

            {/* Username */}
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please choose a username!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>

            {/* Email */}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email Address"
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
                size="large"
              >
                Create Account
              </Button>
            </Form.Item>
          </Form>

          {/* Footer */}
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Text type="secondary">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#1890ff' }}>
                Sign in
              </Link>
            </Text>
          </div>
        </Card>
    </div>
  )
}
