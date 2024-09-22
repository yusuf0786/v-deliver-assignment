// BarChart.js
import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SectorPerformance = () => {
    const data = useMemo(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Create gradients for specific bars
        const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient1.addColorStop(0, '#48CFAF');  // Start color (top)
        gradient1.addColorStop(1, '#41C1C9');  // End color (bottom)

        const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient2.addColorStop(0, '#FFB5B1');  // Start color (top)
        gradient2.addColorStop(1, '#CD7ED9');  // End color (bottom)

        const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient3.addColorStop(0, '#FFDC7E');  // Start color (top)
        gradient3.addColorStop(0.5, '#FFCF50');  // Start color (top)
        gradient3.addColorStop(1, '#281508');  // End color (bottom)

        return {
            labels: [
                'Active Service Provider', 
                'Service Provider Retention Rate', 
                'New Service Provider', 
                'Service Completion Rate', 
                'Total Service Provider', 
                'Average Rating'
            ],
            datasets: [
                {
                    data: [45, 95, 80, 90, 20, 75],
                    backgroundColor: [
                        '#165DC9',
                        '#FF847C',
                        gradient1,
                        gradient2,
                        gradient3,
                        '#722391',
                    ],
                    borderColor: 'transparent',
                    borderWidth: 1,
                    borderRadius: 6,
                    barThickness: 28,  // Bar width remains fixed
                    categoryPercentage: 0.8,  // Reduces space between the bars (closer to 1 means smaller space)
                    barPercentage: 1,  // Further reduces space between bars
                },
            ],
        };
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Disable the legend
            },
            title: {
                display: true,
                text: 'Sector Performance',
                align: 'start', // Left-align the title
                font: {
                    size: 20, // Customize title font size
                    weight: 'bold', // Make the title bold
                },
                color: '#000', // Customize title color
                padding: {
                    bottom: 28,  // Add bottom space to the title
                },
            },
        },
        scales: {
            x: {
                display: false, // Remove the labels below each bar (x-axis labels)
                drawBorder: false, // Remove the line for the y-axis
                grid: {
                    display: false, // Remove x-axis grid lines
                    color: '#000',
                },
                
            },
            y: {
                beginAtZero: true,
                drawBorder: false, // Remove the border (y-axis line)
                grid: {
                    display: true, // Display the horizontal (y-axis) grid lines
                    borderDash: [5, 50], // Make the grid lines dashed
                    color: '#ccc', // Lighten the grid color
                },  
            },
        },
    };

    return (
        <Box>
            <Bar data={data} options={options} />
            <Box display="flex" flexWrap="wrap" mt={2}>
                <Box display="flex" alignItems="center" mr={2} mb={1}>
                    <Box sx={{width: "8px", height: "8px", borderRadius:"100%", backgroundColor: "#FF5D8D", mr:1}}></Box>
                    <Typography variant='caption' sx={{color: "#808080", fontWeight: 300, lineHeight: "normal"}}>
                        Active Service Provider
                    </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mr={2} mb={1}>
                    <Box sx={{width: "8px", height: "8px", borderRadius:"100%", backgroundColor: "#72BBFF", mr:1}}></Box>
                    <Typography variant='caption' sx={{color: "#808080", fontWeight: 300, lineHeight: "normal"}}>
                        Service Provider Retension Rate
                    </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mr={2} mb={1}>
                    <Box sx={{width: "8px", height: "8px", borderRadius:"100%", backgroundColor: "#11BEA9", mr:1}}></Box>
                    <Typography variant='caption' sx={{color: "#808080", fontWeight: 300, lineHeight: "normal"}}>
                        New Service Provider 
                    </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mr={2} mb={1}>
                    <Box sx={{width: "8px", height: "8px", borderRadius:"100%", backgroundColor: "#FF834D", mr:1}}></Box>
                    <Typography variant='caption' sx={{color: "#808080", fontWeight: 300, lineHeight: "normal"}}>
                        Service Completion Rate 
                    </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mr={2} mb={1}>
                    <Box sx={{width: "8px", height: "8px", borderRadius:"100%", backgroundColor: "#FA18FF", mr:1}}></Box>
                    <Typography variant='caption' sx={{color: "#808080", fontWeight: 300, lineHeight: "normal"}}>
                        Total Service Provider 
                    </Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mb={1}>
                    <Box sx={{width: "8px", height: "8px", borderRadius:"100%", backgroundColor: "#FBBC05", mr:1}}></Box>
                    <Typography variant='caption' sx={{color: "#808080", fontWeight: 300, lineHeight: "normal"}}>
                        Average Rating
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default SectorPerformance;
