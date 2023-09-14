import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  Grid,
  Stack,
  Tabs,
  Tab,
  SvgIcon,
} from "@mui/material";
import Item from "@mui/material/Grid";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const [value, setValue] = useState("/profile/me");
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  //   const FriendsIcon = createSvgIcon(
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       class="MuiTab-iconWrapper"
  //       width="17px"
  //       height="17px"
  //       viewBox="0 0 24 24"
  //       stroke-width="1.5"
  //       stroke="currentColor"
  //       fill="none"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //     >
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  //       <circle cx="7" cy="5" r="2"></circle>
  //       <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path>
  //       <circle cx="17" cy="5" r="2"></circle>
  //       <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"></path>
  //     </svg>,
  //     "Friends"
  //   );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    console.log("Current path: ", currentPath);
    // switch (newValue) {
    //   case 0:
    //     navigate("me");
    //     break;
    //   case 1:
    //     navigate("followers");
    //     break;
    //   case 2:
    //     navigate("friends");
    //     break;
    //   case 3:
    //     navigate("gallery");
    //     break;
    //   case 4:
    //     navigate("friend-requests");
    //     break;
    //   default:
    //     navigate("me");
    //     break;
    // }
  };
  return (
    <div>
      <Card sx={{ marginBottom: "25px", padding: "15px" }} elevation={0}>
        <Typography variant="h6">Profile</Typography>
      </Card>
      <Card
        sx={{
          paddingTop: "15px",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginBottom: "25px",
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          height="300"
          image="https://www.berrydashboard.io/static/media/img-profile-bg.2b15e9314e45a1308110.png"
          alt="Paella dish"
          sx={{ borderRadius: "10px" }}
        />
        <CardActions sx={{ paddingBottom: "0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: "10px" }}
              >
                <div style={{ position: "relative", height: "30px" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    style={{
                      position: "absolute",
                      top: "-60px",
                      width: "500px",
                    }}
                  >
                    <img
                      src="https://www.berrydashboard.io/static/media/img-user.41a8c06685db060b0ec1.png"
                      alt=""
                    />
                    <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                      <Typography variant="h6">Anto Jaslin A</Typography>
                      <Typography variant="p">Software Engineer</Typography>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stack
                  direction="row"
                  justifyContent="end"
                  alignItems="center"
                  sx={{ paddingTop: "10px" }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ marginRight: "10px" }}
                  >
                    Message
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<PersonAddOutlinedIcon />}
                  >
                    Send Request
                  </Button>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="end">
                <Tabs
                  value={currentPath}
                  
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab
                    label="Profile"
                    icon={<BrokenImageOutlinedIcon />}
                    iconPosition="start"
                    value={"/profile/me"} component={Link} to={"/profile/me"}
                    disableRipple
                  />
                  <Tab
                    label="Followers"
                    icon={<PeopleAltOutlinedIcon />}
                    iconPosition="start"
                    value={"/profile/followers"} component={Link} to={"/profile/followers"}
                    disableRipple
                  />
                  <Tab
                    label="Friends"
                    icon={<Diversity3OutlinedIcon />}
                    iconPosition="start"
                    value={"/profile/friends"} component={Link} to={"/profile/friends"}
                    disableRipple
                  />
                  {/* <Tab
                    label="Gallery"
                    icon={<CollectionsOutlinedIcon />}
                    iconPosition="start"
                    value={"/profile/gallery"} component={Link} to={"/profile/gallery"}
                    disableRipple
                  /> */}
                  <Tab
                    label="Friend Requests"
                    icon={<PersonAddAltOutlinedIcon />}
                    iconPosition="start"
                    value={"/profile/friend-requests"} component={Link} to={"/profile/friend-requests"}
                    disableRipple
                  />
                </Tabs>
              </Stack>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Outlet />
    </div>
  );
}
