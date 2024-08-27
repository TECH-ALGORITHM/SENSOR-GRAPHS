import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import SensorGraph from './components/SensorGraph';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <Sidebar />
            <main className="main-content">
                <DashboardHeader />
                <div className="sensor-graphs">
                    <SensorGraph sensorType="internet" />
                    <SensorGraph sensorType="motion" />
                    <SensorGraph sensorType="latency" />
                </div>
            </main>
        </div>
    );
};

export default App;
