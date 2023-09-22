import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Popover } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import FormatLineSpacingRoundedIcon from '@mui/icons-material/FormatLineSpacingRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { useNavigate } from 'react-router-dom';

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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar({handleLeftDrawerToggle, drawerOpen}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    console.log("Profile ele")
    setAnchorElProfile(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElProfile(null);
  };

  const open = Boolean(anchorElProfile);
  const profileId = open ? 'simple-popover' : undefined;

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, marginLeft: drawerOpen ? '240px' : '0px', }}>
      <AppBar position="static" color='background' elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, fontSize: '1.5rem' }}
            onClick={handleLeftDrawerToggle}
          >
            <MenuIcon sx={{fontSize: '1.2rem', color: '#9e9e9e'}} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{fontSize: '1.2rem', color: '#9e9e9e'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search projects"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Button aria-describedby={profileId} variant="text" onClick={handleClick} sx={{textTransform: 'capitalize'}} disableRipple>
            <img style={{ borderRadius: '50%', marginRight: '10px' }} height={30} width={30} src="https://demo.bootstrapdash.com/demo/purple-react-free/template/demo_1/preview/static/media/face1.42d41e61.jpg" alt="" />
            <Typography color='black'>David Greymaxx</Typography>
            <KeyboardArrowDownIcon color='black'></KeyboardArrowDownIcon>
          </Button>
            <Popover
              id={profileId}
              open={open}
              anchorEl={anchorElProfile}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{'& .MuiPopover-paper': {boxShadow: '0 3px 21px 0 rgba(0,0,0,.2)'}}}
            >
            <List>
              <ListItem key='Profile' onClick={() => navigate('profile/me')}>
                <ListItemButton disableRipple>
                  <ListItemIcon>
                    <PersonOutlineSharpIcon></PersonOutlineSharpIcon>
                  </ListItemIcon>
                  <ListItemText primary='Profile' />
                </ListItemButton>
              </ListItem>
              <ListItem key='Logout'>
                <ListItemButton disableRipple>
                  <ListItemIcon>
                    <LogoutSharpIcon></LogoutSharpIcon>
                  </ListItemIcon>
                  <ListItemText primary='Logout' />
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{fontSize: '1.2rem', color: '#9e9e9e'}}>
              {/* <Badge badgeContent={4} color="error"> */}
                <MarkunreadOutlinedIcon></MarkunreadOutlinedIcon>
              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{fontSize: '1.2rem', color: '#9e9e9e'}}
            >
              {/* <Badge badgeContent={17} color="error"> */}
                <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
              {/* </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{fontSize: '1.2rem', color: '#9e9e9e'}}
            >
              <PowerSettingsNewRoundedIcon></PowerSettingsNewRoundedIcon>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{fontSize: '1.2rem', color: '#9e9e9e'}}
            >
              <FormatLineSpacingRoundedIcon></FormatLineSpacingRoundedIcon>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
