import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormControl,
  OutlinedInput,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "500px", padding: "40px", borderRadius: "0px" }}>
        {/* <CardHeader> */}
        <img
          width={140}
          height={28}
          src="https://demo.bootstrapdash.com/demo/purple-react-free/template/demo_1/preview/static/media/logo.a79624ec.svg"
          alt=""
        />
        {/* </CardHeader> */}
        <CardContent>
          <Typography variant="h6" fontWeight="400">
            New here?
          </Typography>
          <Typography variant="subtitle1">
            Signing up is easy. It only takes a few steps
          </Typography>
          <Box component="form">
            <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <OutlinedInput
                placeholder="Username"
                sx={{ borderRadius: "0px" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <OutlinedInput
                placeholder="Email"
                sx={{ borderRadius: "0px" }}
              />
            </FormControl>
            {/* <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <OutlinedInput
                placeholder="Country"
                sx={{ borderRadius: "0px" }}
              />
            </FormControl> */}
            <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <OutlinedInput
                placeholder="Password"
                sx={{ borderRadius: "0px" }}
              />
            </FormControl>
            <Button
              variant="contained"
              size="large"
              fullWidth
              disableElevation
              sx={{
                borderRadius: "0px",
                padding: "15px 10px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Sign Up
            </Button>
            <Stack direction="row" justifyContent="center">
              <Typography variant="subtitle1" sx={{ marginTop: "20px" }}>
                Already have an account? <Link to="/auth/login">Login</Link>
              </Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
