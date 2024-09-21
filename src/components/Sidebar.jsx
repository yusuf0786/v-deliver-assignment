import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import otherIcon from '../assets/icons/other-icon.svg'
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputBase } from '@mui/material';
import { color } from 'chart.js/helpers';
import notifiIcon from '../assets/icons/notification-icon.svg'
import chatIcon from '../assets/icons/chat-icon.svg'
import gearIcon from '../assets/icons/gear-icon.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginRight: theme.spacing(2),
marginLeft: 0,
width: '100%',
[theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
},
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
    // padding: theme.spacing(1, 1, 1, 0),
    padding: "8px 18px 8px 12px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: "#B3B3B3",
    [theme.breakpoints.up('md')]: {
    width: '20ch',
    },
},
}));

export default function Sidebar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const theme = useTheme();   
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <>
        <CssBaseline />
        <AppBar
        position="fixed"
        open={open}
        style={{"--Paper-shadow": "0px 2px 4px -1px rgba(0,0,0,0.05),0px 4px 5px 0px rgba(255,255,255,0.05),0px 1px 10px 0px rgba(255,255,255,0.05)"}}
        >
            <Toolbar sx={{backgroundColor: "#fff",}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                {
                    marginRight: 5,
                    color: "#000",
                },
                open && { display: 'none' },
                ]}
            >
                <MenuIcon />
            </IconButton>
            <Search sx={{display: {xs: "none",  lg: "inline-block"}}}>
                <SearchIconWrapper>
                    <SearchIcon sx={{color:"#272727"}} />
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{border: "1px solid #CCCCCC", borderRadius: "8px", color: "#000",}}
                    placeholder="Search anything…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: {xs: open ? "none" : "flex", lg: 'flex'}, gap: 3, padding: "1rem 0", alignItems: "stretch",}}>
                <IconButton size="large" aria-label="show 21 new notifications" color="#000" sx={{backgroundColor:"#EAEBFF", borderRadius: "13px",}}>
                <Badge badgeContent={21} color="secondary">
                    {/* <MailIcon /> */}
                    <img src={notifiIcon} alt="notification icon" />
                </Badge>
                </IconButton>
                <IconButton size="large" aria-label="show 53 new chats" color="#000" sx={{backgroundColor:"#EAEBFF", borderRadius: "13px",}}>
                <Badge badgeContent={53} color="secondary">
                    {/* <MailIcon /> */}
                    <img src={chatIcon} alt="chat icon" />
                </Badge>
                </IconButton>
                <IconButton
                sx={{backgroundColor:"#EAEBFF", borderRadius: "13px",}}
                size="large"
                aria-label="show 19 new alerts"
                color="#000"
                >
                <Badge badgeContent={17} color="info">
                    {/* <NotificationsIcon /> */}
                    <img src={gearIcon} alt="gear icon" />
                </Badge>
                </IconButton>
                <Divider aria-hidden="true" orientation="vertical" sx={{height: "inherit",}} />
                <Box 
                onClick={handleProfileMenuOpen}
                sx={{cursor: "pointer",}}
                >
                  <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="#000"
                  sx={{mr: 0.75}}
                  >
                    <AccountCircle />
                  </IconButton>
                  <span style={{color: "#000",}}>Hi, Saikumar</span>
                  <ArrowDropDownIcon sx={{color: "#000", verticalAlign:"middle", }}/>
                </Box>
            </Box>
            </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{pt:10}}>
                {[
                    {listItemText: "Home", listItemIcon: <HomeIcon />},
                    {listItemText: "Other", listItemIcon: <img src={otherIcon}/>},
                    {listItemText: "Messages", listItemIcon: <ChatIcon />},
                ].map((item, index) => (
                    <ListItem key={item.listItemText} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={[
                        {minHeight: 48,px: 2.5,},
                        open ? {justifyContent: 'initial',} : {justifyContent: 'center',},
                        ]}
                    >
                        <ListItemIcon
                        sx={[
                            {minWidth: 0,justifyContent: 'center',},
                            open ? {mr: 3,} : {mr: 'auto',},
                        ]}
                        >
                            {item.listItemIcon}
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText
                        primary={item.listItemText}
                        sx={[open ? {opacity: 1,}: {opacity: 0,},]}
                        />
                    </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        </>
    )
}