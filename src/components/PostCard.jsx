import React from "react";
import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardHeader,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  CardActions,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";

export default function PostCard() {
  return (
    <Card sx={{ marginTop: "20px" }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://i.pinimg.com/236x/fa/94/8a/fa948a37529ff455b7b0aee510cbca34.jpg"
              sx={{ height: "45px", marginRight: "10px" }}
            ></Avatar>
            <Typography variant="title" color="rgba(0, 0, 0, 0.87)">
              Nick
            </Typography>
          </Box>
          <MoreVertIcon />
        </Stack>
      </CardContent>
      <CardMedia
        component="img"
        height="550"
        image="https://i.pinimg.com/236x/6c/5c/fb/6c5cfb5a42a4db7e7e1eecea434de308.jpg"
        alt="Paella dish"
      />
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="like"
              size="small"
              sx={{ marginRight: "20px" }}
            >
              <FavoriteBorderIcon color="primary" />
            </IconButton>
            <IconButton
              aria-label="like"
              size="small"
              sx={{ marginRight: "20px" }}
            >
              <ChatBubbleOutlineRoundedIcon color="primary" />
            </IconButton>
            <IconButton
              aria-label="like"
              size="small"
              sx={{ marginRight: "20px" }}
            >
              <ShareRoundedIcon color="primary" />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              aria-label="like"
              size="small"
              sx={{ marginRight: "20px" }}
            >
              <TurnedInNotRoundedIcon color="primary" />
            </IconButton>
          </Box>
        </Stack>
      </CardActions>
      <Box sx={{ padding: "15px" }}>
        <Typography
          variant="subtitle"
          display="block"
          color="rgba(0, 0, 0, 0.87)"
        >
          207 likes
        </Typography>
        <Typography variant="subtitle" display="block">
          Nick Mommy's memo...
        </Typography>
        <Typography variant="subtitle" fontSize="small" display="block">
          View all 30 comments
        </Typography>
        <Typography fontSize="10px">6h ago</Typography>
      </Box>
    </Card>
  );
}
