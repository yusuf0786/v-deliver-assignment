import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from '@emotion/react';
import theme from './assets/theme/theme';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader sx={{mb: 2}} />
          <Box sx={{display:'flex', flexDirection: {xs: "column", xl: "row"}, justifyContent: {xs: '', xl: 'space-between'}}}>
            <Box sx={{mb: {xs: 2, xl: 0}}}>
              <FormControl sx={{ minWidth: 158, padding:0, mr: 1 }}>
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
              <FormControl sx={{ minWidth: 100, padding:0, mr: 1 }}>
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
              <FormControl sx={{ minWidth: 120, padding:0, }}>
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
        </Box>
      </Box>
    </ThemeProvider>
  )
  // https://www.figma.com/design/eI1joVAvv735JMuwlK7mIZ/React-Js-Assignment?node-id=0-1&node-type=canvas&t=t0Jd2Q5T0HjruUji-0
}

export default App;
