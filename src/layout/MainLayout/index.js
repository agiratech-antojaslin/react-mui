import { Box, useMediaQuery } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import Main from './Main';
import { SET_MENU } from "../../store/actions";
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";

export default function MainLayout() {
  const theme = useTheme();
  console.log("Theme: ", theme);
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const drawerWidth = 240;
  const dispatch = useDispatch();
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
      }),
    }),
  );

  const handleLeftDrawerToggle = () => {
    console.log("Comes to change drawer state", leftDrawerOpened);
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };
  return (
    <Box>
      <CssBaseline />
      <NavBar handleLeftDrawerToggle={handleLeftDrawerToggle} drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}></NavBar>
      
      <Main theme={theme} open={leftDrawerOpened}>
      <SideBar
        drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
        handleLeftDrawerToggle={handleLeftDrawerToggle}
      ></SideBar>
      {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
                <Outlet />
      </Main>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
      
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
    </Box>
  );
}
