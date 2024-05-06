import { BrowserRouter } from "react-router-dom";

import './shared/forms/TraducoesYup';
import { AppThemeProvider, DrawerProvider } from '.shared/contexts';
import { MenuLateral } from './shared/components';
import { AppRoutes } from './routes';
import { AuthProvider } from "./contexts";
import { Login } from "./shared/components";



export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          <DrawerProvider>
            <BrowserRouter>
              <MenuLateral>
                <AppRoutes />
              </MenuLateral>
            </BrowserRouter>
          </DrawerProvider>
        </Login>
      </AppThemeProvider>
    </AuthProvider>
  )
}