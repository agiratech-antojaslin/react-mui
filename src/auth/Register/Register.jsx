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
  TextField,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";


const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validationSchema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().matches(emailRegex).required(),
    phone: yup.string().length(10).required(),
    password: yup.string().required(),
  })
  .required();

export default function Register() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`${process.env.API_BASE_URL}auth/signup`).then((response) => {
      console.log("Response: ", response)
      // if(response.data.code === 200) {
      //   navigate("/login");
      // }
    });
  };

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
            New here? {process.env.REACT_APP_API_BASE_URL}
          </Typography>
          <Typography variant="subtitle1">
            Signing up is easy. It only takes a few steps
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  placeholder="Username"
                  {...field}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  fullWidth
                  sx={{ borderRadius: "0px", marginTop: "20px" }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  placeholder="Email ID"
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  sx={{ borderRadius: "0px", marginTop: "20px" }}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  placeholder="Phone Number"
                  {...field}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  fullWidth
                  sx={{ borderRadius: "0px", marginTop: "20px" }}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  placeholder="Password"
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
                  sx={{ borderRadius: "0px", marginTop: "20px" }}
                />
              )}
            />

            {/* <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <OutlinedInput
                placeholder="Phone Number"
                sx={{ borderRadius: "0px" }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <OutlinedInput
                placeholder="Password"
                sx={{ borderRadius: "0px" }}
              />
            </FormControl> */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              disableElevation
              type="submit"
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
