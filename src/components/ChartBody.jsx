import React from 'react';
import DepositCount from './chartTypes/DepositCount';
import LoanCount from './chartTypes/LoanCount';

const ChartBody = () => {
    return (
        <div className='my-6 border-2 border-blue-600'>
            <DepositCount></DepositCount>
            <LoanCount></LoanCount>
        </div>
    );
};

export default ChartBody;