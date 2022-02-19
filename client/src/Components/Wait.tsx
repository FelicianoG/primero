import { CircularProgress } from "@mui/material";

interface WaitProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

export default function Wait({ isLoading, children }: WaitProps) {
  if (isLoading) {
    return <CircularProgress />;
  }
  return <>{children}</>;
}
