import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import axios from "../api/AxiosConfig";

export default function Dashboard() {
  const [response, setResponse] = React.useState();
  const sendRequest = () => {
    axios.get("api/test/").then((res) => {
      setResponse(res.data.message);
    });
  };

  return (
    <>
      <Box>
        <h2>Dashboard</h2>
      </Box>
      <Box>
        <Button variant="contained" onClick={sendRequest}>
          Send Request
        </Button>
      </Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Response:
          </Typography>
          <Typography variant="h5" component="div">
            {response}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
