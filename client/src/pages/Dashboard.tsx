import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import DashboardService from "../services/dashboard.service";

export default function Dashboard() {
  const [response, setResponse] = useState();
  
  const service = new DashboardService();
  
  const sendRequest = async () => {
      const res = await service.get();
      setResponse(res.data.message);
     
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
