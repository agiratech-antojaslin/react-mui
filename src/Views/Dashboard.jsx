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
import React, { useEffect } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import StoryCard from "../components/StoryCard";
import ChatCard from "../components/ChatCard";
import PostCard from "../components/PostCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getTodos } from '../features/todo/todoSlice';

export default function Dashboard() {
  //const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("Todos: ", todos);
  //   dispatch(getTodos());
  // })

  const handleAddClick = () => {
    console.log("HAndle clic");
    dispatch(addTodo("My todo"));
  }
  
  return (
    <Box>
      <Grid container>
        <Grid item sm={12} md={8}>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} sx={{ overflowX: "auto" }}>
                <StoryCard type="add" handleAddClick={handleAddClick}></StoryCard>
                <StoryCard
                  type="view"
                  media="https://i.pinimg.com/236x/b4/bd/5d/b4bd5d3a0c0b1509fb3d1148dfd73f2f.jpg"
                ></StoryCard>
                <StoryCard
                  type="view"
                  media="https://i.pinimg.com/736x/a9/cd/03/a9cd03e0b1417cc1872c9300789c1f77.jpg"
                ></StoryCard>
                <StoryCard
                  type="view"
                  media="https://i.pinimg.com/564x/bb/34/5f/bb345fe36ed1000960d533bbbf32add3.jpg"
                ></StoryCard>
                <StoryCard
                  type="view"
                  media="https://i.pinimg.com/236x/22/5d/65/225d65b5d8fb0ff1ef46410147b5275e.jpg"
                ></StoryCard>
                <StoryCard
                  type="view"
                  media="https://i.pinimg.com/236x/da/29/0c/da290c9865244222626da4d510bbeb42.jpg"
                ></StoryCard>
              </Stack>
            </CardContent>
          </Card>
          <Stack>
            <PostCard></PostCard>
          </Stack>
          
        </Grid>
        <Grid item sm={12} md={4}>
          <Card sx={{ marginLeft: "20px" }}>
            <CardContent>
              <Typography fontSize="medium">Messages</Typography>
            </CardContent>
          </Card>
          <Card sx={{ marginLeft: "20px", marginTop: "20px", height: "100%" }}>
            <CardContent>
              <List disablePadding>
                <ChatCard
                  profile={{
                    name: "Mona",
                    lastActive: "Active Yesterday",
                    profileImg:
                      "https://i.pinimg.com/236x/5a/0b/64/5a0b64df8a059da2ea9fbc4d47c4277b.jpg",
                  }}
                ></ChatCard>
                <Divider></Divider>
                <ChatCard
                  profile={{
                    name: "Rapunzel",
                    lastActive: "Active 1h ago",
                    profileImg:
                      "https://i.pinimg.com/236x/56/4a/e5/564ae5a0731fb0f3e0aed73f06e866a3.jpg",
                  }}
                ></ChatCard>
                <Divider></Divider>
                <ChatCard
                  profile={{
                    name: "Eugine",
                    lastActive: "Active 1h ago",
                    profileImg:
                      "https://i.pinimg.com/236x/41/58/87/415887acc471fc76e00fb1cf39fb9f11.jpg",
                  }}
                ></ChatCard>
                <Divider></Divider>
                <ChatCard
                  profile={{
                    name: "Cindrella",
                    lastActive: "Active 1h ago",
                    profileImg:
                      "https://i.pinimg.com/236x/08/b7/ce/08b7ceba7494541bb0dec14883ec7fa3.jpg",
                  }}
                ></ChatCard>
                <Divider></Divider>
                <ChatCard
                  profile={{
                    name: "Nick",
                    lastActive: "Active 1h ago",
                    profileImg:
                      "https://i.pinimg.com/236x/fa/94/8a/fa948a37529ff455b7b0aee510cbca34.jpg",
                  }}
                ></ChatCard>
                <Divider></Divider>
                <ChatCard
                  profile={{
                    name: "Riya",
                    lastActive: "Active 1h ago",
                    profileImg:
                      "https://i.pinimg.com/236x/d1/01/89/d1018945e177bb756dedfe58c60b8ee5.jpg",
                  }}
                ></ChatCard>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
