import {
  Grid,
  Stack,
  Card,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  ListItemAvatar,
  Avatar,
  Typography,
  CardHeader,
  CardContent,
  Box,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
import Item from "@mui/material/Grid";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BurstModeOutlinedIcon from "@mui/icons-material/BurstModeOutlined";
import AttachmentIcon from '@mui/icons-material/Attachment';
import LayersIcon from '@mui/icons-material/Layers';

export default function ProfileCard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Item>
          <Card sx={{ padding: "10px", marginBottom: "25px" }}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <ChevronRightIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{ bgcolor: "#e4e7ec", color: "#1c2f59" }}
                  >
                    <GroupOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6" color="#1c2f59" fontWeight="bold">
                      239k
                    </Typography>
                  }
                  secondary="Friends"
                />
              </ListItem>
              <Divider></Divider>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <ChevronRightIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{ bgcolor: "#fde8ef", color: "#ea3a72" }}
                  >
                    <BurstModeOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6" color="#ea3a72" fontWeight="bold">
                      234k
                    </Typography>
                  }
                  secondary="Followers"
                />
              </ListItem>
            </List>
          </Card>
          <Card sx={{ padding: "10px" }}>
            <CardHeader
              title={
                <Typography variant="title" fontWeight="bold" display="block">
                  About
                </Typography>
              }
              subheader={
                <Typography variant="p">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Typography>
              }
            ></CardHeader>
            <Divider></Divider>
            <Box>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      sx={{ bgcolor: "transparent", color: "#ea3a72" }}
                    >
                      <BurstModeOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText secondary="https://www.instagram.com/codedthemes" />
                </ListItem>
              </List>
            </Box>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>
          <Card sx={{padding: '10px'}}>
            <CardContent>
              <TextField
                placeholder="What's on your mind?"
                multiline
                rows={4}
                maxRows={4}
                sx={{width: '100%'}}
              />
            </CardContent>
            <CardActions>
              <Stack direction='row' justifyContent="space-between" alignItems="center" spacing={2} sx={{width: '100%'}}>
                <Button variant='text' startIcon={<AttachmentIcon />}>
                  Gallery
                </Button>
                <Button variant='contained' startIcon={<LayersIcon />}>
                  Post
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Item>
      </Grid>
    </Grid>
  );
}
