import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Statistic,
  Progress,
  Table,
  Tag,
  Avatar,
  List,
  DatePicker,
  Button,
  Typography,
  Space,
  Divider,
  Layout
} from 'antd';
import {
  DollarCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  PlusOutlined,
  ReloadOutlined,
  FilterOutlined
} from '@ant-design/icons';

import HeaderBar from '../components/header';

const { Header, Content } = Layout;
const { RangePicker } = DatePicker;
const { Title } = Typography;

// Sample data for the dashboard
const financialData = {
  totalBalance: 4525.50,
  totalIncome: 6250.00,
  totalExpenses: 1724.50,
  monthlyBudget: 2000.00,
  budgetUsed: 86.2,
};

const spendingData = [
  { month: 'Jan', expenses: 1200, income: 3000 },
  { month: 'Feb', expenses: 1900, income: 4500 },
  { month: 'Mar', expenses: 1500, income: 4000 },
  { month: 'Apr', expenses: 2100, income: 5000 },
  { month: 'May', expenses: 1800, income: 4800 },
  { month: 'Jun', expenses: 1724, income: 6250 },
];

const categoryData = [
  { name: 'Food', amount: 525, percent: 30, color: '#ff6384' },
  { name: 'Shopping', amount: 420, percent: 25, color: '#36a2eb' },
  { name: 'Transport', amount: 310, percent: 18, color: '#ffcd56' },
  { name: 'Housing', amount: 285, percent: 16, color: '#4bc0c0' },
  { name: 'Healthcare', amount: 184, percent: 11, color: '#9966ff' },
];

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

const ExpenseDashboard = () => {
  const [dateRange, setDateRange] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

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
      render: amount => (
        <Tag color={amount < 0 ? 'red' : 'green'}>
          ${Math.abs(amount).toFixed(2)}
        </Tag>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <HeaderBar />
      
      <Content style={{ padding: '24px' }}>
        {/* Filters and Controls */}
        <Card style={{ marginBottom: 24 }} bodyStyle={{ padding: '16px 24px' }}>
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
        </Card>

        {/* Financial Overview Cards */}
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false}>
              <Statistic
                title="Total Balance"
                value={financialData.totalBalance}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DollarCircleOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false}>
              <Statistic
                title="Total Income"
                value={financialData.totalIncome}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false}>
              <Statistic
                title="Total Expenses"
                value={financialData.totalExpenses}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card bordered={false}>
              <div style={{ marginBottom: 8, fontSize: 14 }}>Monthly Budget Usage</div>
              <Progress
                percent={financialData.budgetUsed}
                status="active"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
              />
              <div style={{ marginTop: 8, fontSize: 12, color: '#999' }}>
                ${financialData.totalExpenses} of ${financialData.monthlyBudget}
              </div>
            </Card>
          </Col>
        </Row>

        {/* Charts and Visualizations */}
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col xs={24} lg={12}>
            <Card title="Monthly Expenses" bordered={false}>
              <div style={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                {spendingData.map((item, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span>{item.month}</span>
                      <span>${item.expenses} / ${item.income}</span>
                    </div>
                    <Progress 
                      percent={Math.round((item.expenses / item.income) * 100)} 
                      strokeColor="#ff4d4f"
                      showInfo={false}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Spending by Category" bordered={false}>
              <div style={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                {categoryData.map((category, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span>{category.name}</span>
                      <span>${category.amount} ({category.percent}%)</span>
                    </div>
                    <Progress 
                      percent={category.percent} 
                      strokeColor={category.color}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>

        {/* Recent Transactions and Insights */}
        <Row gutter={16}>
          <Col xs={24} lg={16}>
            <Card title="Recent Transactions" bordered={false}>
              <Table
                dataSource={recentTransactions}
                columns={columns}
                pagination={{ pageSize: 5 }}
                size="middle"
                loading={loading}
              />
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Financial Insights" bordered={false}>
              <div style={{ padding: '8px 0' }}>
                <div style={{ marginBottom: 16 }}>
                  <Title level={5} style={{ marginBottom: 4 }}>Spending Trends</Title>
                  <p style={{ margin: 0, color: '#666' }}>
                    Your expenses decreased by <span style={{ color: '#3f8600' }}>12%</span> compared to last month.
                  </p>
                </div>
                <Divider style={{ margin: '12px 0' }} />
                <div style={{ marginBottom: 16 }}>
                  <Title level={5} style={{ marginBottom: 4 }}>Budget Status</Title>
                  <p style={{ margin: 0, color: '#666' }}>
                    You've used <span style={{ color: '#cf1322' }}>{financialData.budgetUsed}%</span> of your monthly budget.
                  </p>
                </div>
                <Divider style={{ margin: '12px 0' }} />
                <div>
                  <Title level={5} style={{ marginBottom: 4 }}>Top Spending Category</Title>
                  <p style={{ margin: 0, color: '#666' }}>
                    <span style={{ color: '#ff6384' }}>Food</span> is your largest expense category this month.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ExpenseDashboard;