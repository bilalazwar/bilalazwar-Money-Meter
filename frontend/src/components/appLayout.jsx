import React, { useState } from 'react';
import {
  Layout,
  Menu,
  Button,
  Typography,
  Avatar,
  Divider,
  Badge,
  Card,
  Row,
  Col,
  Statistic,
  Progress,
  Table,
  Tag,
  DatePicker,
  Space
} from 'antd';
import {
  DashboardOutlined,
  PieChartOutlined,
  TransactionOutlined,
  CreditCardOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BellOutlined,
  WalletOutlined,
  FileTextOutlined,
  TagOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  PlusOutlined,
  ReloadOutlined,
  FilterOutlined
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import HeaderBar from './header';

const { Header, Sider, Content, Footer } = Layout;  // or <Layout.Header>, we are destructuring for convenience
const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

// Sample data for the dashboard
const financialData = {
  totalBalance: 4525.50,
  totalIncome: 6250.00,
  totalExpenses: 1724.50,
  monthlyBudget: 2000.00,
  budgetUsed: 86.2,
};

const recentTransactions = [
  {
    id: '1',
    name: 'Grocery Shopping',
    amount: -86.75,
    category: 'Food',
    date: '2023-06-15',
    icon: '🍕',
    color: '#ff6384'
  },
  {
    id: '2',
    name: 'Salary Deposit',
    amount: 2500.00,
    category: 'Income',
    date: '2023-06-10',
    icon: '💰',
    color: '#36a2eb'
  },
  {
    id: '3',
    name: 'Electricity Bill',
    amount: -120.30,
    category: 'Housing',
    date: '2023-06-05',
    icon: '🏠',
    color: '#4bc0c0'
  },
  {
    id: '4',
    name: 'Gas Refill',
    amount: -45.00,
    category: 'Transport',
    date: '2023-06-03',
    icon: '🚗',
    color: '#ffcd56'
  },
  {
    id: '5',
    name: 'Pharmacy',
    amount: -32.45,
    category: 'Healthcare',
    date: '2023-06-01',
    icon: '💊',
    color: '#9966ff'
  },
];

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');  // selects which menu item is active
  const [dateRange, setDateRange] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '2',
      icon: <TransactionOutlined />,
      label: 'Transactions',
    },
    {
      key: '3',
      icon: <PieChartOutlined />,
      label: 'Analytics',
    },
    {
      key: '4',
      icon: <CreditCardOutlined />,
      label: 'Budgets',
    },
    {
      key: '5',
      icon: <BarChartOutlined />,
      label: 'Reports',
    },
    {
      key: '6',
      icon: <WalletOutlined />,
      label: 'Accounts',
    },
    {
      key: '7',
      icon: <TagOutlined />,
      label: 'Categories',
    },
    {
      key: '8',
      icon: <CalendarOutlined />,
      label: 'Calendar',
    },
    {
      key: '9',
      icon: <FileTextOutlined />,
      label: 'Bills & Payments',
    },
    {
      key: '10',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];
// render function on Ant Table columns receives two parameters, the value of the cell (here the category name) and the entire record (row data)
// avatar is Ant design component that makes a circular icon with text or image inside
  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar style={{ backgroundColor: record.color, marginRight: 8 }}>
            {record.icon}
          </Avatar>
          {category}
        </div>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: amount => (                             // Here render function with only the amount parameter, originally it comes with 3 render: (value, record, index) => JSX
        <Tag color={amount < 0 ? 'red' : 'green'}>
          ${Math.abs(amount).toFixed(2)}
        </Tag>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        // trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
          background: '#fff',
          position: 'fixed',  // doesnt move when i scroll
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
          height: '100vh',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column',height: '100%',padding: collapsed ? '16px 0' : '16px'}}>
          {/* Logo and App Name */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',padding: collapsed ? 0 : '0 12px', marginBottom: 16}}>
            <Button
              type="text"
              icon={<MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 32, height: 32 }}
            />
          </div>

          <Divider style={{ margin: '12px 0' }} />

          {/* User Profile */}
          {!collapsed && (
            <div style={{ 
              padding: '12px', 
              background: '#f9f9f9', 
              borderRadius: 8, 
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Badge dot color="green" offset={[-4, 32]}>
                <Avatar size={40} icon={<UserOutlined />} />
              </Badge>
              <div style={{ marginLeft: 12, flex: 1 }}>
                <Text strong style={{ display: 'block' }}>Bilal Azwar</Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>Premium Account</Text>
              </div>
            </div>
          )}

          {/* Main Navigation */}
          <Menu mode="vertical" selectedKeys={[selectedKey]} items={menuItems} onClick={handleMenuClick} style={{ border: 'none', flex: 1 }}/>

          {/* Notifications */}
          {!collapsed && (
            <>
              <Divider style={{ margin: '12px 0' }} />
              <div style={{ padding: '0 12px', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BellOutlined style={{ marginRight: 8 }} />
                    <Text>Notifications</Text>
                  </div>
                  <Badge count={5} size="small" />
                </div>
              </div>
            </>
          )}

          {/* Logout */}
          <div style={{ padding: collapsed ? '25px' : '0 12px', marginBottom: 16 }}>
            <Link to={'/login'}>
              <Button 
                type="text" 
                danger 
                icon={<LogoutOutlined />} 
                block={!collapsed}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: collapsed ? 'center' : 'flex-start' 
                }}
              >
                {!collapsed && 'Logout'}
              </Button>
            </Link>
            
          </div>
        </div>
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 50 : 180, transition: 'margin-left 0.2s', minHeight: '100vh' }}>

        <Content style={{ marginLeft: '15px'}}>
              <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
}



{/* <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}>
        <Header style={{ 
          padding: '0 24px', 
          background: '#fff', 
          boxShadow: '0 1px 4px rgba(0,21,41,.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            Expense Dashboard
          </Title>
          <Button type="primary" icon={<PlusOutlined />}>
            Add Expense
          </Button>
        </Header>
        
        <Content style={{ padding: '24px', background: '#f0f2f5' }}> */}
          {/* Filters and Controls */}
          {/* <Card style={{ marginBottom: 24 }} bodyStyle={{ padding: '16px 24px' }}>
            <Row gutter={16} align="middle">
              <Col flex="auto">
                <Space>
                  <FilterOutlined />
                  <span>Filter by date:</span>
                  <RangePicker onChange={setDateRange} />
                </Space>
              </Col>
              <Col>
                <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
                  Refresh
                </Button>
              </Col>
            </Row>
          </Card> */}

          {/* Financial Overview Cards */}
          // <Row gutter={16} style={{ marginBottom: 24 }}>
          //   <Col xs={24} sm={12} lg={6}>
          //     <Card bordered={false}>
          //       <Statistic
          //         title="Total Balance"
          //         value={financialData.totalBalance}
          //         precision={2}
          //         valueStyle={{ color: '#3f8600' }}
          //         prefix={<DollarCircleOutlined />}
          //       />
          //     </Card>
          //   </Col>
          //   <Col xs={24} sm={12} lg={6}>
          //     <Card bordered={false}>
          //       <Statistic
          //         title="Total Income"
          //         value={financialData.totalIncome}
          //         precision={2}
          //         valueStyle={{ color: '#3f8600' }}
          //         prefix={<ArrowUpOutlined />}
          //       />
          //     </Card>
          //   </Col>
          //   <Col xs={24} sm={12} lg={6}>
          //     <Card bordered={false}>
          //       <Statistic
          //         title="Total Expenses"
          //         value={financialData.totalExpenses}
          //         precision={2}
          //         valueStyle={{ color: '#cf1322' }}
          //         prefix={<ArrowDownOutlined />}
          //       />
          //     </Card>
          //   </Col>
          //   <Col xs={24} sm={12} lg={6}>
          //     <Card bordered={false}>
          //       <div style={{ marginBottom: 8, fontSize: 14 }}>Monthly Budget Usage</div>
          //       <Progress
          //         percent={financialData.budgetUsed}
          //         status="active"
          //         strokeColor={{
          //           '0%': '#108ee9',
          //           '100%': '#87d068',
          //         }}
          //       />
          //       <div style={{ marginTop: 8, fontSize: 12, color: '#999' }}>
          //         ${financialData.totalExpenses} of ${financialData.monthlyBudget}
          //       </div>
          //     </Card>
          //   </Col>
          // </Row>

          {/* Recent Transactions */}
      //     <Card title="Recent Transactions" bordered={false}>
      //       <Table
      //         dataSource={recentTransactions}
      //         columns={columns}
      //         pagination={{ pageSize: 5 }}
      //         size="middle"
      //         loading={loading}
      //       />
      //     </Card>
      //   </Content>

      //   <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
      //     © {new Date().getFullYear()} Expense Tracker - All rights reserved
      //   </Footer>
      // </Layout>