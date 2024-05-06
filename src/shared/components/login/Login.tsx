import { Box } from "@mui/material";

interface ILoginProps{
    children: React.ReactNode;
}

export const Login:React.FC<ILoginProps> = ({children}) => {
    const {isAuthenticated} = useAuthContext();
    
    if()return(
        <>{children}</>
    )

    return(
        <Box>
            Login
        </Box>
    )
}