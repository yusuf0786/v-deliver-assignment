import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography, Paper, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import { PendingTickets } from './components/PendingTickets';
import { ThemeProvider } from '@emotion/react';
import theme from './assets/theme/theme';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { DetailsCards } from './components/DetailsCards';
import SectorPerformance from './components/SectorPerformance';
import TotalOrders from './components/TotalOrders';

import statsBarIcon from './assets/icons/stats-bar-Icon.svg'
import userIcon from './assets/icons/user-Icon.svg'
import cartIcon from './assets/icons/cart-Icon.svg'
import graphLine1 from './assets/icons/graph-line1.svg'
import graphLine2 from './assets/icons/graph-line2.svg'
import graphLine3 from './assets/icons/graph-line3.svg'
import whatsappIcon from './assets/icons/whatsapp-icon.svg'

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FBBC05',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

function App() {

  const [year, setYear] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const detailsCardsData = [
    {icon1: statsBarIcon, title: "Total Sales", value: "Rs. XXX.XX", icon2: graphLine1, score: "+5%", scoreColor:"#FBBC05", scoreValue: "more", scoreCaption: "from last week"},
    {icon1: userIcon, title: "Total Customers", value: "XXXX", icon2: graphLine2, score: "-10%", scoreColor: "#EE5D50", scoreValue: "less", scoreCaption: "from last week"},
    {icon1: cartIcon, title: "Total Orders", value: "XXXX", icon2: graphLine3, score: "+10%", scoreColor: "#808080", scoreValue: "more", scoreCaption: "from last week"},
  ]

  // Function to generate a unique ID based on current time and random number
  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#EAEBFF" }}>
        <DrawerHeader sx={{mb: 2}} />
          <Box sx={{display:'flex', flexDirection: {xs: "column", xl: "row"}, justifyContent: {xs: '', xl: 'space-between'}, mb:2}}>
            <Box sx={{mb: {xs: 2, xl: 0}}}>
              <FormControl sx={{ width: {xs: "100%", md: "auto"}, minWidth: 158, padding:0, mr: 1, mb: {xs: 1, md:0} }}>
                <InputLabel sx={{top: "-6px",}} id="demo-simple-select-label"><CalendarMonthIcon sx={{verticalAlign:"-6px", mr: 0.5}} /> This Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Status"
                  onChange={handleYearChange}
                >
                  <MenuItem value={"Option 1"}>Option 1</MenuItem>
                  <MenuItem value={"Option 2"}>Option 2</MenuItem>
                  <MenuItem value={"Option 3"}>Option 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: {xs: "100%", md: "auto"}, minWidth: 100, padding:0, mr: 1, mb: {xs: 1, md:0} }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  <MenuItem value={"Option 1"}>Option 1</MenuItem>
                  <MenuItem value={"Option 2"}>Option 2</MenuItem>
                  <MenuItem value={"Option 3"}>Option 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: {xs: "100%", md: "auto"}, minWidth: 120, padding:0 }}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="Location"
                  onChange={handleLocationChange}
                >
                  <MenuItem value={"Option 1"}>Option 1</MenuItem>
                  <MenuItem value={"Option 2"}>Option 2</MenuItem>
                  <MenuItem value={"Option 3"}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{width: {xs: "100%", md: "fit-content"}, ml: "auto"}}>
              <Stack sx={{flexDirection: {xs: "columns", md: "row"}}}>
                <Button size='small' variant="contained" sx={{width: {xs: "100%", md: "auto"}, marginTop: "0px !important", mr: 1, mb: {xs:1,md:0}}} >Create Order</Button>
                <Button size='small' variant="contained" sx={{width: {xs: "100%", md: "auto"}, marginTop: "0px !important", mr: 1, mb: {xs:1,md:0}}} >+ Add Customer</Button>
                <Button size='small' variant="contained" sx={{width: {xs: "100%", md: "auto"}, marginTop: "0px !important",}} >+ Add Service Provider</Button>
              </Stack>
            </Box>
          </Box>

          {/* Main content starts */}
          <Grid container spacing={2}>
            <Grid item xs={12} xl={8}>
              <Grid container spacing={2} marginBottom={2}>
                {detailsCardsData.map((d,i) => (
                  <Grid item xs={12} lg={4}>
                    <DetailsCards key={generateUniqueId()} icon1={d.icon1} title={d.title} value={d.value} icon2={d.icon2} score={d.score} scoreColor={d.scoreColor} scoreValue={d.scoreValue} scoreCaption={d.scoreCaption} />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={12} lg={4}>
                    <Paper elevation={0} sx={{p:2, height:"100%"}}>
                      <TotalOrders />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Paper elevation={0} sx={{p:2, height:"100%"}}>
                      <SectorPerformance/>
                    </Paper>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} xl={4}>
              <Paper elevation={0} sx={{p:2, height:"100%"}}>
                <Box sx={{display: "flex", alignItems: "center", mb:3}}>
                    <IconButton size="large" sx={{backgroundColor:"#EAEBFF", borderRadius: "13px", mr:2}}>
                        <img src={whatsappIcon} alt="whatsapp icon" />
                    </IconButton>
                    <Box>
                        <Typography variant="caption" color="#808080" gutterBottom>
                            Total Tickets
                        </Typography>
                        <Typography variant="h4" fontWeight={500} >
                            XXX
                        </Typography>
                    </Box>
                    <Button size='small' variant="contained" sx={{ height: "auto", ml:"auto"}} >Raise a Ticket</Button>
                </Box>
                <Stack spacing={2} sx={{ flexGrow: 1, mb:3 }}>
                  <BorderLinearProgress variant="determinate" value={65} />
                </Stack>
                <PendingTickets />
              </Paper>
            </Grid>
          </Grid>

        </Box>
      </Box>
    </ThemeProvider>
  )
  // https://www.figma.com/design/eI1joVAvv735JMuwlK7mIZ/React-Js-Assignment?node-id=0-1&node-type=canvas&t=t0Jd2Q5T0HjruUji-0
}

export default App;
