import React from 'react';
import Sidebar from '../components/Sidebar';

const Main = () => {
    return (
        <div>
        <Sidebar />
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold', height: '35px' }}>This is Commission Tool</h1>
        </div>
    </div>
    );
};

export default Main;