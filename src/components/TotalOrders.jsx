import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const TotalOrders = ({ value = 75, minValue = 0, maxValue = 100 }) => {

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Gauge
        value={value}
        startAngle={-110}
        endAngle={110}
        sx={{
            [`& .${gaugeClasses.bar}`]: {
                className: 'custom-gauge-bar', // Use the custom class here
            },
            [`& .${gaugeClasses.valueText}`]: {
                fontSize: 28,
                transform: 'translate(0px, 0px)',
            },
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
    </div>
  );
};

export default TotalOrders;
