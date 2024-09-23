import { Avatar, Box, Chip, Divider, Paper, Typography } from '@mui/material';
import * as React from 'react';

export function PendingTickets() {

    const pendingTicketsData = [
        {},
        {},
        {},
    ]

    // Function to generate a unique ID based on current time and random number
    const generateUniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    };

    return (
        <>
        <Box sx={{display: "flex", flexWrap:"wrap", alignItems: "center", justifyContent:"space-between", mb:3}}>
            <Typography variant='h6'>
                Pending Tickets (03)
            </Typography>
            <Chip label="View All" onClick={() => console.log("clicked!")} sx={{color:"#4318FF"}} />
        </Box>
        {pendingTicketsData.map((d, i) => (
            <Paper key={generateUniqueId()} elevation={3} sx={{p:2, mb: pendingTicketsData.length-1 === i ? 0 : 2}}>
                <Box>
                    <Box sx={{display: "flex"}}>
                        <Avatar alt="Remy Sharp" src={""} sx={{mr:2}} />
                        <Box>
                            <Typography variant="h6" color='#2B3674' fontSize={"14px"} sx={{lineHeight: "normal"}}>
                                019273645
                            </Typography>
                            <Typography variant="caption" color='#252762' fontSize={"10px"} sx={{lineHeight: "normal", whiteSpace:"nowrap"}}>
                                Name of the Raiser
                            </Typography>
                        </Box>
                        <Box ml={"auto"}>
                            <Chip variant="outlined" color="error" label="Technical Error" size="small" sx={{mr:1,fontSize: "10px"}} />
                            <Chip variant="outlined" color="info" label="Healthcare" size="small" sx={{fontSize: "10px", backgroundColor:"#4318FF1A", color:"#000"}} />
                        </Box>
                    </Box>
                    <Divider aria-hidden="true" orientation="horizontal" sx={{margin: "18px 0"}} />
                    <Box mb={1}>
                        <Typography variant="h6" color='#2B3674' sx={{lineHeight: "normal", fontSize:"0.75rem",mb:1}}>
                            I am facing Technical Issue during the Signup process
                        </Typography>
                        <Typography variant="caption" color='#2B3674' sx={{lineHeight: "18px",display: "block"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                    </Box>
                    <Box>
                        <Chip variant="outlined" color="success" label="Status: Acknowledged" size="small" sx={{fontSize: "10px", backgroundColor: "#FF847C1A", px:1}} />
                    </Box>
                </Box>
            </Paper>
        ))}
        </>
    )
}