import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box, Stack, Card, CardContent, CardMedia, Grid } from "@mui/material";
import "./StoryCard.css";

export default function StoryCard({ type, media, handleAddClick }) {
  return (
    <Card
      sx={{
        height: "350px",
        width: "200px",
        border: "3px solid #b66dff",
        cursor: 'pointer',
        flexShrink: 0
      }}
    >
      {type === "add" ? (
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleAddClick}
        >
          <AddOutlinedIcon fontSize="large" color="primary" />
        </CardContent>
      ) : (
        <CardMedia
          component="img"
          height="100%"
          image={media}
          alt="Paella dish"
        />
      )}
    </Card>
  );
}
