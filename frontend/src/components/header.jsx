import React, { useState } from 'react';
import { Typography, Layout } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

export default function HeaderBar() {
  return (
    <Header>
      <Title level={3} style={{ margin: '14px', color: '#1890ff' }}>
        Money Meter
      </Title>
    </Header>
  );
}