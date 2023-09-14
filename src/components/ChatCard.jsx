import React from "react";
import {
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function ChatCard({ profile }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          src={profile.profileImg}
          sx={{ height: "45px" }}
        ></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="title" color="rgba(0, 0, 0, 0.87)">
            {profile.name}
          </Typography>
        }
        secondary={profile.lastActive}
      />
    </ListItem>
  );
}
