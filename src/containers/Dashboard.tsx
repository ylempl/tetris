import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../modules/Dashboard/Dashboard';

const DashboardContainer = () => {
    useEffect(() => {
        // actions.fetchRequest();
    }, []);

    return (
        <Dashboard />
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
