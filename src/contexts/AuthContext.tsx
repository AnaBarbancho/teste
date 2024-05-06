import { useContext } from "react";

interface IAuthContextData{

}


const AuthContext = createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = "APP_ACCESS_TOKEN";

interface IAuthProviderProps{

}
export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) =>{
    
}

export const useAuthContext = () =>useContext(AuthContext);
