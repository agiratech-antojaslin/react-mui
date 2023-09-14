import {
  Box,
  Card,
  CardActions,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Grid,
  Avatar,
  CardContent,
  Button
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Item from "@mui/material/Grid";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function ProfileFriendsCard() {
  return (
    <Box>
      <Card>
        <CardActions sx={{display: 'block', margin: '10px'}}>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6">Friends</Typography>
            <TextField
              id="search"
              type="search"
              label="Search Friends"
              value=""
              size="small"
              sx={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          
          
        </CardActions>
        <Divider></Divider>
        <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item>
                  <Card sx={{backgroundColor: 'rgb(248, 250, 252)', border: '1px solid rgb(238, 242, 246)', padding: '10px 20px'}}>
                    <Stack direction='row' justifyContent="space-between">
                      <Box sx={{display: 'flex'}}>
                      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                      <Box sx={{marginLeft: '10px'}}>
                        <Typography variant="title" sx={{marginLeft: '5px'}}>Barney</Typography>
                        <Stack direction='row'>
                          <PinDropOutlinedIcon fontSize="small" sx={{color: "rgb(105, 117, 134)"}}/>
                          <Typography variant="caption" color="rgb(105, 117, 134)">Handburgh</Typography>
                        </Stack>
                      </Box>
                      </Box>
                      <MoreHorizOutlinedIcon />
                    </Stack>
                    <CardActions sx={{paddingLeft: "0px", paddingRight: '0px'}}>
                      <Button variant="contained" sx={{width: '100%', margin: '10px 0 0 0'}}>Message</Button>
                    </CardActions>
                  </Card>
                </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item>
                  <Card sx={{backgroundColor: 'rgb(248, 250, 252)', border: '1px solid rgb(238, 242, 246)', padding: '10px 20px'}}>
                    <Stack direction='row' justifyContent="space-between">
                      <Box sx={{display: 'flex'}}>
                      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                      <Box sx={{marginLeft: '10px'}}>
                        <Typography variant="title" sx={{marginLeft: '5px'}}>Barney</Typography>
                        <Stack direction='row'>
                          <PinDropOutlinedIcon fontSize="small" sx={{color: "rgb(105, 117, 134)"}}/>
                          <Typography variant="caption" color="rgb(105, 117, 134)">Handburgh</Typography>
                        </Stack>
                      </Box>
                      </Box>
                      <MoreHorizOutlinedIcon />
                    </Stack>
                    <CardActions sx={{paddingLeft: "0px", paddingRight: '0px'}}>
                    <Button variant="contained" sx={{width: '100%', margin: '10px 0 0 0'}}>Message</Button>
                    </CardActions>
                  </Card>
                </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item>
                  <Card sx={{backgroundColor: 'rgb(248, 250, 252)', border: '1px solid rgb(238, 242, 246)', padding: '10px 20px'}}>
                    <Stack direction='row' justifyContent="space-between">
                      <Box sx={{display: 'flex'}}>
                      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                      <Box sx={{marginLeft: '10px'}}>
                        <Typography variant="title" sx={{marginLeft: '5px'}}>Barney</Typography>
                        <Stack direction='row'>
                          <PinDropOutlinedIcon fontSize="small" sx={{color: "rgb(105, 117, 134)"}}/>
                          <Typography variant="caption" color="rgb(105, 117, 134)">Handburgh</Typography>
                        </Stack>
                      </Box>
                      </Box>
                      <MoreHorizOutlinedIcon />
                    </Stack>
                    <CardActions sx={{paddingLeft: "0px", paddingRight: '0px'}}>
                    <Button variant="contained" sx={{width: '100%', margin: '10px 0 0 0'}}>Message</Button>
                    </CardActions>
                  </Card>
                </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item>
                  <Card sx={{backgroundColor: 'rgb(248, 250, 252)', border: '1px solid rgb(238, 242, 246)', padding: '10px 20px'}}>
                    <Stack direction='row' justifyContent="space-between">
                      <Box sx={{display: 'flex'}}>
                      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                      <Box sx={{marginLeft: '10px'}}>
                        <Typography variant="title" sx={{marginLeft: '5px'}}>Barney</Typography>
                        <Stack direction='row'>
                          <PinDropOutlinedIcon fontSize="small" sx={{color: "rgb(105, 117, 134)"}}/>
                          <Typography variant="caption" color="rgb(105, 117, 134)">Handburgh</Typography>
                        </Stack>
                      </Box>
                      </Box>
                      <MoreHorizOutlinedIcon />
                    </Stack>
                    <CardActions sx={{paddingLeft: "0px", paddingRight: '0px'}}>
                    <Button variant="contained" sx={{width: '100%', margin: '10px 0 0 0'}}>Message</Button>
                    </CardActions>
                  </Card>
                </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item>
                  <Card sx={{backgroundColor: 'rgb(248, 250, 252)', border: '1px solid rgb(238, 242, 246)', padding: '10px 20px'}}>
                    <Stack direction='row' justifyContent="space-between">
                      <Box sx={{display: 'flex'}}>
                      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                      <Box sx={{marginLeft: '10px'}}>
                        <Typography variant="title" sx={{marginLeft: '5px'}}>Barney</Typography>
                        <Stack direction='row'>
                          <PinDropOutlinedIcon fontSize="small" sx={{color: "rgb(105, 117, 134)"}}/>
                          <Typography variant="caption" color="rgb(105, 117, 134)">Handburgh</Typography>
                        </Stack>
                      </Box>
                      </Box>
                      <MoreHorizOutlinedIcon />
                    </Stack>
                    <CardActions sx={{paddingLeft: "0px", paddingRight: '0px'}}>
                    <Button variant="contained" sx={{width: '100%', margin: '10px 0 0 0'}}>Message</Button>
                    </CardActions>
                  </Card>
                </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item>
                  <Card sx={{backgroundColor: 'rgb(248, 250, 252)', border: '1px solid rgb(238, 242, 246)', padding: '10px 20px'}}>
                    <Stack direction='row' justifyContent="space-between">
                      <Box sx={{display: 'flex'}}>
                      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                      <Box sx={{marginLeft: '10px'}}>
                        <Typography variant="title" sx={{marginLeft: '5px'}}>Barney</Typography>
                        <Stack direction='row'>
                          <PinDropOutlinedIcon fontSize="small" sx={{color: "rgb(105, 117, 134)"}}/>
                          <Typography variant="caption" color="rgb(105, 117, 134)">Handburgh</Typography>
                        </Stack>
                      </Box>
                      </Box>
                      <MoreHorizOutlinedIcon />
                    </Stack>
                    <CardActions sx={{paddingLeft: "0px", paddingRight: '0px'}}>
                    <Button variant="contained" sx={{width: '100%', margin: '10px 0 0 0'}}>Message</Button>
                    </CardActions>
                  </Card>
                </Item>
            </Grid>
          </Grid>
          
        </CardContent>
      </Card>
    </Box>
  );
}
