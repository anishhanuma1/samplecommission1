import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontWeight: 'bold', height: '35px' }}>This is Dashboard Page</h1>
            </div>
        </div>
    );
};

export default Dashboard;