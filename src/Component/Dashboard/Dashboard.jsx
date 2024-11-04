import React, { useContext } from 'react';
import { cardContext } from '../../Layout/LayOut';

const Dashboard = () => {
    const [card,setCard]=useContext(cardContext)
    console.log(card);
    
    return (
        <div>
            <h1>Dash broad</h1>
        </div>
    );
};

export default Dashboard;