import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StatTile from '../components/StatTile';
import DataCard from '../components/DataCard';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Topbar />
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
          <StatTile title="Total Users" value={1200} />
          <StatTile title="Total Orders" value={540} />
          <StatTile title="Total Vendors" value={75} />
        </div>
        <div style={{ padding: '20px' }}>
          <DataCard title="Recent Orders" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
