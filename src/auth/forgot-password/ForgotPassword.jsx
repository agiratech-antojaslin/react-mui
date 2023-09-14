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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";

export default function ForgotPassword() {
  const [mailForm, SetMailForm] = useState(true);
  const [otpForm, SetOtpForm] = useState(false);
  const [resetPasswordForm, SetResetPasswordForm] = useState(false);
  const [otp, setOtp] = React.useState("");
  const onSendOtpMail = () => {
    SetMailForm(false);
    SetOtpForm(true);
  };
  const onValidateOtp = () => {
    SetOtpForm(false);
    SetResetPasswordForm(true);
  };
  const handleChange = (newValue) => {
    setOtp(newValue);
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
        {mailForm ? (
          <CardContent>
            <Typography variant="h6" fontWeight="400">
              Forgot Password?
            </Typography>
            {/* <Typography variant="subtitle1">Signin to continue</Typography> */}
            <Box component="form">
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                <OutlinedInput
                  placeholder="Username"
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
                onClick={() => onSendOtpMail()}
              >
                Send OTP
              </Button>
              <Stack direction="row" justifyContent="end">
                <Typography variant="subtitle1" sx={{ marginTop: "20px" }}>
                  <Link to="/auth/login">Back To Login</Link>
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        ) : otpForm ? (
          <CardContent>
            <Typography variant="h6" fontWeight="400">
              Enter OTP
            </Typography>
            {/* <Typography variant="subtitle1">Signin to continue</Typography> */}
            <Box component="form">
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                <MuiOtpInput value={otp} onChange={handleChange} length={6} />
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
                onClick={() => onValidateOtp()}
              >
                Validate Otp
              </Button>
              <Stack direction="row" justifyContent="end">
                <Typography variant="subtitle1" sx={{ marginTop: "20px" }}>
                  <Link to="/auth/login">Back To Login</Link>
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        ) : resetPasswordForm ? (
          <CardContent>
            <Typography variant="h6" fontWeight="400">
              Reset Password
            </Typography>
            {/* <Typography variant="subtitle1">Signin to continue</Typography> */}
            <Box component="form">
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                <OutlinedInput
                  placeholder="Password"
                  sx={{ borderRadius: "0px" }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                <OutlinedInput
                  placeholder="Confirm Password"
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
                onClick={() => onValidateOtp()}
              >
                Reset
              </Button>
              <Stack direction="row" justifyContent="end">
                <Typography variant="subtitle1" sx={{ marginTop: "20px" }}>
                  <Link to="/auth/login">Back To Login</Link>
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        ) : null}
      </Card>
    </Box>
  );
}
