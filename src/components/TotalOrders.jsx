import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Box, Typography } from '@mui/material';

const TotalOrders = ({ value = 75, minValue = 0, maxValue = 100 }) => {
  
  return (
    <>
      <Typography variant='h5' fontWeight={500} pl={2} pt={2} mb={-3}>
        Total Orders
      </Typography>
    <div style={{ height: '300px', width: '230px',position: "relative", margin: "0 auto" }}>
      <Gauge
        value={value}
        min={minValue}
        max={maxValue}
        startAngle={-135}
        endAngle={135}
        cornerRadius={"50%"}
        cx={"50%"}
        cy={"50%"}
        // disableAxisListener={false}
        innerRadius={"85%"}
        sx={{
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "#FBBC05",
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill:"#4A3AFF",
          },
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 18,
            fontWeight: 500,
            fill: '#333', // Color for the value label
            transform: 'translate(0px, 0px)',
          },
        }}
        // text={({ value, valueMax }) => `<p>Total Order</p><h3>XX,XXX</h3>`}
        text={({ value, valueMax }) => `XX,XXX`}
      />
      {/* Render the text inside the gauge using JSX */}
      <div style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        <Typography variant='caption' color='#615E83'>
          Total Order
        </Typography>
      </div>
    </div>
    <Box sx={{display:"flex", px:2, mb:1, mt:-3.5}}>
      <Box sx={{width: "16px", height:"3px", backgroundColor:"#4A3AFF", borderRadius: "50px", mr:2,mt:1.4}}></Box>
      <Box>
        <Typography variant='caption' color='#615E83'>
          Active Orders
        </Typography>
        <Typography variant='h6' fontWeight={500}>
          X,XXX,XXX
        </Typography>
      </Box>
    </Box>
    <Box sx={{display:"flex", px:2, mb:1}}>
      <Box sx={{width: "16px", height:"3px", backgroundColor:"#FBBC05", borderRadius: "50px", mr:2,mt:1.4}}></Box>
      <Box>
        <Typography variant='caption' color='#615E83'>
          Completed Orders
        </Typography>
        <Typography variant='h6' fontWeight={500}>
          X,XXX,XXX
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default TotalOrders;
