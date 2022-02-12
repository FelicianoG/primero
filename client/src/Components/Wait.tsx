import { CircularProgress } from "@material-ui/core";

interface WaitProps {
    isLoading: boolean;
    children?: React.ReactNode;
}

export default function Wait({isLoading, children} : WaitProps){
    if(isLoading){
        return <CircularProgress />;
    }
    return <>{children}</>;
}